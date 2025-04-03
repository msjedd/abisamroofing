import { FaHistory, FaHandshake, FaRocket } from "react-icons/fa";
import Title from "../components/Title";
import ServiceCard from "../components/ServiceCard";
import roofHero from "../assets/roof_hero.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section
      className="items-center justify-center bg-cover bg-center bg-no-repeat flex flex-col pb-4 "
      style={{ backgroundImage: `url(${roofHero})` }}
    >
      <div className="h-screen w-full  flex flex-col items-center justify-center  text-center  bg-light/30 backdrop-blur-s  shadow-5xl">
        <Title
          level="h2"
          theme="light"
          subtitle="We take pride in delivering durable, stylish, and weather-resistant
          solutions for homes and businesses. Our commitment to quality,
          innovation, and customer satisfaction sets us apart. Discover our
          story, values, and mission as we continue to build trust—one roof at a
          time."
        >
          Welcome to Abisam Roofing Systems!
        </Title>

        <button className="btn-primary">Call us!</button>
      </div>

      <div className="max-w-[1200px] p-12 md:px-20 space-y-12">
        <ServiceCard
          title="Our History"
          description="Founded with a passion for excellence in 2015, Abisam Roofing Systems has grown into a trusted name in the roofing industry. From humble beginnings, we have expanded to provide top-tier roofing installation, maintenance, and repairs for residential and commercial clients."
          icon={FaHistory}
        />

        <ServiceCard
          title="Our Mission"
          description="At Abisam Roofing Systems, our mission is to deliver exceptional roofing solutions that offer durability, aesthetics, and protection. We specialize in high-quality aluminum and Gerard roofing systems, ensuring homes and businesses have roofs that withstand the elements."
          icon={FaRocket}
        />

        <ServiceCard
          title="Our Values"
          description={
            <ul className="list-disc pl-5 space-y-2 text-dark">
              <li>
                <strong>Quality</strong> – We use only the best materials and
                techniques for long-lasting results.
              </li>
              <li>
                <strong>Integrity</strong> – Honesty and transparency guide our
                business and customer interactions.
              </li>
              <li>
                <strong>Customer Satisfaction</strong> – We prioritize our
                clients' needs, delivering roofing solutions tailored to their
                preferences.
              </li>
              <li>
                <strong>Innovation</strong> – Staying ahead with the latest
                roofing trends and technology.
              </li>
              <li>
                <strong>Safety</strong> – Adhering to strict safety standards
                for our workers and clients.
              </li>
            </ul>
          }
          icon={FaHandshake}
        />
      </div>
      <div className="max-w-[30rem] text-light flex flex-col items-center justify-center">
        <p className="text-xl mb-8 ">
          At Abisam Roofing Systems, we don’t just install roofs—we build trust,
          security, and peace of mind.
        </p>

        <NavLink to="/contact" className="btn-primary inline-block text-center">
          Get your free Quote!
        </NavLink>
      </div>
    </section>
  );
};

export default About;
