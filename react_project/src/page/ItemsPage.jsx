import React from 'react'
import styles from '../styles/ItemsPage.module.css'
import { useParams } from 'react-router-dom'

function ItemsPage() {
  const params = useParams();

  return (
    <div className={styles.ItemPage_wrap}>
      {params.id}번 상품 입니다~
    </div>
  )
}

export default ItemsPage