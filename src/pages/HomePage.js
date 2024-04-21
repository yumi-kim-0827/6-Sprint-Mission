import style from "../styles/HomePage.module.css";
import classNames from "classnames/bind";
import Container from "../components/Container";

const cn = classNames.bind(style);

const HomePage = () => {
  return (
    <Container className={cn("container")}>
      <div>home</div>
    </Container>
  );
};

export default HomePage;
