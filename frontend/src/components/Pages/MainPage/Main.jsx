import React from "react";

import About from "./AboutUs.jsx";
import Base from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import FirstSection from "./First Section.jsx";

function Main() {
  return (
    <React.StrictMode>
      <Base />
      <About />
      <FirstSection />
      <Footer />
    </React.StrictMode>
  );
}
export default Main;
