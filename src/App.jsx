import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";

import RecentWorkPage from "./pages/RecentWorkPage";
import ContactPage from "./pages/ContactPage";
import CustomCursor from "./Components/CustomCursor";



const App = () => {
  return (
    <BrowserRouter>
    
      <CustomCursor />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<RecentWorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
