import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WaterCollection from "./pages/WaterCollection";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Products from "./pages/Products";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/waterCollection" element={<WaterCollection />} />
        </Routes>
        <Footer />
      </Router>
    </GlobalProvider>
  );
};

export default App;
