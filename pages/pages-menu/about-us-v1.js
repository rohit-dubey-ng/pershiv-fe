import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import Testimonial from "../../components/testimonial/Testimonial";
import Value from "../../components/home-page/home-1/Value";
import Infrastructure from "../../components/Infrastructure/Infrastructure";
import Awards from "../../components/Awards/Awards";
import Life from "../../components/Life/Life";
import Footer from "../../components/footer/Footer";



const AboutUsV1 = () => {
  const features = [
    { text: "Amazing communication." },
    { text: "Best trending designing experience." },
    { text: "Email & Live chat." },
  ];

  const starRating = Array(5)
    .fill()
    .map((_, index) => (
      <li key={index}>
        <i className="fa-solid fa-star" />
      </li>
    ));

  return (
    <>
      <Seo pageTitle="About Us V1" />

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
              <div className="text-wrapper" data-aos="fade-up">
                <h1 className="hero-heading  tx-dark text-center">
                  Transforming Spaces with Preshiv
                  <span className="position-relative">
                  
                    <img
                      src="/images/shape/shape_161.svg"
                      alt="shape"
                      className="lazy-img shapes text-shape"
                    />
                  </span>
                </h1>
                <p className="text-lg tx-dark mb-80 pt-35 text-center lg-pt-20 lg-mb-50">
                Where Innovation Meets Elegance!
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
				Feature Section Thirty Seven
			============================================== 
			*/}


      {/* 
			=============================================
				Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne position-relative mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
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
            <div className="col-xl-12 col-lg-12">
              <div className="" data-aos="fade-left">
                <h6 className="mb-30">Our History &amp; Goal.</h6>
                <p className="text-lg tx-dark text-left"> Welcome to our world of exquisite window and door solutions! Since 2006</p>
                <p className="text-left">
                  we have dedicated ourselves to transforming homes & offices with custom designs that enhance both beauty and value. Our extensive experience in the industry allows us to deliver products that not only meet but exceed expectations in durability, security, and design.
                </p>
                <p className="text-left">At the core of our philosophy is a commitment to quality. Every product we create is crafted from premium materials and backed by a comprehensive written warranty, ensuring that your investment stands the test of time. Our advanced locking systems and thoughtfully designed hardware offer peace of mind, providing the security your home deserves. </p>
                <p className="text-left">We understand that a tranquil home environment is essential. That’s why our windows and doors operate smoothly, contributing to a serene atmosphere. For those seeking additional comfort, we offer specialized glass configurations that provide superior noise reduction, allowing you to enjoy moments of peace.</p>
                <p className="text-left">Our sleek aluminium systems are designed to minimize sightlines, ensuring that your home maintains a captivating aesthetic. We believe that style should never be compromised, which is why our products are available in a stunning array of finishes—glossy, matte, metallic, anodized, or wood—so you can find the perfect match for your taste. </p>
                <p className="text-left">Low maintenance is a key aspect of our designs. Our products are engineered to withstand the elements, requiring only occasional cleaning to keep them looking their best. This means you can spend less time worrying about upkeep and more time enjoying your beautiful home. </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="text-wrapper" data-aos="fade-up">
                <p className="text-lg tx-dark mb-20 pt-35 text-left lg-pt-20 lg-mb-50">Vision</p>
                <p className="text-left">To Improve the Lives and Homes of customers through Innovation and Excellence and be the brand leader in Customised Building Solutions</p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="text-wrapper" data-aos="fade-up">
                <p className="text-lg tx-dark mb-20 pt-35 text-left lg-pt-20 lg-mb-50">Mission</p>
                <p className="text-left">To establish a service organisation that passionately provides Customised Building Solutions and delivers Exceptional Customer Experience.</p>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-fiftyOne */}

    


  

   


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
      <Footer />
    </>
  );
};

export default AboutUsV1;
