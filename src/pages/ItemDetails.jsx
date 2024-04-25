import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getItemsComments } from '../api/getItemsComments';
import useItem from '../hooks/useItem';
import ItemDetailCard from '../components/ItemDetailCard';
import Comment from '../components/Comment';
import ic_back from '../assets/ic_back.png';
import Img_inquiry_empty from '../assets/Img_inquiry_empty.png';

export default function ItemDetails() {
  const params = useParams();
  const item = useItem(params.id);
  const [comments, setComments] = useState([]);
  const [inquiryComment, setInquiryComment] = useState('');
  const itemId = params.id;
  const nav = useNavigate();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getItemsComments(itemId, 3);
        setComments(data.list);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };
    fetchComments();
  }, [itemId]);

  const handleGoBack = () => {
    nav(-1);
  };

  const handleChange = e => {
    setInquiryComment(e.target.value);
  };

  const isFormComplete = inquiryComment.trim() !== '';

  const buttonStyle = {
    backgroundColor: isFormComplete ? '#3692FF' : '#9CA3AF',
  };

  if (!item) {
    return <div>데이터 로딩중...</div>;
  }
  return (
    <Container>
      <ItemDetailCard {...item} />
      <HorizontalLine></HorizontalLine>
      <Form>
        <label htmlFor='comment'>
          문의하기
          <TextArea
            id='comment'
            value={inquiryComment}
            onChange={handleChange}
            placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
          />
        </label>
        <Button type='submit' disabled={!isFormComplete} style={buttonStyle}>
          등록
        </Button>
      </Form>
      {comments.length === 0 ? (
        <EmptyComment>
          <div>
            <img src={Img_inquiry_empty} alt='회색 판다 그림' />
          </div>
          <p>아직 문의가 없습니다.</p>
        </EmptyComment>
      ) : (
        comments.map(comment => <Comment key={comment.id} {...comment} />)
      )}
      <BlueButton onClick={handleGoBack}>
        <p>목록으로 돌아가기</p>
        <img src={ic_back} alt='뒤로 돌아가기' />
      </BlueButton>
    </Container>
  );
}

const Container = styled.div`
  width: 343px;
  margin: auto;
  padding-bottom: 121px;

  @media (min-width: 768px) {
    width: 696px;
  }
  @media (min-width: 1199px) {
    width: 1200px;
  }
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e7eb;
  margin: 8px 0 16px 0;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media (min-width: 1199px) {
    margin-bottom: 24px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 16px;
  padding-bottom: 16px;

  @media (min-width: 768px) {
    padding-bottom: 24px;
  }
`;

const TextArea = styled.textarea`
  box-sizing: border-box;
  background-color: #f3f4f6;
  min-width: 344px;
  width: 100%;
  height: 104px;
  padding: 16px 24px;
  border: 0px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 400;
  resize: none;

  &::placeholder {
    color: #9ca3af;
    line-height: 24px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -1px;
  }

  @media (min-width: 768px) {
    width: 696px;
    &::placeholder {
      font-size: 16px;
    }
  }
  @media (min-width: 1199px) {
    width: 1200px;
  }
`;

const Button = styled.button`
  max-width: 71px;
  padding: 12px 23px;
  background-color: #9ca3af;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
`;

const EmptyComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & div {
    width: 200px;
    height: 200px;
  }

  & img {
    width: 100%;
    height: 100%;
  }

  & p {
    font-weight: 400;
    font-size: 16px;
    color: #9ca3af;
    line-height: 24px;
  }
`;

const BlueButton = styled.button`
  box-sizing: border-box;
  min-width: 240px;
  padding: 12px 40px;
  background-color: #3692ff;
  border-radius: 40px;
  color: white;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  margin: 24px auto 0;
  display: flex;
  align-items: center;
  gap: 10px;
  & img {
    width: 24px;
  }

  @media (min-width: 768px) {
    margin-top: 24px;
  }
`;
