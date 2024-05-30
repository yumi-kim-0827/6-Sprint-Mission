interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto mt-20 px-4 md:px-24 lg:px-40 max-w-7xl min-h-screen">
      {children}
    </div>
  );
};

export default Container;
