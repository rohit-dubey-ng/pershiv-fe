import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import QualityBanner from "../../components/QualityBanner/QualityBanner";
import QualityContent from "../../components/QualityContent/QualityContent";
import FeaturesTestimonial from "../../components/FeaturesTestimonial/FeaturesTestimonial";
import Footer from "../../components/footer/Footer";
import QualityBannerinfo from "../../components/QualityBannerinfo/QualityBannerinfo";

const QualityInnovation = () => {
  return (
    <>
      <Seo pageTitle="quality-innovation" />
      <DefaulHeader />
      <QualityBanner />
      <QualityBannerinfo />
      <QualityContent />
      <FeaturesTestimonial />
      <Footer />
    </>
  );
};

export default QualityInnovation;
