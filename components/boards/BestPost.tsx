import styled from "styled-components";
import BestBadge from "./BestBadge";
import PostInfo from "./PostInfo";
import PostContent from "./PostContent";
import formatDate from "@/utils/formatDate";

interface BestPostProps {
  className?: string;
  data: Post;
}

const BestPost = ({ className = "", data }: BestPostProps) => {
  const { title, content, image, likeCount, createdAt, writer } = data;

  return (
    <SCard className={className}>
      <BestBadge />
      <SPostContent title={title} content={content} image={image} />
      <SPostInfo
        showProfile={false}
        writer={writer}
        likeCount={likeCount}
        createdAt={formatDate(createdAt)}
      />
    </SCard>
  );
};

const SCard = styled.div`
  width: 343px;
  height: 167px;
  padding: 0 24px 16px 24px;
  border-radius: 8px;
  background-color: var(--color-cool-gray-100);
`;

const SPostContent = styled(PostContent)`
  margin-top: 16px;

  > div {
    margin-left: 8px;
  }
`;

const SPostInfo = styled(PostInfo)`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: auto;
  grid-template-areas: "writer favorites createdAt";
  margin-top: 16px;

  .postInfo_writer {
    grid-area: writer;
    margin-right: 8px;
  }

  .postInfo_favorites {
    grid-area: favorites;
    margin-right: auto;
  }

  .postInfo_createdAt {
    grid-area: createdAt;
    margin-left: auto;
  }
`;

export default BestPost;
