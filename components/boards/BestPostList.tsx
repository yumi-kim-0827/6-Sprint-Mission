import styled from "styled-components";
import BestPost from "./BestPost";

interface BestPostListProps {
  className?: string;
  data: Post[];
}

const BestPostList = ({ className, data }: BestPostListProps) => {
  return (
    <SBestPostList className={className}>
      {data && data.length !== 0 ? (
        data.map((post) => <SBestPost key={post.id} data={post} />)
      ) : (
        <div>아직 베스트 게시글이 없어요</div>
      )}
    </SBestPostList>
  );
};

const SBestPostList = styled.div`
  display: flex;
  gap: 8px;
`;

const SBestPost = styled(BestPost)`
  flex-grow: 1;
`;

export default BestPostList;
