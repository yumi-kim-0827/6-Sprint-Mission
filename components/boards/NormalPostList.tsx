import styled from "styled-components";
import NormalPost from "./NormalPost";

interface NormalPostListProps {
  className?: string;
  data: Post[];
}

const NormalPostList = ({ data }: NormalPostListProps) => {
  return (
    <SPostList>
      {data && data.length !== 0 ? (
        data.map((post) => <SPost key={post.id} data={post} />)
      ) : (
        <div>아직 게시글이 없어요</div>
      )}
    </SPostList>
  );
};

const SPostList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SPost = styled(NormalPost)`
  border-bottom: 1px solid var(--color-cool-gray-200);
`;

export default NormalPostList;
