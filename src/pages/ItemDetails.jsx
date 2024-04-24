import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getItemsId } from '../services/api';

import styled from 'styled-components';
import useItem from '../hooks/useItem';
import ItemDetailCard from '../components/ItemDetailCard';
import Comment from '../components/Comment';
import ic_back from '../assets/ic_back.png';

const mockComment = {
  list: [
    {
      id: 5,
      content: '상세 잔기스 사진 있을까요?',
      createdAt: '2024-04-23T13:05:07.675Z',
      updatedAt: '2024-04-23T13:05:07.675Z',
      writer: {
        id: 20,
        nickname: '이용섭',
        image:
          'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/20/1713876617092/123123.png',
      },
    },
    {
      id: 4,
      content: '색상이 어떻게 되는지 궁금해요!',
      createdAt: '2024-04-23T13:04:49.873Z',
      updatedAt: '2024-04-23T13:04:49.873Z',
      writer: {
        id: 20,
        nickname: '이용섭',
        image:
          'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/20/1713876617092/123123.png',
      },
    },
  ],
  nextCursor: null,
};

export default function ItemDetails() {
  const params = useParams();
  const curItem = useItem(params.id);
  const [comments, setComments] = useState(mockComment);

  if (!curItem) {
    return <div>데이터 로딩중...</div>;
  }
  return (
    <Container>
      <ItemDetailCard {...curItem} />
      <HorizontalLine></HorizontalLine>
      <Form action=''>
        <label htmlFor='comment'>
          문의하기
          <TextArea placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.' />
        </label>
        <Button>등록</Button>
      </Form>
      {comments.list.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
      <BlueButton>
        <p>목록으로 돌아가기</p>
        <img src={ic_back} alt='' />
      </BlueButton>
    </Container>
  );
}

const Container = styled.div`
  width: 343px;
  margin: auto;
  padding-bottom: 162px;

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
  margin: 0 auto;
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
