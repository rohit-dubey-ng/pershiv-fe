
import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import Value from "../../components/Value/Value.jsx";
import Image from "next/image";
import Testimonial from "../../components/testimonial/Testimonial.jsx";
import Footer from "../../components/footer/Footer.jsx";

const OurValues = () => {
  return (
    <>
      <Seo pageTitle="Fenista - Our Values" />
      <DefaulHeader />

      <div className="hero-banner-thirteen position-relative zn2 pt-190 pb-225 lg-pb-150 lg-pt-150 md-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 m-auto">
              <div className="text-wrapper" >
                <h1 className="hero-heading fw-500 tx-dark text-center">
                About Pershiv 
                </h1>
                <p className="text-lg tx-dark mb-80 pt-10 text-center lg-pt-20 lg-mb-50">
                Windows that redefine your space and last a lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/shape/shape_159.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div>

      <div className="fancy-feature-fiftyOne position-relative mt-100">
        <div className="container">
          <div className="row gx-xxl-5 justify-content-center">
            <Value />
          </div>
        </div>
      </div>

      <div className="fancy-feature-fiftyOne position-relative mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="title-style-five mb-65 md-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  More About us.
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  We’re the top rated agency.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 ms-auto">
              <Image
                width={300}
                height={300}
                src="/images/assets/about-logo-1.jpg"
                alt="media"
                className="lazy-img mb-40 lg-mt-20 lg-mb-20 mx-auto"
              />
            </div>

            <div className="col-xl-6 col-lg-6 ms-auto">
              <div className="ps-xxl-5">
                <h6 className="mb-30">Establishment & Year.</h6>
                <p>
                  Since 2006, we have dedicated ourselves to transforming homes
                  and offices with custom designs that enhance both beauty and
                  value. Our extensive experience in the industry allows us to
                  deliver products that exceed expectations in durability,
                  security, and design.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 ms-auto">
              <div className="ps-xxl-5">
                <h6 className="mb-30">Working & Style.</h6>
                <p>
                  At the core of our philosophy is a commitment to quality.
                  Every product is crafted from premium materials and backed by
                  a comprehensive warranty. Our advanced locking systems and
                  thoughtfully designed hardware offer peace of mind and
                  security.
                </p>
                <p>
                  We ensure a tranquil home environment with smooth-operating
                  windows and doors, and specialized glass configurations for
                  superior noise reduction. Our sleek aluminium systems minimize
                  sightlines, maintaining a captivating aesthetic with various
                  finishes to match your taste.
                </p>
                <p>
                  Our low-maintenance products are engineered to withstand the
                  elements, requiring only occasional cleaning. With years of
                  industry expertise, we are passionate about helping you create
                  a home that reflects your unique vision and lifestyle.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 ms-auto text-center">
              <Image
                width={500}
                height={300}
                src="/images/assets/about-logo-2.jpg"
                alt="media"
                className="lazy-img mb-40 lg-mt-20 lg-mb-20 mx-auto"
              />
            </div>
          </div>
          <div className="our-vision-mission fancy-feature-thirtySeven mt-225 lg-mt-120">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12 col-lg-12 order-lg-first">
                  <div className="text-center">
                    <h2 className="tx-dark mb-20">Our Vision / Mission </h2>
                    {/* <p className="text-lg tx-dark opacity-75 mb-30 lg-mb-20">
                      “I couldn’t have asked for a better experience with
                      Fenesta”
                    </p> */}
                  </div>

                  <div className="row our-vision-row mb-30">
                    <div className="col-lg-6">
                      <div className="card-image mb-5">
                        <img
                          src="/images/assets/Vision-10.jpg"
                          className="card-img-top"
                          alt="Vision Image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="vision-card">
                        <div className="vision-card-body text-left">
                          <h5 className="card-title mb-15">Vision</h5>

                          <ul>
                            <li>
                              At Pershiv, we transform dream homes into stunning
                              realities with unparalleled quality and exquisite
                              design. Our products elevate living spaces and
                              stand the test of time, becoming cherished
                              elements of your home.
                            </li>
                            <li>
                              We value every relationship, nurturing connections
                              built on trust, respect, and collaboration. Our
                              strong ethical foundation ensures integrity and
                              transparency in all interactions.
                            </li>
                            <li>
                              Sustainability is central to our vision. We
                              embrace eco-friendly practices and sustainable
                              materials to benefit our clients and the
                              environment.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row our-mission-row mb-30">
                    <div className="col-lg-6">
                      <div className="mission-card mb-5">
                        <div className="mission-card-body text-left">
                          <h5 className="card-title mb-15">Mission</h5>
                          <ul>
                            <li>
                              Exceptional Design and Security: At Pershiv, we
                              blend stunning design with unparalleled security,
                              ensuring your home is both beautiful and safe.
                            </li>
                            <li>
                              Artistry and Craftsmanship: Our products reflect
                              meticulous craftsmanship and innovative designs,
                              using the highest quality materials for resilience
                              and beauty.
                            </li>
                            <li>
                              Customer-Centric Excellence: We prioritize
                              customer satisfaction from consultation to
                              installation, providing personalized service and
                              advanced security features for peace of mind.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card-image">
                        <img
                          src="/images/assets/Mission-10.jpg"
                          className="card-img-top"
                          alt="Vision Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feedback-section-eleven position-relative mt-50 pt-100 pb-70 lg-pt-70 lg-pb-50">
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">Client Feedback</h2>
          </div>
        </div>
        <div className="inner-content">
          <div className="slider-wrapper">
            <div className="feedback_slider_seven">
              <Testimonial />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OurValues;
