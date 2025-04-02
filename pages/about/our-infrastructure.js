import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Testimonial from "../../components/testimonial/Testimonial.jsx";
import Value from "../../components/Value/Value.jsx";
import ValueAwards from "../../components/ValueAwards/ValueAwards.jsx";
import ValueLife from "../../components/ValueLife/ValueLife.jsx";
import ValueInfrastures from "../../components/ValueInfrastures/ValueInfrastures.jsx";
import Image from "next/image.js";

const OurInfrastructure = () => {
  return (
    <>
      <Seo pageTitle="Fenista - our infrastructure" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* <!-- 
      =============================================
      About Hero
      ============================================== 	
      --> */}

      <div className="hero-banner-thirteen position-relative zn2 pt-190 pb-225 lg-pb-150 lg-pt-150 md-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 m-auto">
              <div className="text-wrapper">
                <h1 className="hero-heading fw-500 tx-dark text-center">
                About Pershiv 
                </h1>
                <p className="text-lg tx-dark mb-80 pt-10 text-center lg-pt-20 lg-mb-50">
                  Let’s find a home that’s perfect for your future
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_159.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div>

      {/* <!-- 
      =============================================
      End About Hero
      ============================================== 	
      --> */}

      {/* 
			=============================================
				Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne position-relative mt-100">
        <div className="container">
          {/* End .row */}
          <div className="row gx-xxl-5 justify-content-center">
            <Value />
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-fiftyOne */}

      {/* 
			=============================================
				Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne position-relative mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="title-style-five mb-65 md-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  More About us.
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  We’r the top rated agency.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 ms-auto">
              <Image
                width={900}
                height={500}
                src="/images/assets/living.jpg"
                alt="media"
                className="lazy-img mb-40 lg-mt-20 lg-mb-20 "
              />
            </div>

            <div className="col-xl-6 col-lg-6 ms-auto">
              <div className="ps-xxl-5">
                <h6 className="mb-30">Our History &amp; Goal.</h6>
                <p>
                  Fenesta is India's largest windows and doors brand, and a part
                  of the Rs 11,431 crore, 1889 Est. DCM Shriram Group
                  acknowledged for its transparent work culture and diversity.
                  Fenesta today boasts of Pan India sales and service presence
                  through 20 sales offices, 8 factories, 9 Signature Studios,
                  278 Channel Partner showrooms, a strong direct sales force and
                  also has an International presence in Maldives, Nepal and
                  Bhutan.{" "}
                </p>
                <p>
                  Empowered with knowledge of extreme weather conditions,
                  Fenesta has designed uPVC and System Aluminium Windows and
                  Doors, Solid Panel Doors, and now Facades capable of
                  withstanding extreme tropical conditions. Fenesta's high
                  performance products add an architectural dimension to your
                  home and keep out street noise, dust, pollution, rain and
                  wind. Its solutions outlast buildings.
                </p>
                <p>
                  The company has 1 extrusion plant in Kota and 7 fabrication
                  units in Bhiwadi, Chennai, Bhubaneswar and Hyderabad. No other
                  company in India boasts of such a world-className infrastructure
                  or has complete control over the entire supply chain of window
                  and door manufacturing and installation.{" "}
                </p>
                <p>
                  It takes all-round expertise in extrusion, design, planning,
                  fabrication, delivery and installation to produce a
                  world-className window. These are wide-ranging skills and they
                  reside only with Fenesta. With Fenesta, customer is assured of
                  end to end service including selecting right designs, site
                  survey, fabrication, delivery and installation. A nationwide
                  service infrastructure allows Fenesta to offer complete window
                  solutions and execute orders of any size, no matter where you
                  are.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="text-wrapper">
                <p className="text-lg tx-dark mb-20 pt-35 text-left lg-pt-20 lg-mb-50">
                  Vision
                </p>
                <p className="text-left">
                  To Improve the Lives and Homes of customers through Innovation
                  and Excellence and be the brand leader in Customised Building
                  Solutions
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="text-wrapper">
                <p className="text-lg tx-dark mb-20 pt-35 text-left lg-pt-20 lg-mb-50">
                  Mission
                </p>
                <p className="text-left">
                  To establish a service organisation that passionately provides
                  Customised Building Solutions and delivers Exceptional
                  Customer Experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-fiftyOne */}

      {/* 
			=============================================
				Infrastructure Section
			============================================== 
			*/}
      <div className="infrastructure position-relative mt-100">
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">Our Infrastructure</h2>
          </div>
        </div>
        <div className="container">
          <ValueInfrastures />
        </div>
      </div>
      {/* 
			=============================================
				Infrastructure Section
			============================================== 
			*/}

      {/* 
			=============================================
				Awards
			============================================== 
			*/}
      <div className="infrastructure position-relative mt-100">
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">
              Awards & Accreditations
            </h2>
          </div>
        </div>
        <div className="container">
          <ValueAwards />
        </div>
      </div>
      {/* 
			=============================================
				Awards
			============================================== 
			*/}

      {/* 
			=============================================
				life
			============================================== 
			*/}
      <div className="infrastructure position-relative mt-200">
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">Life @ Preshiv</h2>
          </div>
        </div>
        <div className="container">
          <ValueLife />
        </div>
      </div>
      {/* 
			=============================================F
				life
			============================================== 
			*/}

      {/*
			=====================================================
				Feedback Section Eleven
			=====================================================
			*/}
      <div
        className="feedback-section-eleven position-relative mt-50 pt-100 pb-70 lg-pt-70 lg-pb-50"
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

      <DefaultFooter />
    </>
  );
};

export default OurInfrastructure;
