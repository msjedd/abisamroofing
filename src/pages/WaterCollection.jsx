import {
  FaTint,
  FaFaucet,
  FaWater,
  FaLeaf,
  FaTools,
  FaHeadset,
} from "react-icons/fa";

const WaterCollection = () => {
  const services = [
    {
      icon: <FaTint className="text-primary text-4xl" />, // Rainwater icon
      title: "Rainwater Harvesting",
      description:
        "Capture & store rainwater for various uses. Reduce dependence on mains water supply.",
    },
    {
      icon: <FaFaucet className="text-primary text-4xl" />, // Faucet icon
      title: "Custom Gutters & Downspouts",
      description:
        "Efficient water flow & redirection. Prevents leaks & structural damage.",
    },
    {
      icon: <FaWater className="text-primary text-4xl" />, // Water storage icon
      title: "Water Storage & Filtration",
      description:
        "Durable tanks for safe water storage. Filtration options for clean water use.",
    },
    {
      icon: <FaLeaf className="text-primary text-4xl" />, // Eco-friendly icon
      title: "Eco-Friendly & Cost-Effective",
      description: "Save money on water bills. Reduce environmental impact.",
    },
    {
      icon: <FaTools className="text-primary text-4xl" />, // Tools icon
      title: "Durable, Long-Lasting Materials",
      description:
        "High-quality aluminum & corrosion-resistant parts. Minimal maintenance required.",
    },
    {
      icon: <FaHeadset className="text-primary text-4xl" />, // Support icon
      title: "Professional Installation & Support",
      description:
        "Expert installation for efficiency. Ongoing support & maintenance.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-dark mb-6">
          Smart Water Collection Solutions
        </h2>
        <p className="text-gray-600 mb-10">
          Efficient & sustainable water management for homes and businesses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-dark mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaterCollection;
