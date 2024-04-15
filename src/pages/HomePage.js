import Banner from "../components/Home/Banner";
import FeatureList from "../components/Home/FeatureList";
import Footer from "../components/Home/Footer";
import Nav from "../components/Common/Nav";

function HomePage() {
  return (
    <>
      <Nav />
      <Banner id="home-top-banner" />
      <FeatureList />
      <Banner id="home-bottom-banner" />
      <Footer />
    </>
  );
}

export default HomePage;
