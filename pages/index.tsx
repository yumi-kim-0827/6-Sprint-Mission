import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="text-3xl font-bold underline bg-black text-blue-600 md:text-red-500 lg:text-violet-500">
        Hello, tailwind!
        <div>
          <Image
            src={"/icons/pandaIcon.png"}
            alt="testPandaIcon"
            width={100}
            height={100}
          />
        </div>
      </main>
    </>
  );
}
