import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import styles from './seller.module.css'
import BasicBtn from '../../component/Button'
import axios from 'axios';

const AddProdForm = (props) => {
  const baseUrl = "https://openmarket.weniv.co.kr/"
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  //이미지 미리보기
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
          setImgFile(reader.result);
    };
  };

  //input 입력 데이터 관리
  const [prodName, setProdName] = useState(''); //상품명
  const [prodPrice, setProdPrice] = useState(''); //상품가격
  const [prodMethod, setProdMethod] = useState('PARCEL'); //배송수단
  const [prodFee, setProdFee] = useState(''); //배송비
  const [prodStock, setProdStock] = useState(''); //재고
  const handleInputNum = (e, content) => { //숫자데이터 입력 input handle함수(0이상만 입력 가능)
    const zeroCheck = /^0[0-9].*$/;
    if(e.target.value >= 0  && !zeroCheck.test(e.target.value)){
      content(e.target.value);
    }else{
      alert('0 이상의 숫자를 입력해 주세요!')
    }
  }

  useEffect(() => {
    if(props.prodId !== undefined){
      const getProdInfo = async() => {
        await axios.get(baseUrl + `products/${props.prodId}`)
        .then(function(res){
          setImgFile(res.data.image);
          setProdName(res.data.product_name);
          setProdPrice(res.data.price);
          setProdMethod(res.data.shipping_method);
          setProdFee(res.data.shipping_fee);
          setProdStock(res.data.stock);
        })
        .catch(function(error){
          console.log(error);
        })
      }
      getProdInfo()
    }
  },[])
  
  //필수 입력 항목 비어있을 경우 '저장'버튼 disabled
  const handleSaveBtn = () => {
    if(prodName && imgFile && prodPrice && prodFee && prodStock){
      return false;
    }else{
      return true;
    }
  }

  //입력 정보 전송기능(수정-추가 구분)
  const prodAddFn = async(e) => {
    e.preventDefault();
    if(props.prodId !== undefined){
      await axios.put(baseUrl + `/products/${props.prodId}/`,{
        product_name: prodName,
        price: parseInt(prodPrice),
        shipping_method: prodMethod,
        shipping_fee: parseInt(prodFee),
        stock: parseInt(prodStock),
        products_info: prodName
        },
        {
          headers: {
            Authorization : `JWT ${token}`,
          }
        }).then(function(){
          navigate('/sellercenter');
      }).catch(function(error){
        console.error(error);
      })
    }else{
      const prodformData = new FormData();
      prodformData.append('product_name', prodName);
      prodformData.append('image', imgRef.current.files[0]);
      prodformData.append('price', prodPrice);
      prodformData.append('shipping_method', prodMethod);
      prodformData.append('shipping_fee', prodFee);
      prodformData.append('stock', prodStock);
      prodformData.append('product_info', prodName);
      await axios.post(baseUrl + '/products/',prodformData,
        {
          headers: {
            Authorization : `JWT ${token}`,
          }
        }).then(function(){
          navigate('/sellercenter');
      }).catch(function(error){
        console.error(error);
      })
    }
  }


  return (
    <form className={styles['edit-box']} onSubmit={(e) => prodAddFn(e)}>
      <div className={styles['edit-obj']}>
        <span className={styles['obj-title']}>*상품 이미지</span>
        {props.prodId === undefined ?
        <>
        <input type='file' accept='image/*' onChange={saveImgFile} ref={imgRef} />
          <div className={styles['img-box']}>
            {imgFile ? <img src={imgFile ? imgFile : ''} alt='' /> : <i className='icon icon-img' />}
          </div></>
        :
        <div className={styles['img-box']}>
          <img src={imgFile} alt='' />
        </div>
        }
      </div>
      <div className={styles['input-box']}>
        <div className={styles['edit-obj']}>
          <span className={styles['obj-title']}>*상품명</span>
          <input type='text' value={prodName} onChange={(e) => {setProdName(e.target.value)}}/>
        </div>
        <div className={styles['edit-obj']}>
          <span className={styles['obj-title']}>*판매가</span>
          <div className={styles['obj-deco-input']}>
            <input type='number' value={prodPrice} onChange={(e) => {handleInputNum(e, setProdPrice)}}/>
            <span>원</span>
          </div>
        </div>
        <div className={styles['edit-obj']}>
          <span className={styles['obj-title']}>*배송방법</span>
          {prodMethod === 'PARCEL' ? 
            <>
              <button type='button' className={styles.active} onClick={() => setProdMethod('PARCEL')}>택배,소포,등기</button>
              <button type='button' onClick={() => setProdMethod('DELIVERY')}>직접배송(화물배달)</button>
            </>
            :
            <>
              <button type='button' onClick={() => setProdMethod('PARCEL')}>택배,소포,등기</button>
              <button type='button' className={styles.active} onClick={() => setProdMethod('DELIVERY')}>직접배송(화물배달)</button>
            </>
          }
          
        </div>
        <div className={styles['edit-obj']}>
          <span className={styles['obj-title']}>*기본 배송비</span>
          <div className={styles['obj-deco-input']}>
            <input type='number' value={prodFee} onChange={(e) => {handleInputNum(e, setProdFee)}}/>
            <span>원</span>
          </div>
        </div>
        <div className={styles['edit-obj']}>
          <span className={styles['obj-title']}>*재고</span>
          <div className={styles['obj-deco-input']}>
            <input type='number' value={prodStock} onChange={(e) => {handleInputNum(e, setProdStock)}}/>
            <span>개</span>
          </div>
        </div>
      </div>
      <div className={styles['button-box']}>
        <BasicBtn $white type='button' onClick={() => {navigate('/sellercenter')}}>취소</BasicBtn>
        <BasicBtn $green type='submit' disabled={handleSaveBtn()}>저장하기</BasicBtn>
      </div>
    </form>
  )
}

export default AddProdForm
