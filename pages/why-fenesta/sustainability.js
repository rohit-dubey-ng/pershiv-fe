import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import GreenBanner from "../../components/GreenBanner/GreenBanner";
import GreenContent from "../../components/GreenContent/GreenContent";
import FeaturesTestimonial from "../../components/FeaturesTestimonial/FeaturesTestimonial";
import Footer from "../../components/footer/Footer";

const Sustainability = () => {
  return (
    <>
      <Seo pageTitle="Sustainability" />
      <DefaulHeader />
      <GreenBanner />
      <GreenContent />
      <FeaturesTestimonial />
      <Footer />
    </>
  );
};

export default Sustainability;
