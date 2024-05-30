import Image from "next/image";

interface PostImageProps {
  src: string | null;
  alt: string;
}

const PostImage = ({ src, alt }: PostImageProps) => {
  return (
    <div className="relative w-[72px] h-[72px] border-[0.75px] border-cool-gray-200 rounded-[8px] overflow-hidden">
      <Image
        src={src ? src : "/images/img_default.png"}
        alt={alt}
        fill
        sizes="100%, 100%"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default PostImage;
