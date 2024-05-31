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
    <div className={`min-h-136 min-w-343 mt-24 w-full bg-white ${className}`}>
      <PostContent title={title} content={content} image={image} />
      <div className="flex items-center pt-16 [&>.postInfoFavorites]:ml-auto [&>.postInfoWriter]:mr-8">
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
