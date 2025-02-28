import { useState } from "react";
import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import items from "../../data/portfolio";
import FeaturesTabs from "../../components/FeaturesTabs/FeaturesTabs";
import FeatureBanner from "../../components/FeatureBanner/FeatureBanner";
import FeaturesFaq from "../../components/FeaturesFaq/FeaturesFaq";
import FeaturesTestimonial from "../../components/FeaturesTestimonial/FeaturesTestimonial";
import Footer from "../../components/footer/Footer";

const FeatureBenefits = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? items.slice(0, 8)
      : items.slice(0, 8).filter((item) => item.category.includes(filter));

  return (
    <>
      <Seo pageTitle="feature-benefits" />
      <DefaulHeader />
      <FeatureBanner />
      <FeaturesTabs />
      <FeaturesFaq />
      <FeaturesTestimonial />
      <Footer />
    </>
    
  );
};

export default FeatureBenefits;
