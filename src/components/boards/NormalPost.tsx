import PostInfo from "./PostInfo";
import PostContent from "./PostContent";
import formatDate from "@/utils/formatDate";

interface NormalPostProps {
  className?: string;
  data: Post;
}

const NormalPost = ({ className = "", data }: NormalPostProps) => {
  const { title, content, image, likeCount, createdAt, writer } = data;

  return (
    <div
      className={`mt-6 min-h-[136px] w-full min-w-[343px] bg-white ${className}`}
    >
      <PostContent title={title} content={content} image={image} />
      <div className="flex items-center pt-4 [&>.postInfoFavorites]:ml-auto [&>.postInfoWriter]:mr-[8px]">
        <PostInfo
          writer={writer}
          likeCount={likeCount}
          createdAt={formatDate(createdAt)}
        />
      </div>
    </div>
  );
};

export default NormalPost;
