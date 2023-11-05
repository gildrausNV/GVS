import Contact from "./contact/Contact";
import Home from "./home/Home";
import Products from "./products/Products";
import Resources from "./resources/Resources";
import Services from "./services/Services";
import Welcome from "./welcome/Welcome";

const Page = ({ t }) => {
  return (
    <>
      <Welcome t={t}/>
      <div className="page">
        <Home t={t}/>
        <Resources t={t}/>
        <Products t={t}/>
        <Services t={t}/>
      </div>
      <Contact t={t}/>
    </>
  );
};

export default Page;
