import BoardList from "@/src/components/BoardList";
import Title from "@/src/components/Title";
import React from "react";

const Boards = () => {
  return (
    <main className="max-w-[1200px] px-4 py-4 mx-auto grid gap-10 sm:px-6 sm:py-6">
      <section className="grid gap-4 md:gap-6">
        <Title>베스트 게시글</Title>
      </section>

      <section className="grid gap-4 md:gap-6">
        <Title>게시글</Title>
        <BoardList />
      </section>
    </main>
  );
};

export default Boards;
