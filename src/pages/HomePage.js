import Banner from "../components/Home/Banner";
import FeatureList from "../components/Home/FeatureList";
import Footer from "../components/Home/Footer";

function HomePage() {
  return (
    <main>
      <Banner id="home-top-banner" />
      <FeatureList />
      <Banner id="home-bottom-banner" />
      <Footer />
    </main>
  );
}

export default HomePage;
