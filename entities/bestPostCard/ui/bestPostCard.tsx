import { formatDate } from "@/shared/lib/formatDate";
import { Article } from "@/shared/model";
import Image from "next/image";

interface Props {
  article: Article;
}

export function BestPostCard({ article }: Props) {
  return (
    <section className="relative bg-[#f9fafb] h-full rounded-lg px-6 pb-4">
      <header className="w-[103px] h-[30px] relative">
        <Image
          fill
          src="/images/bestPostLabel.png"
          alt="best Post Label"
          className="z-0"
        />
        <div className="z-10 absolute left-5 top-2 flex gap-2 h-4 items-center">
          <Image width={16} height={16} src="/icons/medal.png" alt="medal" />
          <p className="text-base font-semibold text-white tracking-wide">
            Best
          </p>
        </div>
      </header>
      <main className="overflow-hidden">
        <header className="text-lg scrollbar-hide font-semibold flex gap-2 mt-4 h-[72px] overflow-auto">
          {article.title}
          {article.image !== null && (
            <figure className="rounded-lg bg-white relative p-3 w-[72px] h-[72px] flex-shrink-0 flex-grow-0">
              <div className="relative z-10 h-full w-full">
                <Image
                  fill
                  src={article.image}
                  alt="상품 이미지"
                  className="absolute z-20"
                />
              </div>
            </figure>
          )}
        </header>
      </main>
      <footer className="mt-4 text-sm flex justify-between">
        <header className="flex gap-2 text-[#4b5563] font-normal items-center">
          {article.writer.nickname}
          <figure className="flex items-center gap-1">
            <button type="button">
              <Image
                src="/icons/heart.png"
                alt="heart icon"
                width={16}
                height={16}
              />
            </button>
            <div className="text-[#9ca3af]">{article.likeCount}</div>
          </figure>
        </header>
        <footer className="text-[#9ca3af]">
          {formatDate(new Date(article.updatedAt))}
        </footer>
      </footer>
    </section>
  );
}
