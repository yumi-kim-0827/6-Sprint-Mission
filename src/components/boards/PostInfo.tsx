import Image from "next/image";
import CardFavorites from "../CardFavorite";

interface PostInfoProps {
  showProfile?: boolean;
  writer?: {
    id: string;
    nickname: string;
  };
  likeCount?: number;
  createdAt?: string;
}

const PostInfo = ({
  showProfile = true,
  writer,
  likeCount,
  createdAt,
}: PostInfoProps) => {
  return (
    <>
      {showProfile && writer && (
        <div className="mr-2 h-6 w-6">
          <Image
            src="/images/img_default-profile.png"
            alt="Writer Image"
            width={24}
            height={24}
          />
        </div>
      )}
      {writer && (
        <div className="postInfoWriter text-sm font-normal text-cool-gray-600">
          {writer.nickname}
        </div>
      )}
      {createdAt && (
        <div className="postInfoCreatedAt text-sm font-normal text-cool-gray-400">
          {createdAt}
        </div>
      )}
      {likeCount !== undefined && (
        <CardFavorites
          className="postInfoFavorites text-sm font-normal text-cool-gray-500"
          isFavorite={true}
          favoriteCount={likeCount}
        />
      )}
    </>
  );
};

export default PostInfo;
