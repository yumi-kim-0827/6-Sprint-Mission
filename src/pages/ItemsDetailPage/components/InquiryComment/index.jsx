import React from 'react';
import { Division, Inquiry, Comment, CommentUser, BackButton } from './style';
import Button from 'components/Button';
import BackIcon from 'assets/icons/Back';

const InquiryComment = () => {
  const commentList = [
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
  ];

  return (
    <div>
      <Division />
      <Inquiry>
        <span>문의하기</span>
        <textarea
          id="inquiry"
          rows={3}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <Button title="등록" type="submit" />
      </Inquiry>
      <div>
        {commentList.map((comment) => (
          <Comment key={comment.id}>
            <p>{comment.content}</p>
            <CommentUser>
              <img
                src={comment.writer.image}
                alt={`${comment.writer.nickname}'s profile`}
              />
              <div>
                <span>{comment.writer.nickname}</span>
                <span>1시간 전</span>
              </div>
            </CommentUser>
            <Division />
          </Comment>
        ))}
      </div>
      <BackButton>
        목록으로 돌아가기
        <BackIcon />
      </BackButton>
    </div>
  );
};

export default InquiryComment;
