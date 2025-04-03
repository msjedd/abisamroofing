import { FaCheckCircle } from "react-icons/fa";
import service_3 from "../assets/service_3.jpeg";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center gap-12 px-6">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            About Abisam Roofing Systems
          </h2>
          <p className="text-dark leading-relaxed">
            We specialize in high-quality Aluminum and Gerard roofing systems,
            delivering durable and stylish solutions for homes and businesses.
            With years of expertise, we are committed to superior craftsmanship
            and customer satisfaction. We deliver:
          </p>

          <ul className="space-y-3">
            <li className="flex items-center text-dark">
              <FaCheckCircle className="text-primary mr-2" />
              Premium roofing materials for lasting durability.
            </li>
            <li className="flex items-center text-dark">
              <FaCheckCircle className="text-primary mr-2" />
              Professional installation with expert craftsmanship.
            </li>
            <li className="flex items-center text-dark">
              <FaCheckCircle className="text-primary mr-2" />
              Customer-focused service & tailored solutions.
            </li>
          </ul>

          <a
            href="/about"
            className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded-md shadow-md hover:bg-secondary transition"
          >
            Learn More
          </a>
        </div>

        <div className="md:w-1/2">
          <img
            src={service_3}
            alt="Abisam Roofing Team at Work"
            className="rounded-lg shadow-md w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
