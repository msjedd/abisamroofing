import { NavLink } from "react-router-dom";
import roofHero from "../assets/roof_hero.jpg";
import Title from "./Title";

const Hero = () => {
  return (
    <section
      className="h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-center"
      style={{ backgroundImage: `url(${roofHero})` }}
    >
      <div>
        <div className="container mx-auto text-center">
          <Title
            level="h1"
            subtitle="Quality roofing solutions tailored for durability and aesthetics."
            theme="dark"
          >
            Expert Roofing Services You Can Trust
          </Title>

          <NavLink to="/contact">
            <button className="bg-primary/90 px-6 py-2 rounded-full text-white hover:bg-accent/100 cursor-pointer transition">
              Get a free Quote
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
