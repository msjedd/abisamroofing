import { motion } from "framer-motion";

const ProductCard = ({ product, onClick }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl border border-gray-200 w-full max-w-[350px] "
      whileHover={{ scale: 1.05, translateY: -5 }}
      onClick={() => onClick(product)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-fit object-top rounded-md"
      />
      <h3 className="text-xl font-semibold text-center text-primary mt-4">
        {product.name} Roof
      </h3>
      <p className="text-primary  text-sm mt-2 flex-grow flex">
        {product.shortDescription}
      </p>
    </motion.div>
  );
};

export default ProductCard;
