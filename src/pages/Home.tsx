import MainLayout from "components/Layout";
import GNB from "components/Navbar";
import {
  Footer,
  HomeBottomImgComponent,
  HomeTopImgComponent,
  Section,
} from "templates/Home";

export default function Home() {
  return (
    <>
      <GNB />
      <HomeTopImgComponent />
      <MainLayout>
        <Section type="hotitem" />
        <Section type="search" direction="right" />
        <Section type="register" />
      </MainLayout>
      <HomeBottomImgComponent />
      <Footer />
    </>
  );
}
