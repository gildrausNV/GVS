import "./App.css";
import Navbar from "./components/menu/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Welcome from "./components/welcome/Welcome";
import Resources from "./components/resources/Resources";
import Products from "./components/products/Products";
import Services from "./components/services/Services";
import Page from "./components/Page";
import ProductInfo from "./components/productInfo/ProductInfo";
import ResourcesInfo from "./components/resourcesInfo/ResourcesInfo";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/product/:productId" element={<ProductInfo />} />
          <Route path="/resource/:resourceId" element={<ResourcesInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
