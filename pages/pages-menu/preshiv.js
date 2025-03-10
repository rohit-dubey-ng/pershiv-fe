import Link from "next/link";
import Seo from "../../components/common/Seo";
import Footer from "../../components/footer/Footer";
import DefaulHeader from "../../components/header/DefaulHeader";
import AppBanner from "../../components/home-page/home-1/AppBanner";
import Banner from "../../components/home-page/home-1/Banner";
import Block from "../../components/home-page/home-1/Block";
import Blog from "../../components/home-page/home-1/Blog";
import ContactForm from "../../components/home-page/home-1/ContactForm";
import Feature from "../../components/home-page/home-1/Feature";
import Hero from "../../components/home-page/home-1/Hero";
import IntroAbout from "../../components/home-page/home-1/IntroAbout";
import Service from "../../components/home-page/home-1/Service";
import Testimonial from "../../components/home-page/home-1/Testimonial";
import WhyChoose from "../../components/home-page/home-1/WhyChoose";
import Gallery from "../../components/gallery/Gallery";
import Partner from "../../components/home-page/home-1/Partner";
import Property from "../../components/home-page/home-1/Property";
import Quote from "../../components/home-page/home-1/Quote";
import imageBox from "../../public/images/assets/logo.png";
import Slider from "react-slick";
import Image from "next/image";
import email from "../../public/images/icon/email.png";
import location from "../../public/images/icon/location.png";
import phone from "../../public/images/icon/phone.png";

