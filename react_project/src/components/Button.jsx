import React from 'react'
import { Link } from 'react-router-dom'

function Button({children}) {
  let location;
  if (children === '로그인') location = "/comunity";
  if (children === '상품 등록하기') location = "/additem";

  return (
    <button>
      <Link to={location}>{children}</Link>
    </button>
  )
}

export default Button