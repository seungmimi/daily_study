import React from 'react'

import styles from './seller.module.css'

const AddProd = (props) => {
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
                <p>Lorem ipsum adipisicing elit. tempora culpa modi mollitia labore quae, fuga reiciendis molestiae ullam?</p>
              </li>
              <li className={styles['alert-list']}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li className={styles['alert-list']}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate totam fugiat rerum, soluta laboriosam aut eos quaerat repudiandae iste cum tempora culpa modi mollitia labore quae</p>
              </li>
            </ul>
          </div>
          <div className={styles['edit-box']}>

          </div>
        </article>
      </div>
    </div>
  )
}

export default AddProd
