import NormalPost from "./NormalPost";

interface NormalPostListProps {
  className?: string;
  data: Post[];
}

const NormalPostList = ({ className = "", data }: NormalPostListProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {data && data.length !== 0 ? (
        data.map((post) => (
          <NormalPost
            key={post.id}
            data={post}
            className="border-b border-gray-200"
          />
        ))
      ) : (
        <div className="py-4 text-center">아직 게시글이 없어요</div>
      )}
    </div>
  );
};

export default NormalPostList;
