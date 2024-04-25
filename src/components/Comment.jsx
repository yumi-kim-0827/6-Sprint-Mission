import moment from 'moment';
import 'moment/locale/ko';

import Profile from './Profile';
import styled from 'styled-components';
import ic_kebab from '../assets/ic_kebab.png';

export default function Comment({ content, createdAt, ...comment }) {
  const { nickname, image } = comment.writer;
  let nowDate = moment(createdAt).startOf('hour').fromNow();

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
