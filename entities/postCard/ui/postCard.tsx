import { Article } from "@/shared/model";

interface Props {
  items: Article[];
}

export function PostCard({ items }: Props) {
  return (
    <>
      {items.map((v) => (
        <div key={v.id}>{v.content}</div>
      ))}
    </>
  );
}
