import { motion } from "framer-motion";

const ServiceCard = ({ title, description, icon: Icon, image, reverse }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center justify-center p-6 rounded-md hover:shadow-xl transition border border-white/20 bg-white/30 backdrop-blur-lg
      ${reverse ? "md:grid-cols-[2fr_1fr]" : ""}`}
    >
      <div
        className={`flex flex-col justify-self-center shrink-0 items-center md:block  ${reverse ? "md:order-2" : "md:order-1"}`}
      >
        {Icon && (
          <motion.div
            className="text-secondary bg-light w-16 h-16 rounded-full text-5xl flex items-center justify-center mb-4 md:mb-0"
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Icon />
          </motion.div>
        )}
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-80 object-cover rounded-md md:w-auto"
          />
        )}
      </div>

      {/* Text Content (Always Larger Side) */}
      <div className={`p-4 md:p-12  ${reverse ? "md:order-1" : "md:order-2"} `}>
        <h3 className="text-xl text-primary font-bold">{title}</h3>
        <p className="text-dark">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
