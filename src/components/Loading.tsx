import Image from "next/image";

const Loading = () => {
  return (
    <div className=" flex h-screen w-full flex-col items-center justify-center">
      <div className="relative  h-12 w-12">
        <Image
          className="animate-spin"
          src="/images/ic_spinner.svg"
          alt="Loading..."
          fill
          sizes="100%, 100%"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="mt-2 text-lg font-medium text-gray-600">Loading...</div>
    </div>
  );
};

export default Loading;
