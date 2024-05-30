const shadowStyle =
  "absolute bottom-0 left-1/2 h-[4px] w-[82px] -translate-x-1/2 transform rounded-[50%] bg-black bg-opacity-20 shadow-[0_0_5px_5px_rgba(0,0,0,0.2)]";

export default function NotFoundPage() {
  return (
    <div className="relative mx-auto mt-20 h-[calc(100vh-230px)] max-w-screen-xl">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-[32px] font-bold tracking-widest">
        <div className="relative mb-6 whitespace-nowrap text-[102px] leading-[102px]">
          <div className={shadowStyle}></div>4
          <div className="mx-[14px] inline-block animate-emojiFloating">🐼</div>
          4
        </div>
        NotFoundPage
      </div>
    </div>
  );
}
