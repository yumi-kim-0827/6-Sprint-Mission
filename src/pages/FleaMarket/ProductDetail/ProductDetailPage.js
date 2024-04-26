import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Comments from './Comments';
import { getProductDetail, getComments } from '../../../api/api';
import { ReactComponent as HeartIcon } from '../../../assets/heartIcon.svg';
import { ReactComponent as BackIcon } from '../../../assets/backIcon.svg';
import ProfileImg from '../../../assets/profileIcon.svg';
import { ReactComponent as InquireImg } from '../../../assets/inquireImg.svg';
import * as S from './Styles/ProductDetailPageStyles';

function ProductDetailPage() {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    setInputValue(value);
  };

  const isFormValid = () => {
    return inputValue.trim() !== '';
  };

  useEffect(() => {
    const abortController = new AbortController();

    const handleProductDetail = async () => {
      const productDetail = await getProductDetail(productId, {
        signal: abortController.signal,
      });
      const commentsData = await getComments(productId, {
        signal: abortController.signal,
      });
      setProducts(productDetail);
      setComments(commentsData.list);
    };

    handleProductDetail();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <S.Wrapper>
      <S.ProductDetailContainer>
        <S.ProductImage src={products.images} alt={products.name} />
        <S.DescriptionContainer>
          <div>
            <div>
              <S.DescriptionBox>
                <div>
                  <S.DescriptionTitle>{products.name}</S.DescriptionTitle>
                  <S.DescriptionPrice>{products.price}</S.DescriptionPrice>
                </div>
                <S.SettingIcon />
              </S.DescriptionBox>
              <S.IntroduceContainer>
                <S.Title>상품 소개</S.Title>
                <p>{products.description}</p>
              </S.IntroduceContainer>
            </div>
            <div>
              <S.Title>상품 태그</S.Title>
              <S.TagUl>
                {products.tags?.map((tag, index) => (
                  <S.TagLi key={index}>#{tag}</S.TagLi>
                ))}
              </S.TagUl>
            </div>
          </div>
          <S.HeartContainer>
            <HeartIcon />
            <S.HeartCount>123</S.HeartCount>
          </S.HeartContainer>
        </S.DescriptionContainer>
      </S.ProductDetailContainer>

      <S.CommentsContainer>
        <S.InputTitle>문의하기</S.InputTitle>
        <S.Input
          onChange={handleChange}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <S.SubmitButton type="button" disabled={!isFormValid()}>
          등록
        </S.SubmitButton>
        {comments.length === 0 ? (
          <S.InquireContainer>
            <InquireImg />
            <S.InquireDescription>아직 문의가 없습니다.</S.InquireDescription>
          </S.InquireContainer>
        ) : (
          <Comments comments={comments} />
        )}
        <S.StyledLink to="/items">
          <S.BackButton>
            목록으로 돌아가기
            <BackIcon />
          </S.BackButton>
        </S.StyledLink>
      </S.CommentsContainer>
    </S.Wrapper>
  );
}

export default ProductDetailPage;
