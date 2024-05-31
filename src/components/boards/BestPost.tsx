import BestBadge from "./BestBadge";
import PostInfo from "./PostInfo";
import PostContent from "./PostContent";
import formatDate from "@/utils/formatDate";

interface BestPostProps {
  className?: string;
  data: Post;
}

const BestPost = ({ className = "", data }: BestPostProps) => {
  const { title, content, image, likeCount, createdAt, writer } = data;

  return (
    <div
      className={`${className} h-167 w-343 rounded-8 bg-cool-gray-100 px-24 pb-16`}
    >
      <BestBadge />
      <div className="mt-16">
        <PostContent title={title} content={content} image={image} />
      </div>
      <div className="mt-16 grid grid-cols-postInfo grid-areas-postInfo [&>.postInfoCreatedAt]:ml-auto [&>.postInfoCreatedAt]:grid-in-createdAt [&>.postInfoFavorites]:mr-auto [&>.postInfoFavorites]:grid-in-favorites [&>.postInfoWriter]:mr-8 [&>.postInfoWriter]:grid-in-writer">
        <PostInfo
          showProfile={false}
          writer={writer}
          likeCount={likeCount}
          createdAt={formatDate(createdAt)}
        />
      </div>
    </div>
  );
};

export default BestPost;
