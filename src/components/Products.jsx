// import Title from "./Title";
// import ProductCard from "./ProductCard";
// import ProductModal from "./ProductModal";
// import { motion } from "framer-motion";
// import metcopoImg from "../assets/metcopo.jpeg";
// import steptilesImg from "../assets/steptiles.jpeg";
// import metraImg from "../assets/metra.jpeg";
// import bondImg from "../assets/bond.jpeg";
// import shinglesImg from "../assets/shingles.jpeg";
// import classicImg from "../assets/classic.jpeg";
// import milanoImg from "../assets/milano.jpeg";

// const products = {
//   Aluminum: [
//     { name: "Metcopo", image: metcopoImg },
//     { name: "Steptiles", image: steptilesImg },
//     { name: "Metra", image: metraImg },
//   ],
//   Gerard: [
//     { name: "Bond", image: bondImg },
//     { name: "Shingles", image: shinglesImg },
//     { name: "Classic", image: classicImg },
//     { name: "Milano", image: milanoImg },
//   ],
// };

// const Products = () => {
//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-6 text-center">
//         <Title
//           level="h2"
//           subtitle="We are experts with different roofing systems!"
//         >
//           Our Products
//         </Title>
//         {Object.entries(products).map(([category, items], index) => (
//           <div key={index} className="mb-12">
//             <motion.h3
//               initial={{ opacity: 0, y: -10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="text-2xl font-semibold text-primary mb-6"
//             >
//               {category} Roofing
//             </motion.h3>
//             <div className="flex sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {items.map((product, idx) => (
//                 <motion.div
//                   key={idx}
//                   className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: idx * 0.2, duration: 0.5 }}
//                   viewport={{ once: true }}
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-48 object-cover rounded-md mb-4"
//                   />
//                   <h4 className="text-lg font-semibold">{product.name}</h4>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Products;

import { useState } from "react";
import productsData from "../data/productsData";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="bg-light">
      <div className="bg-gradient-to-tr from-primary to-accent text-white text-center py-16 px-6">
        <Title
          level="h1"
          subtitle="Browse our premium selection of Aluminum and Gerard roofing systems."
        >
          Find the Perfect Roof for Your Home!
        </Title>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <Title>Our Products</Title>

        {Object.entries(productsData).map(
          ([category, { description, products }]) => (
            <div key={category} className="mb-12">
              <Title level="h3" subtitle={description}>
                {category} Roofing
              </Title>

              <div className="flex flex-wrap justify-center gap-6">
                {products.map((product) => (
                  <div
                    className="w-full max-w-[300px] sm:w-[48%] lg:w-[32%] xl:w-[24%] flex content-center"
                    key={product.id}
                  >
                    <ProductCard
                      product={product}
                      onClick={setSelectedProduct}
                    />
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 py-12 bg-gray-200">
        <Title
          level="h3"
          subtitle="Contact us for expert recommendations and get a free consultation."
        >
          Need Help Choosing?
        </Title>
        <a
          href="/contact"
          className="mt-4 inline-block bg-primary text-white py-3 px-6 rounded-md shadow-md hover:bg-primary-dark transition"
        >
          Get a Free Consultation
        </a>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default ProductsPage;
