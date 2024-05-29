import styled from "styled-components";
import PostImage from "./PostImage";

interface PostContentProps {
  className?: string;
  title: string;
  content: string;
  image: string | null;
}

const PostContent = ({
  className,
  title,
  content,
  image,
}: PostContentProps) => {
  return (
    <SPostContent className={className}>
      {title}
      <PostImage src={image} alt={`${title} image`} />
    </SPostContent>
  );
};

const SPostContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  color: var(--color-cool-gray-800);

  > div {
    flex-shrink: 0;
  }
`;

export default PostContent;
