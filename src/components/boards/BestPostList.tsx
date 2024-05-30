import BestPost from "./BestPost";

interface BestPostListProps {
  className?: string;
  data: Post[];
}

const BestPostList = ({ className = "", data }: BestPostListProps) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      {data && data.length !== 0 ? (
        data.map((post) => (
          <BestPost key={post.id} data={post} className="flex-grow" />
        ))
      ) : (
        <div className="text-center text-gray-500">
          아직 베스트 게시글이 없어요
        </div>
      )}
    </div>
  );
};

export default BestPostList;
