import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Delayed from "./components/Delayed";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Delayed waitBeforeShow={600}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Delayed>
    </BrowserRouter>
  );
};

export default App;
