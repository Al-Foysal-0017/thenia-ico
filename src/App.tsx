import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./components";
import Footer from "./components/footer/Footer";
import Invest from "./pages/invest";
import NotFound from "./pages/notFound";
import Mint from "./pages/mint";
import ScrollToTop from "./components/scrollToTop";
import PrivacyPolicy from "./pages/privacyPolicy";
import "./_app.scss";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <motion.div initial="hidden" animate="show" className="App">
        <ScrollToTop />
        <div className={pathname === "/" ? "shadow-inner" : ""}>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Invest />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
        {pathname !== "/mint" && <Footer />}
      </motion.div>
    </>
  );
}

export default App;
