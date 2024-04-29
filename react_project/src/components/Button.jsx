import React from 'react'
import styles from '../styles/Button.module.css';

function Button({children, type, onClick}) {

  return (
    <>
    
    <button className={`${styles['Button']} ${'' || styles.Button_type}`} onClick={onClick}>{children}</button>
    </>
  )
}

export default Button