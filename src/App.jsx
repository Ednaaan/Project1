import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";

import RecentWorkPage from "./pages/RecentWorkPage";
import ContactPage from "./pages/ContactPage";
import CustomCursor from "./Components/CustomCursor";
import SeoPage from "./pages/SeoPage";
import WebsiteDesignPage from "./pages/WebsiteDesignPage";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import ContentWritingPage from "./pages/ContentWritingPage";
import PaidAdsPage from "./pages/PaidAdsPage";
import FloatingDock from "./Components/FloatingDock";
import ScrollToTop from "./Components/ScrollToTop";



const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    
      <CustomCursor />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path = "/seo" element={<SeoPage/>}/>
        <Route path= "/website-design" element= {<WebsiteDesignPage/>}/>
        <Route path="/graphic-design" element= {<GraphicDesignPage/>}/>
        <Route path = "/digital-marketing" element = {<DigitalMarketingPage/>}/>
        <Route path = "/content-writing" element = {<ContentWritingPage/>}/>
        <Route path = "/paid-ads" element = {<PaidAdsPage/>}/>
        <Route path="/work" element={<RecentWorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FloatingDock/>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
