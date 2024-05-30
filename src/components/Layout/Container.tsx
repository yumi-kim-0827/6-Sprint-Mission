interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto mt-20 min-h-screen max-w-7xl px-4 md:px-24 lg:px-40">
      {children}
    </div>
  );
};

export default Container;
