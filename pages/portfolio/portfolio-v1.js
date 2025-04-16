import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import PortfolioTopTitle from "../../components/portfolio/PortfolioTopTitle";
import PortfolioGallery1 from "../../components/portfolio/PortfolioGallery1";
import imageBox from "../../public/images/assets/logo.png";
import Link from "next/link";
import Banner from "../../components/home-page/home-1/Banner";
import Blog from "../../components/home-page/home-1/Blog";
import Testimonial from "../../data/testimonial";
import Testimonials from "../showcase/testimonials";
import Image from "next/image";

const PortfolioV1 = () => {
  const features = [
    {
      title: <>Sliding Windows </>,
      width: "169",
      height: "165",
      description:
        "Pershiv aluminum sliding windows are designed with one of the slimmest frames available, offering a refined, contemporary look. The sleek sightlines ensure maximum daylight and expansive views, enhancing the elegance of your space.",
      icon: "fi fi-rr-user-experience",
      delay: "300",
    },

    {
      title: <>Casement Windows </>,
      width: "169",
      height: "165",
      description:
        "Pershiv casement windows are available in several configurations side Hung Hinged on the side for effortless opening,providing full ventilation and significantly enhancing the building’s visual appeal.Hinged at the top, ideal for adverse weather conditions as they effectively prevent rain from entering.",
      icon: "fi fi-rr-layers",
      delay: "400",
    },

    {
      title: <>Fixed Windows</>,
      width: "169",
      height: "165",
      description:
        "Pershiv fixed windows remain stationary but are designed to flood your interiors with natural light. They excel in thermal performance, noise reduction, and energy efficiency, offering significant benefits in these areas.",
      icon: "fi fi-rr-shield-check",
      delay: "500",
    },
  ];
  return (
    <>
      <Seo pageTitle="Windows" />

      {/* banner */}
      <div className="hero-banner-thirteen position-relative zn2 pt-190 pb-225 lg-pb-150 lg-pt-150 md-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 m-auto">
              <div className="text-wrapper">
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
      {/* end banner */}

      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}

      <div className="container">
        <div
          className="container mt-50"
          
        >
          <div className="top-banner text-center">
            <h2 className="tx-dark mb-20">Product Knowledge</h2>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          {features.map((feature, index) => (
            <div
              className="col-lg-4 col-sm-6"
              key={index}
            >
              <div
                className={`why-pershiv-card tran3s position-relative mt-35`}
                style={{ background: feature.background }}
              >
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
                <div className="icon-round">
                  <i
                    className={`position-absolute ${feature.icon}`}
                    style={{
                      fontSize: feature.height, // Adjust size to match dimensions
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="blog-section-one p-30 mt-180 lg-mt-120">
        <div className="text-center">
          <h3>Explore Our Range</h3>
          <p>
            Sliding, Casement, and Fixed Windows – Style Meets Functionality!
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
                  id="pills-Sliding-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Sliding"
                  type="button"
                  role="tab"
                  aria-controls="pills-Sliding"
                  aria-selected="true"
                >
                  Sliding Windows
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-Casement-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Casement"
                  type="button"
                  role="tab"
                  aria-controls="pills-Casement"
                  aria-selected="false"
                >
                  Casement Windows
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-Fixed-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Fixed"
                  type="button"
                  role="tab"
                  aria-controls="pills-Fixed"
                  aria-selected="false"
                >
                  Fixed Windows
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-Sliding"
                role="tabpanel"
                aria-labelledby="pills-Sliding-tab"
              >
                <div className="image-wrp">
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-Casement"
                role="tabpanel"
                aria-labelledby="pills-Casement-tab"
              >
                <div className="image-wrp">
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-Fixed"
                role="tabpanel"
                aria-labelledby="pills-Fixed-tab"
              >
                <div className="image-wrp">
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                  <div className="image-box">
                    <Image width={150} height={150} src={imageBox} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="QualityDetails mt-180">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="weatherWrp">
                <p>
                  Pershiv is dedicated to transforming your workspace into a
                  haven of elegance and efficiency. Our partitioning systems,
                  ideal for offices, meeting rooms, and production units, ,
                  seamlessly blend minimalist design with outstanding
                  performance. Enjoy effective space separation, superior sound
                  insulation, and striking aesthetics. Choose from standard or
                  slim profiles, with options for double or single glazing, and
                  integrate with glazed,aluminum, or wood panels.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="weatherWrp">
                <Image
                  width={600}
                  height={400}
                  src="/images/assets/weather.jpg"
                  alt="media"
                  className="lazy-img lg-mt-20 lg-mb-20 "
                />
              </div>
            </div>
          </div>

          <div className="row mt-70">
            <div className="col-lg-6">
              <div className="weatherWrp">
                <Image
                  width={600}
                  height={400}
                  src="/images/assets/aboratories.jpg"
                  alt="media"
                  className="lazy-img lg-mt-20 lg-mb-20 "
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="weatherWrp">
                <p>
                  Our innovative snap-fit sections make assembly and glass
                  replacement smooth and effortless, without disrupting floors
                  or ceilings. They can be easily relocated and reinstalled with
                  minimal waste, adapting to your evolving needs.
                </p>

                <p>
                  Let Pershiv elevate your environment into a more open,
                  stylish, and inspiring space. With a passion for excellence
                  and a dedicated R&D team, we turn your vision into reality,
                  ensuring each project is executed with meticulous
                  care and precision.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-70">
            <div className="col-lg-6">
              <div className="weatherWrp"></div>
            </div>

            <div className="col-lg-6">
              <div className="weatherWrp">
                <Image
                  width={600}
                  height={400}
                  src="/images/assets/conditions.jpeg"
                  alt="media"
                  className="lazy-img lg-mt-20 lg-mb-20 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fancy-short-banner-sixteen mt-130 lg-mt-80 wow fadeInUp">
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Have Any Project?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Don’t hesitate to send us message.
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      Get Started Today!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>

      <div className="blog-section-three mt-140 mb-170 lg-mt-100 lg-mb-100">
        <div className="container">
          <div className="position-relative">
            <div className="row align-items-end">
              <div className="col-sm-8">
                <div
                  className="title-style-one text-center text-sm-start pb-40 lg-pb-20"
                  
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
                
              >
                Go to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

      {/* /.fancy-short-banner-sixteen */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
    </>
  );
};

export default PortfolioV1;
