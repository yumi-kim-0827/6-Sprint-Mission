import PostInfo from "@/components/boards/PostInfo";
import PostContent from "@/components/boards/PostContent";
import formatDate from "@/lib/utils/formatDate";

interface NormalPostProps {
  className?: string;
  data: Post;
}

const NormalPost = ({ className = "", data }: NormalPostProps) => {
  const { title, content, image, likeCount, createdAt, writer } = data;

  return (
    <div className={`mt-24 min-h-136 w-full min-w-343 bg-white ${className}`}>
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
