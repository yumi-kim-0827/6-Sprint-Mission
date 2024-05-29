import Navigator from "./Navigator";

export default function Header() {
  return (
    <>
      <header
        className="w-full h-16 border-b-gray-100 border-solid border-b-[1px] 
      fixed top-0 left-0 bg-white"
      >
        <div className="max-w-[1200px] w-full h-full mx-auto flex justify-between items-center gap-8">
          <div className="flex">
            <div>logoIcon</div>
            <div>logoText</div>
          </div>
          <Navigator />
        </div>
      </header>
    </>
  );
}
