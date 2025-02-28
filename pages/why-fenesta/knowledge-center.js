import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import KnowledgeCenterContent from "../../components/KnowledgeCenterContent/KnowledgeCenterContent";
import KnowledgeCenterBanner from "../../components/KnowledgeCenterBanner/KnowledgeCenterBanner";
import Footer from "../../components/footer/Footer";

const KnowledgeCenter = () => {
  return (
    <>
      <Seo pageTitle="Knowledge Center" />
      <DefaulHeader />
      <KnowledgeCenterBanner />
      <KnowledgeCenterContent />
      <Footer />
    </>
  );
};

export default KnowledgeCenter;
