import { motion } from "framer-motion";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 items-center justify-center p-4 flex">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg relative"
      >
        <button
          className="absolute text-primary top-4 right-4 -m-1.5"
          onClick={onClose}
        >
          ✖
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md"
        />
        <h3 className="text-2xl text-center text-primary font-bold mt-4">
          {product.name} roof
        </h3>
        <p className="text-gray-700 mt-2">
          {product.description} {product.name} roofing is:
        </p>
        <ul>
          {product.features.map((feature) => (
            <li key={product.id} className="text-secondary ml-3">
              {feature}
            </li>
          ))}
        </ul>

        {/* <button
          className="mt-4 bg-primary text-white py-2 px-4 rounded-md"
          onClick={() => alert("Inquiry sent!")}
        >
          Inquiry
        </button> */}
      </motion.div>
    </div>
  );
};

export default ProductModal;
