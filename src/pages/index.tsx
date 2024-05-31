import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";
import ItemPage from "../components/ItemPage/ItemPage";

const Home = () => {
  const homePageProps = {
    title: "홈 페이지",
    content: "이것은 홈페이지의 콘텐츠입니다.",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ItemPage {...homePageProps} />
    </ThemeProvider>
  );
};

export default Home;