const Preshiv = () => {
  const address = "Mangaldas shopping center, navjivan circle,U.M ROAD,SURAT";
  const services = [
    {
      icon: "images/assets/window-image.png",
      title: "Windows",
      delayAnim: 0,
    },
    {
      icon: "images/assets/partition.png",
      title: "Partitions",
      delayAnim: 100,
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  const testimonials = [
    {
      videoUrl: "https://youtu.be/hceNBCnOx44",
      author: "John Doe",
      position: "CEO, Company A",
    },
    {
      videoUrl: "https://youtu.be/hceNBCnOx44",
      author: "Jane Smith",
      position: "Marketing Head, Company B",
    },
    {
      videoUrl: "https://youtu.be/hceNBCnOx44",
      author: "David Brown",
      position: "CTO, Company C",
    },
    {
      videoUrl: "https://youtu.be/hceNBCnOx44",
      author: "David Brown",
      position: "CTO, Company C",
    },
    {
      videoUrl: "https://youtu.be/hceNBCnOx44",
      author: "David Brown",
      position: "CTO, Company C",
    },
    {
      videoUrl: "https://youtu.be/hceNBCnOx44",
      author: "David Brown",
      position: "CTO, Company C",
    },
  ];
  return (
    <>
      <Seo pageTitle="Insurance" />
      {/* <!-- 
      =============================================
			Theme Default Menu
			============================================== 	
      --> */}
      <DefaulHeader />
      {/* <!-- 
			=============================================
			Theme Hero Banner
			============================================== 
			--> */}
      <Hero />
      {/* <!-- 
			=============================================
				Feature Section Thirty Four
			============================================== 
			--> */}
      <div className="fancy-feature-thirtyFour mt-50">
        <div className="container">
          <div className="row align-items-center justify-content-center ">
            <Feature />
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.fancy-feature-thirtyFour --> */}
      {/*
			=====================================================
				Feature Section Thirty Five
			=====================================================
			*/}
      <div className="fancy-feature-thirtyFive mt-90 md-mt-70">
        <div className="container" data-aos="fade-up">
          <Banner />
        </div>

        <div className="bg-wrapper mt-150 pt-100 lg-mt-80 lg-pt-70">
          <div className="container">
            <IntroAbout />
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-feature-thirtyFive */}
      {/* 
			=============================================
				Feature Section Thirty Six
			============================================== 
			*/}
      <div className="discover-services fancy-feature-thirtySix mt-190 lg-mt-140">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">
                    Discover all our Services.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <Service services={services} />
            </div>
            {/* /.row */}

            <div className="text-center md-mt-50">
              <Link
                href="/pages-menu/service-v1"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                View all Services
              </Link>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>

      <div className="our-vision-mission fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-lg-12 order-lg-first">
              <Block />
            </div>
          </div>
        </div>
      </div>

      <div
        className="feedback-section-eleven position-relative mt-200 pt-100 pb-70 lg-mt-120 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">Client Feedback</h2>
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

      {/* /.feedback-section-eleven */}

      {/* video review */}
      <div className="ShowcasePage ">
        <div className="client-video-review">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="video-container">
                  <video width="100%" controls>
                    <source src={testimonial.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="testimonial-author mt-4 text-center">
                  <h5>{testimonial.author}</h5>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* end video review */}

      {/* core-technology */}

      {/* <div className="blog-section-one p-30 mt-180 lg-mt-120">
        <div className="text-center">
          <h3>What is Lorem Ipsum?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="container mt-50">
          <div className="client-logo-image">
            <ul
              className="nav nav-pills mb-3 text-center justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Associated Organization
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Infrastructure Developer
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Associated with Gov department
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Textile Industries
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Diamond & Jewelery
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Pharma & Healthcare
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Hotel & Beverages
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="partner-section-three mt-140 mb-50 lg-mt-100 lg-mb-100">
                  <Partner />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="partner-section-three mt-140 mb-50 lg-mt-100 lg-mb-100">
                  <Partner />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* core-technology */}

      {/* =============================================
				Feature Section Thirty Eight
			============================================== 
			*/}
      {/* =============================================
		   Gallary Section
		   ============================================== */}
      {/* <div className="fancy-feature-thirtyEight mt-140 lg-mt-100 position-relative  pb-70 lg-mt-120 lg-pt-70 lg-pb-50">
        <div className="container">
          <div className="container">
            <div className="title-style-one text-center mb-50 lg-mb-20">
              <h2 className="main-title fw-500 tx-dark m0">Image Gallery 12</h2>
            </div>
          </div>
          <Gallery />
        </div>
      </div> */}
      <div className="fancy-feature-thirtyEight mt-140 lg-mt-100">
        <div className="container">
          <AppBanner />
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtyEight */}
      {/*=====================================================
				Fancy Short Banner Thirteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper zn2 bg-white position-relative">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6 ms-auto order-lg-last">
                    <div className="text-wrapper">
                      <img
                        src="/images/icon/icon_114.svg"
                        alt="icon"
                        className="lazy-img mb-30"
                      />
                      <div className="title-style-one">
                        <h2 className="main-title fw-500 tx-dark m0">
                          Let’s talk with expereince advisors.
                        </h2>
                      </div>
                      <p className="fs-20 tx-dark pt-20 m0">
                        eiusmod tempor incididunt. Ut enim mim veniam, quis
                        nostrud elit lorem dolor.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 order-lg-first mt-50 mb-50">
                    <div className="form-style-two md-mb-40">
                      <ContactForm address={address} />
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
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-thirteen */}
      {/* =============================================
		   Blog Section Three
		   ============================================== */}
      <div className="blog-section-three mt-140 mb-170 lg-mt-100 lg-mb-100">
        <div className="container">
          <div className="position-relative">
            <div className="row align-items-end">
              <div className="col-sm-8">
                <div
                  className="title-style-one text-center text-sm-start pb-40 lg-pb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">Our Blog</h2>
                </div>
                {/* /.title-style-one */}
              </div>
            </div>
            {/* /.row */}
            <div className="row gx-xxl-5">
              <Blog />
            </div>
            {/* /.row */}
            <div className="text-center xs-mt-40">
              <Link
                href="/blog/blog-v2"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                Go to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* parter */}
      <div className="fancy-feature-fortySix position-relative">
        <div className="container">
          <div className="position-relative pt-200 pb-180 lg-pt-120 md-pb-130">
            <div className="row align-items-center">
              <div className="col-lg-12" data-aos="fade-right">
                <div className="title-style-eleven md-mb-20">
                  <h2 className="main-title tx-dark">Locate Us</h2>
                </div>
              </div>
              {/* <div className="col-lg-4 ms-auto " data-aos="fade-left">
                <div className="form-group ">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Branch</option>
                    <option value="Surat">Surat</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Vadodara">Vadodara</option>
                    <option value="Rajkot">Rajkot</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>
              </div> */}
            </div>
            {/* End .row */}

            <div className="row gx-xxl-5 pt-60 lg-pt-40 md-pt-20">
              <div className="location_slider">
                <div className="slider_image">
                  <Image
                    src={location}
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                  />
                </div>

                <div className="slider_content">
                  <h6>Surat</h6>
                  <p>
                    22,23,FIRST FLOOR, MANGALDAS SHOPPING CENTER, NAJIVAN
                    CIRCLE,U.M ROAD,SURAT.
                  </p>
                </div>

                <div className="city_details">
                  <div className="city_list">
                    <div className="city_social_links">
                      <Image
                        src={email}
                        alt="media"
                        className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                      />
                    </div>

                    <div className="mail_details">
                      <p>response@pershiv.com</p>
                    </div>
                  </div>

                  <div className="city_list">
                    <div className="city_social_links">
                      <Image
                        src={phone}
                        alt="media"
                        className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                      />
                    </div>

                    <div className="mail_details">
                      <p>1800 102 9880</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Property /> */}
            </div>
            {/* End .row */}

            <Quote />
            {/* /.quote-wrapper */}
          </div>
          {/* /.line-bg-wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* end parter */}
      {/* /.blog-section-three */}
      {/* /Partner */}
      {/* <div className="partner-section-three mt-140 mb-170 lg-mt-100 lg-mb-100">
        <Partner />
      </div> */}
      {/* /Partner end */}
      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-ten theme-basic-footer zn2 position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              {/* <div className="col-lg-3 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo/logo-white.png" alt="logo" width={95} />
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                  Best Alu Systems Company.
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
                  Pershiv Alu Systems
                </p>
              </div> */}
              <Footer />
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
        {/* End .container */}
        <img
          src="/images/assets/ils_13.png"
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <img
          src="/images/assets/ils_14.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />
      </div>
      {/* /.footer-style-ten */}
    </>
  );
};

export default Preshiv;
