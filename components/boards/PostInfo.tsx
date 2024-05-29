import styled from "styled-components";
import CardFavorites from "../CardFavorite";
import Image from "next/image";

interface PostInfoProps {
  className?: string;
  showProfile?: boolean;
  writer?: {
    id: string;
    nickname: string;
  };
  likeCount?: number;
  createdAt?: string;
}

const PostInfo = ({
  className,
  showProfile = true,
  writer,
  likeCount,
  createdAt,
}: PostInfoProps) => {
  return (
    <SPostInfo className={className}>
      {showProfile && (
        <SWriterImageWrapper className="postInfo_profile">
          <Image
            src="/images/img_default-profile.png"
            alt="Writer Image"
            width={24}
            height={24}
          />
        </SWriterImageWrapper>
      )}
      {writer && (
        <SWriter className="postInfo_writer">{writer.nickname}</SWriter>
      )}
      {createdAt && (
        <SCreatedAt className="postInfo_createdAt">{createdAt}</SCreatedAt>
      )}
      {likeCount !== undefined && (
        <SFavorites
          className="postInfo_favorites"
          isFavorite={true}
          favoriteCount={likeCount}
        />
      )}
    </SPostInfo>
  );
};

const SPostInfo = styled.div`
  display: flex;
  align-items: center;
`;

const SWriterImageWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const SWriter = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: var(--color-cool-gray-600);
`;

const SFavorites = styled(CardFavorites)`
  font-size: 14px;
  font-weight: 400;
  color: var(--color-cool-gray-500);
`;

const SCreatedAt = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: var(--color-cool-gray-400);
`;

export default PostInfo;
