import { formatDate } from "@/shared/lib/formatDate";
import { Article } from "@/shared/model";
import { ItemImage } from "@/shared/ui/itemImage";
import Image from "next/image";

interface Props {
  item: Article;
}

export function PostCard({ item }: Props) {
  return (
    <section className="h-[136px] border-b-[1px] border-b-[#e5e7eb] mt-6 flex-col flex justify-between">
      <main className="flex justify-between text-[#1F2937] text-xl font-semibold">
        <p>{item.title}</p>
        <ItemImage imageUrl={item.image} />
      </main>
      <footer className="flex justify-between items-center mb-6">
        <section className="flex text-sm">
          <Image
            src="/icons/profileIcon.png"
            alt="profile"
            height={24}
            width={24}
            className="mr-2"
          />
          <p className="mr-2 text-[#4B5563]">{item.writer.nickname}</p>
          <p className="text-[#9ca3af]">
            {formatDate(new Date(item.createdAt))}
          </p>
        </section>
        <figure className="flex items-center gap-2 text-[#6b7280] font-normal text-sm">
          <button type="button">
            <Image
              src="/icons/heart.png"
              height={24}
              width={24}
              alt="heart icon"
            />
          </button>
          {item.likeCount > 9999 ? "9999+" : item.likeCount}
        </figure>
      </footer>
    </section>
  );
}
