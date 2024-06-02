import { Article } from "@/shared/model";

interface Props {
  item: Article;
}

export function PostCard({ item }: Props) {
  return <section className="h-[136px]">{item.content}</section>;
}
