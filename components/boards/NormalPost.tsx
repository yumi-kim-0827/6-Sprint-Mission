import styled from "styled-components";
import PostInfo from "./PostInfo";
import PostContent from "./PostContent";
import formatDate from "@/utils/formatDate";

interface NormalPostProps {
  className?: string;
  data: Post;
}

export const NormalPost = ({ className = "", data }: NormalPostProps) => {
  const { title, content, image, likeCount, createdAt, writer } = data;

  return (
    <SPost className={className}>
      <SPostContent title={title} content={content} image={image} />
      <SPostInfo
        writer={writer}
        likeCount={likeCount}
        createdAt={formatDate(createdAt)}
      />
    </SPost>
  );
};

const SPost = styled.div`
  min-width: 343px;
  width: 100%;
  min-height: 136px;
  padding: 24px 0;
  background-color: var(--color-white);
`;

const SPostContent = styled(PostContent)`
  > div {
    margin-left: 8px;
  }
`;

const SPostInfo = styled(PostInfo)`
  padding-top: 16px;

  .postInfo_writer {
    margin-right: 8px;
  }

  .postInfo_favorites {
    margin-left: auto;
  }
`;

export default NormalPost;
