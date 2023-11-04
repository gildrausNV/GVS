import Contact from "./contact/Contact";
import Home from "./home/Home";
import Products from "./products/Products";
import Resources from "./resources/Resources";
import Services from "./services/Services";
import Welcome from "./welcome/Welcome";

const Page = () => {
  return (
    <>
      <Welcome />
      <div className="page">
        <Home />
        <Resources />
        <Products />
        <Services />
      </div>
      <Contact />
    </>
  );
};

export default Page;
