import AllArticles from "@/components/Boards/AllArticles";
import BestArticles from "@/components/Boards/BestArticles";

export default function Boards() {
  return (
    <div className="flex flex-col gap-10">
      <BestArticles />
      <AllArticles />
    </div>
  );
}
