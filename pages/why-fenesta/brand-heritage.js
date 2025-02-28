import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import BrandBanner from "../../components/BrandBanner/BrandBanner";
import FeaturesTestimonial from "../../components/FeaturesTestimonial/FeaturesTestimonial";
import BrandContent from "../../components/BrandContent/BrandContent";
import Footer from "../../components/footer/Footer";
import Link from "next/link";

const BrandHeritage = () => {
  return (
    <>
      <Seo pageTitle="brand-heritage" />
      <DefaulHeader />
      <BrandBanner />
      <BrandContent />
      <FeaturesTestimonial />
      <Footer />
    </>
  );
};

export default BrandHeritage;
