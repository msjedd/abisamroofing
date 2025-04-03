import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import WaterCollectionSection from "../components/WaterCollectionSection";

import Services from "./Services";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Products />
      <WaterCollectionSection />
    </div>
  );
};

export default Home;
