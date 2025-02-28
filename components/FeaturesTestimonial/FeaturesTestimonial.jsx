import Link from "next/link";
import Testimonial from "../home-page/home-1/Testimonial";

const FeaturesTestimonial = () => {
  return (
    <div
      className="feedback-section-eleven position-relative mt-100 pt-100 pb-70 lg-mt-120 lg-pt-70 lg-pb-50"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="title-style-one text-center mb-50 lg-mb-20">
          <h2 className="main-title fw-500 tx-dark m0">
            Customer Appreciations{" "}
          </h2>
        </div>
      </div>
      <div className="inner-content">
        <div className="feedback_slider_seven">
          <Testimonial />
        </div>
        {/* /.slider-wrapper */}
      </div>
      {/* /.inner-content */}
    </div>
  );
};

export default FeaturesTestimonial;
