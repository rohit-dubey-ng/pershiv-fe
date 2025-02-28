import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import FenestaEdgeBanner from "../../components/FenestaEdgeBanner/FenestaEdgeBanner";
import FeaturesTestimonial from "../../components/FeaturesTestimonial/FeaturesTestimonial";
import FenestaEdgeContent from "../../components/FenestaEdgeContent/FenestaEdgeContent";
import Footer from "../../components/footer/Footer";
import FenestaBannerinfo from "../../components/FenestaBannerinfo/FenestaBannerinfo.jsx";

const PershivTouch = () => {
  return (
    <>
      <Seo pageTitle="pershiv-touch" />
      <DefaulHeader />
      <FenestaEdgeBanner />
      <FenestaBannerinfo />
      <FenestaEdgeContent />
      <FeaturesTestimonial />
      <Footer />
    </>
  );
};

export default PershivTouch;
