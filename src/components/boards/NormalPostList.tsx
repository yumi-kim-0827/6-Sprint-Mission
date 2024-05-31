import Image from "next/image";
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
        <div className="flexcenter mt-16 flex-col py-4 text-[20px] font-medium text-gray-500">
          <Image
            src="/images/img_inquiry-empty.svg"
            alt="아무것도 없어요 u.u"
            width={140}
            height={140}
          />
          게시글이 없어요
        </div>
      )}
    </div>
  );
};

export default NormalPostList;
