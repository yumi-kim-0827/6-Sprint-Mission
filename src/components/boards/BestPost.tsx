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
      className={`${className} w-[343px] h-[167px] px-[24px] pb-[16px] rounded-[8px] bg-cool-gray-100`}>
      <BestBadge />
      <div className="mt-4">
        <PostContent title={title} content={content} image={image} />
      </div>
      <div className="grid grid-areas-postInfo grid-cols-postInfo mt-4 [&>.postInfoWriter]:grid-in-writer [&>.postInfoWriter]:mr-2 [&>.postInfoFavorites]:grid-in-favorites [&>.postInfoFavorites]:mr-auto [&>.postInfoCreatedAt]:grid-in-createdAt [&>.postInfoCreatedAt]:ml-auto">
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
