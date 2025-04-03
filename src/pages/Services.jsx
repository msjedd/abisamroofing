import ServiceCard from "../components/ServiceCard";
import service_1 from "../assets/service_1.jpeg";
import longspan from "../assets/longspan.jpeg";
import service_3 from "../assets/service_3.jpeg";
import Title from "../components/Title";

const Services = () => {
  return (
    <section className="bg-light">
      <Title
        level="h2"
        subtitle="We Provide Expert installation of Aluminum & Gerard roofing systems for residential and commercial properties."
        theme="light"
      >
        Our Services
      </Title>

      <div className="p-8 grid">
        <ServiceCard
          title="Residential Roofing"
          description="Top-quality roofing solutions for homes. Protect your home with high-quality roofing solutions. We specialize in durable, weather-resistant roofs that enhance your home's beauty and security. Choose from a variety of materials and styles to match your vision."
          image={service_1}
        />
        <ServiceCard
          title="Commercial Roofing"
          image={longspan}
          description="Strong, long-lasting roofs for businesses and industries. Our commercial roofing solutions ensure durability, energy efficiency, and minimal maintenance, keeping your business protected for years to come."
          reverse={true}
        />
        <ServiceCard
          title="Roof Repairs"
          description="Fast and efficient repair services. Extend the life of your roof with expert repairs. Whether it's leaks, damaged shingles, or general wear and tear, our professional team provides fast and reliable solutions to keep your roof in top shape."
          image={service_3}
        />
      </div>
      <div className=" flex flex-col items-center ">
        <Title
          level="h3"
          subtitle="Get in touch today for top-quality Aluminum and Gerard roofing solutions. 
        Whether you need installation, repairs, or expert advice—we’ve got you covered!"
          theme="light"
        >
          Ready to Protect Your Home with Expert Roofing?
        </Title>
        <a href="/contact" className="btn-primary mb-4">
          Get a Free Quote
        </a>
      </div>
    </section>
  );
};

export default Services;
