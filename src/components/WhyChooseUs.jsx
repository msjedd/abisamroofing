import { FaShieldAlt, FaTools, FaClock, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import Title from "./Title";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <FaShieldAlt size={40} className="text-primary" />,
      title: "Durability & Strength",
      description:
        "Our roofing products are built to last, providing unmatched durability against the elements.",
    },
    {
      icon: <FaTools size={40} className="text-primary" />,
      title: "Expert Installation",
      description:
        "With years of experience, our skilled professionals ensure seamless installation every time.",
    },
    {
      icon: <FaClock size={40} className="text-primary" />,
      title: "Timely Project Completion",
      description:
        "We value your time and complete all projects on schedule without compromising quality.",
    },
    {
      icon: <FaHandshake size={40} className="text-primary" />,
      title: "Customer Satisfaction",
      description:
        "Our commitment to excellence ensures every client is satisfied with their roofing solution.",
    },
  ];

  return (
    <section className="py-12 bg-dark">
      <div className="container mx-auto px-6 text-center">
        <Title
          level="h2"
          subtitle="At Abisam Roofing, we provide top-tier roofing solutions with a focus on quality, reliability, and customer satisfaction."
          theme="dark"
        >
          Why Choose Us?
        </Title>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:shadow-xl transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="text-primary mb-4"
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mt-4">{benefit.title}</h3>
              <p className="text-gray-600 mt-2 text-center">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
