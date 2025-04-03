import { useState } from "react";
import productsData from "../data/productsData";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section
    // className="bg-gray-100"
    >
      {/* Hero Section */}
      <div className=" text-white text-center py-16 px-6">
        <Title
          level="h1"
          subtitle="Browse our premium selection of Aluminum and Gerard roofing systems."
          theme="dark"
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

              <div className="flex flex-wrap justify-center items-center gap-6">
                {products.map((product) => (
                  <div
                    className="w-full sm:w-[48%] lg:w-[32%] xl:w-[24%] flex"
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
