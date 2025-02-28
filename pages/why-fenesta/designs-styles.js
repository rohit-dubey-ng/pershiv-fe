import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DesignBanner from "../../components/DesignBanner/DesignBanner.jsx";
import DesignPalette from "../../components/DesignPalette/DesignPalette.jsx";
import ScienceDesign from "../../components/ScienceDesign/ScienceDesign.jsx";
import Testimonial from "../../components/home-page/home-1/Testimonial.jsx";
import Footer from "../../components/footer/Footer.jsx";
import BannerInfo from "../../components/BannerInfo/BannerInfo.jsx";
import Windows from "../../components/Windows/Windows.jsx";

const DesignsStyles = () => {
  return (
    <>
      <Seo pageTitle="designs-styles" />
      <DefaulHeader />
      <DesignBanner />
      <BannerInfo />
      {/* <div className="mt-225 lg-mt-120 mb-120">
        <div className="container">
          <div className="row our-vision-row mb-30">
            <div className="col-lg-6">
              <div className="card-image mb-5">
                <img
                  src="images/assets/rob-wingate-Fd9tUmRBJzk.jpg"
                  className="card-img-top"
                  alt="Vision Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="vision-card">
                <div className="vision-card-body text-left">
                
                  <p className="card-text">
                    Your home reflects your personality, and even the minute details matter. Windows play a major part of those details too, which is why at Pershiv we make sure that your windows provide you with more than just light and ventilation. We design windows that seamlessly blend with the interior aesthetics of your home, enhancing the overall look and appeal.

                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row our-mission-row mb-30 mt-5">
            <div className="col-lg-6">
              <div className="mission-card mb-5">
                <div className="mission-card-body text-left">
               
                  <p className="card-text">
                    We make this all possible by providing a wide range of designs, finishes and colours, matching your unique style. A sleek modern look, Classic and Timeless, or something Bold and Visually striking, we can customise it for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card-image">
                <img
                  src="images/assets/amel-majanovic-r8r2I7FsaIE.jpg"
                  className="card-img-top"
                  alt="Vision Image"
                />
              </div>
            </div>
          </div >
        </div>
      </div> */}


      <Windows />
      {/* <BannerInfo/> */}
      {/* <DesignPalette /> */}
      {/* <ScienceDesign /> */}
      {/*
			=====================================================
				Feedback Section Eleven
			=====================================================
			*/}
      <div
        className="feedback-section-eleven position-relative mt-50 pt-100 pb-70 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">Client Feedback</h2>
          </div>
        </div>
        {/* End .container */}
        <div className="inner-content">
          <div className="slider-wrapper">
            <div className="feedback_slider_seven">
              <Testimonial />
            </div>
            {/* /.feedback_slider_seven */}
          </div>
          {/* /.slider-wrapper */}
        </div>
        {/* /.inner-content */}
      </div>
      {/* /.feedback-section-eleven */}
      <Footer />
    </>
  );
};

export default DesignsStyles;
