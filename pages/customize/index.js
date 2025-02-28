import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import Footer from "../../components/footer/Footer";

const Customize = () => {
  return (
    <>
      <Seo pageTitle="Customize" />
      <DefaulHeader />
      <div className="hero-banner-thirteen position-relative zn2 pt-190 pb-225 lg-pb-150 lg-pt-150 md-pb-80">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="top-banner text-center">
            <h2 className="tx-dark mb-20">Customize</h2>
            <p className="mb-5"></p>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Customize;
