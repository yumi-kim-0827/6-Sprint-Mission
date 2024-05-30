import PostImage from "./PostImage";

interface PostContentProps {
  className?: string;
  title: string;
  content: string;
  image: string | null;
}

const PostContent = ({
  className,
  title,
  content,
  image,
}: PostContentProps) => {
  return (
    <div
      className={`flex justify-between gap-3 w-full min-h-[72px] ${className} [&>div:last-of-type]:shrink-0`}>
      <div className="font-semibold text-xl text-gray-800 line-clamp-2">
        {title}
      </div>
      {image && <PostImage src={image} alt={`${title} image`} />}
    </div>
  );
};

export default PostContent;
