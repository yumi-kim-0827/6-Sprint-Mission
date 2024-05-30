import BestPostBoard from "@/components/BestPostBoard";
import PostList from "@/components/PostList";

export default function Boards() {
  return (
    <div>
      <h1>베스트 게시글</h1>
      <BestPostBoard />
      <div>
        <h1>게시글</h1>
        <button>글쓰기</button>
      </div>
      <PostList />
    </div>
  );
}
