import React from 'react'

import styles from './seller.module.css'
import AddProdForm from './AddProdForm'
import { useParams } from 'react-router-dom'

const AddProd = () => {
  const prodId = useParams();
  return (
    <div className='pageWrap'>
      <div className='header-top'>
        <div className={styles['title-box']}>
          <h3>상품 등록</h3>
        </div>
        <article className={styles['content-box']}>
          <div className={styles['tab-box']}>
            <strong className={styles['alert-title']}>* 상품 등록 주의사항</strong>
            <ul className={styles['alert-box']}>
              <li className={styles['alert-list']}>
                <p>*표시가 있는 항목은 필수 입력 항목입니다.</p>
              </li>
              <li className={styles['alert-list']}>
                <p>Lorem ipsum adipisicing elit. tempora culpa modi mollitia labore quae, fuga reiciendis molestiae ullam?</p>
              </li>
              <li className={styles['alert-list']}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li className={styles['alert-list']}>
                <p>Lorem ipsum dolor sit amet</p>
              </li>
            </ul>
          </div>
          <AddProdForm prodId = {prodId.num}/>
        </article>
      </div>
    </div>
  )
}

export default AddProd
