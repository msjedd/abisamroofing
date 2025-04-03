import metcopo from "../assets/metcopo.jpeg";
import steptiles from "../assets/steptiles.jpeg";
import metra from "../assets/metra.jpeg";
import bond from "../assets/bond.jpeg";
import shingles from "../assets/shingles.jpeg";
import classic from "../assets/classic.jpeg";
// import milano from "../assets/milano.jpeg";

const productsData = {
  Aluminum: {
    description:
      "Lightweight, rust-resistant, and energy-efficient, Aluminum roofing is perfect for modern structures needing durability with minimal maintenance.",
    products: [
      {
        id: 1,
        name: "Metcopo",
        image: metcopo,
        description:
          "A durable and stylish aluminum roofing option for modern homes.",
        features: [
          "Lightweight",
          "Weather-resistant with",
          "Long-lasting finish",
        ],
      },
      {
        id: 2,
        name: "Steptiles",
        image: steptiles,
        description:
          "Aesthetic and strong aluminum roofing tiles with a classic look.",
        features: [
          "Corrosion-resistant",
          "High strength and",
          "Elegant design",
        ],
      },
      {
        id: 3,
        name: "Metra",
        image: metra,
        description:
          "A premium choice for homes needing both beauty and protection.",
        features: ["Durable", "Energy-efficient, with", "Superior coverage"],
      },
    ],
  },

  Gerard: {
    description:
      "Stone-coated steel roofing that combines the strength of metal with the aesthetic of traditional shingles, Gerard roofing is designed for extreme weather resistance.",
    products: [
      {
        id: 4,
        name: "Bond",
        image: bond,
        description: "A high-quality Gerard roofing tile with a modern touch.",
        features: [
          "Stone-coated",
          "Fire-resistant and proffers",
          "Noise reduction",
        ],
      },
      {
        id: 5,
        name: "Shingles",
        image: shingles,
        description:
          "Elegant and stylish Gerard roofing shingles for classic homes.",
        features: ["UV protection", "Wind-resistance", "Easy installation"],
      },
      {
        id: 6,
        name: "Classic",
        image: classic,
        description:
          "A traditional Gerard roofing style known for its durability.",
        features: ["Superior longevity", "Impact-resistant", "High strength"],
      },
      // {
      //   id: 7,
      //   name: "Milano",
      //   image: milano,
      //   description: "A premium Gerard roofing option with a luxurious finish.",
      //   features: ["Elegant texture", "Strong protection", "Eco-friendly"],
      // },
    ],
  },
};

export default productsData;
