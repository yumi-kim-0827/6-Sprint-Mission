import Profile from './Profile';
import styled from 'styled-components';
import ic_kebab from '../assets/ic_kebab.png';

export default function Comment({ content, createdAt, ...comment }) {
  const detailDate = a => {
    const milliSeconds = new Date() - a;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };

  const nowDate = detailDate(new Date(createdAt));

  console.log(createdAt);
  console.log(nowDate);
  const { nickname, image } = comment.writer;
  return (
    <CommentContainer>
      <p>{content}</p>
      <Kebab>
        <img src={ic_kebab} alt='메뉴바' />
      </Kebab>
      <Profile image={image} nickname={nickname}>
        <CreatedAt>{nowDate}</CreatedAt>
      </Profile>
      <HorizontalLine></HorizontalLine>
    </CommentContainer>
  );
}

const CreatedAt = styled.span`
  color: #9ca3af;
  font-size: 12px;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 16px;
  color: #1f2937;
  position: relative;
`;

const Kebab = styled.div`
  position: absolute;
  right: 0;
  width: 24px;
  height: 24px;

  & img {
    width: 100%;
  }
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e7eb;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media (min-width: 1199px) {
  }
`;
