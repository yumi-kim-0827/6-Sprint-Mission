interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="lg:px-160 mx-auto mt-80 min-h-screen max-w-[1280px] px-16 md:px-96">
      {children}
    </div>
  );
};

export default Container;
