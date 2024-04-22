import React from 'react';
import './Writeform.css';
import Btnsubmit from '../assets/images/btn_submit.png';
import TextInput1 from './TextInput';
import UploadImage from './UploadImage';

function Writeform () {
  return (
    <div className='writeform'>
      <div className='submitbar'>
        <div className='상품등록하기'>상품 등록하기</div>
        <img src={Btnsubmit} className='Btnsubmit' alt='등록버튼'/>
      </div>
      <div className='title'>상품 이미지</div>
      <UploadImage/>
      <div className='title'>상품명</div>
      <TextInput1/>
      <div className='title'>상품 소재</div>
      <TextInput1/>
      <div className='title'>판매 가격</div>
      <TextInput1/>
      <div className='title'>태그</div>
      <TextInput1 placeholder="태그를 입력해주세요"/>
    </div>
    
  );
}

export default Writeform;