import "./App.css";
import Navbar from "./components/menu/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Welcome from "./components/welcome/Welcome";
import Resources from "./components/resources/Resources";
import Products from "./components/products/Products";
import Services from "./components/services/Services";
import Page from "./components/Page";
import ProductInfo from "./components/productInfo/ProductInfo";
import ResourcesInfo from "./components/resourcesInfo/ResourcesInfo";

import { useTranslation } from "react-i18next";

// export const LanguageContext = React.createContext();

function App() {
  // const [language, setLanguage] = useState("Serbian");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])

  const lng = navigator.language;

  return (
    // <LanguageContext.Provider value={language}>
      <Router>
        <div className="app">
          <Navbar t={t}/>
          <Routes>
            <Route path="/" element={<Page t={t}/>} />
            <Route path="/product/:productId" element={<ProductInfo t={t}/>} />
            <Route path="/resource/:resourceId" element={<ResourcesInfo t={t}/>} />
          </Routes>
        </div>
      </Router>
    // </LanguageContext.Provider>
  );
}

export default App;
