import styled from "styled-components";
import Image from "next/image";

interface PostImageProps {
  src: string | null;
  alt: string;
}

const PostImage = ({ src, alt }: PostImageProps) => {
  return (
    <SImage>
      <Image fill src={src ? src : "/images/img_default.png"} alt={alt} />
    </SImage>
  );
};

const SImage = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  border: 0.75px solid var(--color-cool-gray-200);
  border-radius: 8px;
  overflow: hidden;

  Image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default PostImage;
