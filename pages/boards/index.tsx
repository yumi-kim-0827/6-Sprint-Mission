import AllArticles from "@/components/Boards/AllArticles";
import BestArticles from "@/components/Boards/BestArticles";
import instance from "@/lib/axios";

export default function Boards() {
  return (
    <div className="flex flex-col gap-10">
      <BestArticles />
      <AllArticles />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await instance.get(`/articles`);
  const articles = data;
  return {
    props: {
      articles,
    },
  };
}
