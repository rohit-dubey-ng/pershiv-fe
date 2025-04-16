import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import Footer from "../../components/footer/CopyrightFooter2";
import ContactForm from "../../components/home-page/home-1/ContactForm";

const CustomerComplaint = () => {
  return (
    <>
      <Seo pageTitle="Customer Complaint" />
      <DefaulHeader />

      <div className="hero-banner-five-CustomerComplaint text-center position-relative herMenu">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 m-auto overlay">
              <h1>Contact US</h1>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
      </div>
      <div className="fancy-feature-thirtyEight mt-140 lg-mt-100 position-relative  pb-70 lg-mt-120 lg-pt-70 lg-pb-50">
        <div className="container-fluid">
          {/* <div className="container">
            <div className="title-style-one text-center mb-50 lg-mb-20">
              <h2 className="main-title fw-500 tx-dark m0">Contact US</h2>
            </div>
          </div> */}
          <div className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 ">
            <div className="container p-0">
              <div className="bg-wrapper zn2 bg-white position-relative">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="row align-items-center">
                      <div className="col-lg-6  order-lg-first">
                        <div className="text-wrapper">
                          <img
                            src="/images/icon/icon_114.svg"
                            alt="icon"
                            className="lazy-img mb-30"
                          />
                          <div className="title-style-one">
                            <h2 className="main-title fw-500 tx-dark m0">
                              Get in Touch with Pershiv.
                            </h2>
                          </div>
                          <p className="fs-20 tx-dark pt-20 m0">
                            Have questions or need assistance? We’re here to
                            help! Reach out to us for inquiries, consultations,
                            or any support related to our products and services.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-6 ms-auto order-lg-last mt-50 mb-50">
                        <div className="form-style-two md-mb-40">
                          <ContactForm />
                        </div>
                        {/* /.form-style-two */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* End .row */}

                <div className="shapes shape-text fw-500 fs-20 tx-dark text-center">
                  Fill the <br />
                  form
                </div>
                <img
                  src="/images/shape/shape_90.svg"
                  alt="shape"
                  className="lazy-img shapes shape-one"
                />
                <img
                  src="/images/shape/shape_91.svg"
                  alt="shape"
                  className="lazy-img shapes shape-two"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CustomerComplaint;
