import { NavLink } from "react-router-dom";
import WaterServiceCard from "./WaterServiceCard";
import Title from "./Title";
import { FaWater, FaHandHoldingWater, FaRecycle } from "react-icons/fa";

const WaterCollectionSection = () => {
  const services = [
    {
      icon: FaWater,
      title: "Rainwater Harvesting",
      description:
        "Efficient collection and storage of rainwater for various uses.",
    },
    {
      icon: FaHandHoldingWater,
      title: "Water Filtration",
      description:
        "High-quality filtration systems to ensure clean and safe water.",
    },
    {
      icon: FaRecycle,
      title: "Water Recycling",
      description: "Sustainable water reuse solutions to reduce waste.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <Title
          levle="h2"
          subTitle="Sustainable water solutions tailored to your needs"
        >
          Water Collector Services
        </Title>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <WaterServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="mt-6">
          <NavLink
            to="/waterCollection"
            className="text-primary font-semibold hover:bg-accent/50  hover:rounded-3xl hover:p-3 hover:shadow-2xl"
          >
            Learn More
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default WaterCollectionSection;
