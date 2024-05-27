import { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react';
import '../styles/AddItem.css';
import usePageTitle from '../hooks/usePageTitle';
import FileInput from '../components/FileInput';
import TagInput from '../components/TagInput';

export default function AddItem() {
  usePageTitle('판다마켓: 상품 등록하기');
  const [values, setValues] = useState({
    imgFile: null,
    name: '',
    description: '',
  });
  const [tagList, setTagList] = useState<string[]>([]);
  const [price, setPrice] = useState('');

  const addComma = (price: string) => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return returnString;
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let str = value.replaceAll(',', '');
    setPrice(str);
  };

  const handleFileChange = (name: string, value: File | null) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleChange = (name: string, value: string | null) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };

  const isFormComplete =
    values.name.trim() !== '' &&
    values.description.trim() !== '' &&
    Number(price) > 0 &&
    values.imgFile !== null &&
    tagList.length > 0;

  const buttonStyle = {
    backgroundColor: isFormComplete ? '#3692FF' : '#9CA3AF',
  };

  const preventDefault = (e: KeyboardEvent<HTMLFormElement>) => {
    e.key === 'Enter' && e.preventDefault();
  };

  return (
    <form className='add-item-form' action='submit' onSubmit={handleSubmit} onKeyDown={preventDefault}>
      <div className='register-item__title-wrap'>
        <h2 className='register-item__title'>상품 등록하기</h2>
        <button className='register-item__btn' style={buttonStyle} type='submit' disabled={!isFormComplete}>
          등록
        </button>
      </div>
      <FileInput
        name='imgFile' //
        value={values.imgFile}
        onChange={handleFileChange}
      />
      <label htmlFor='name'>
        상품명
        <input
          id='name'
          name='name'
          value={values.name}
          type='text'
          placeholder='상품명을 입력해주세요'
          onChange={handleInputChange}
          className='add-item-form__name-input'
        />
      </label>

      <label htmlFor='description'>
        상품 소개
        <textarea
          id='description'
          name='description'
          value={values.description}
          placeholder='상품 소개를 입력해주세요'
          onChange={handleTextAreaChange}
          className='add-item-form__description-input'
        />
      </label>

      <label htmlFor='price'>
        판매가격
        <input
          id='price'
          name='price'
          value={addComma(price) || ''}
          type='text'
          placeholder='판매 가격을 입력해주세요'
          onChange={handlePriceChange}
          className='add-item-form__price-input'
        />
      </label>
      <TagInput
        name='tag'
        tagList={tagList} //
        setTagList={setTagList}
      />
    </form>
  );
}
