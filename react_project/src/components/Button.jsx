import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Button.module.css';

function Button({children}) {
  let location;
  let design;
  if (children === '로그인') {
    location = "/comunity";
    design = styles.button;
  }
  if (children === '상품 등록하기') {
    location = "/additem";
    design = styles.button;
  }
  
  return (
    <Link to={location}>
      <button className={design}>{children}</button>
    </Link>
  )
}

export default Button