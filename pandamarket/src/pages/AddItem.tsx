/* eslint-disable jsx-a11y/alt-text */
import React, { KeyboardEvent, useState } from 'react'
import styles from '../styles/additem.module.css'
import FileInput from '../components/FileInput'

import icon_tag_remove from '../assets/icon_tag_remove.png'

const INITIAL_VALUES = {
  title: '',
  content: '',
  price: '',
  // 기본값은 null이지만 나중에 파일객체로 변경될 수 있음
  imgFile: null as File | null,
}

interface AddItemProps {
  initialValues?: typeof INITIAL_VALUES // typeof 없으면 객체 구조를 명시적으로 작성해야 함
  initialPreview?: string
}

function AddItem({
  initialValues = INITIAL_VALUES,
  initialPreview,
}: AddItemProps) {
  const [values, setValues] = useState<typeof INITIAL_VALUES>(initialValues)
  const [tags, setTags] = useState<string[]>([])
  const [inputTag, setInputTag] = useState('')

  const isDisabled = !values.title || !values.content || !values.price

  // input 값 받아오기
  const handleTagInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputTag(e.target.value)
  }

  const inputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputTag) {
      if (!tags.includes(inputTag)) {
        //동일한 이름 태그 중복 안 되게
        setTags([...tags, inputTag])
      }
      setInputTag('')
      e.preventDefault() // 엔터 눌렀을 때 폼 제출하지 않도록 막기
    }
  }

  const removeTag = (removeTagIndex: number) => {
    const newTags = tags.filter((tag, index) => index !== removeTagIndex)
    setTags(newTags)
  }

  // input 입력할 때마다 새로운 값 반영하기
  const handleChange = (name: string, value: any) => {
    if (name === 'imgFile' && value instanceof File) {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }))
    } else {
      const formatPrice = (value: string) => {
        // 숫자와 콤마(,)만을 허용 (문자열 입력 못하게)
        const numericValue = value.replace(/[^0-9,]/g, '')
        // 콤마를 제거한 후 다시 콤마 추가
        const rawNumbers = numericValue.replace(/,/g, '')
        return rawNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
      setValues((prevValues) => ({
        ...prevValues,
        [name]: name === 'price' ? formatPrice(value) : value,
      }))
    }
  }
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    handleChange(name, value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', values.title)
    formData.append('content', values.content)
    formData.append('price', values.price)
    if (values.imgFile) {
      formData.append('imgFile', values.imgFile)
    }
    setValues(INITIAL_VALUES)
  }
  return (
    <div className={styles.container}>
      <div className={styles['add-item-nav']}>
        <h3 className={styles['additem-title']}>상품 등록하기</h3>
        <button
          className={
            isDisabled ? styles['button-disabled'] : styles['button-abled']
          }
          disabled={isDisabled}
          onClick={handleSubmit}
        >
          등록
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <h4>상품 이미지</h4>
        <FileInput
          className="fileinput"
          name="imgFile"
          value={values.imgFile}
          initialPreview={initialPreview}
          onChange={(name, file) => handleChange(name, file)}
        />

        <h4>상품명</h4>
        <input
          type="text"
          name="title"
          value={values.title}
          placeholder="상품명을 입력해주세요"
          onChange={handleInputChange}
        />
        <h4>상품 소개</h4>
        <textarea
          name="content"
          value={values.content}
          placeholder="상품 소개를 입력해주세요"
          onChange={handleInputChange}
        />

        <h4>판매가격</h4>
        <input
          type="text"
          name="price"
          value={values.price}
          placeholder="판매 가격을 입력해주세요"
          onChange={handleInputChange}
        />

        <h4>태그</h4>
        <input
          type="text"
          value={inputTag}
          onChange={handleTagInput}
          onKeyDown={inputKeyDown}
          placeholder="태그를 입력해주세요 (엔터를 누르면 태그가 적용돼요)"
        />
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <div key={index} className={styles.tag}>
              {tag}
              <img
                src={icon_tag_remove}
                onClick={() => removeTag(index)}
                className={styles['tag-remove']}
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  )
}

export default AddItem
