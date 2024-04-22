import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Button.module.css';

function Button({children}) {
  let location;
  let design;
  if (children === '로그인') {
    location = "/comunity";
    design = styles.button_basic;
  }
  if (children === '상품 등록하기') {
    location = "/additem";
    design = styles.button_basic;
  }
  if (children === '등록') {
    location = "/items";
    design = styles.button_registration;
  }
  
  return (
    <Link to={location}>
      <button className={design}>{children}</button>
    </Link>
  )
}

export default Button