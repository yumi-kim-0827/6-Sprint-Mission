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
      className={`min-w-[343px] w-full min-h-[136px] mt-6 bg-white ${className}`}>
      <PostContent title={title} content={content} image={image} />
      <div className="flex items-center pt-4 [&>.postInfoWriter]:mr-[8px] [&>.postInfoFavorites]:ml-auto">
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
