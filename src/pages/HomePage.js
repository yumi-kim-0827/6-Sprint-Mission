import Banner from "../components/Banner";
import FeatureList from "../components/FeatureList";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

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
