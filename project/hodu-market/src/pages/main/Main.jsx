import React from 'react'
import styles from './main.module.css'
import ImgSlide from '../../component/imgSlide/ImgSlide'
import MainProdList from '../../component/prodList/MainProdList'

const Main = () => {
  return (
    <>
      <main>
        <section className={styles['slide-area']}>
          <h3 className='a11y-hidden'>이미지 슬라이드</h3>
          <ImgSlide />
        </section>
        <div className='pageWrap'>
          <div className='content-area header-top'>
            <section className={styles['prod-area']}>
              <h3 className='a11y-hidden'>상품 리스트</h3>
              <MainProdList />
            </section>
          </div>
        </div>
      </main>

    </>
  )
}

export default Main
