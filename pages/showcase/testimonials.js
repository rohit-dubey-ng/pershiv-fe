import DefaulHeader from "../../components/header/DefaulHeader";
import Image from "next/image";
import testimonial from "../../data/testimonial";
import Seo from "../../components/common/Seo";
import Slider from "react-slick";
import Footer from "../../components/footer/Footer";

const testimonials = [
  {
    videoUrl: "https://www.youtube.com/embed/WyTMOrtt350",
    author: "John Doe",
    position: "CEO, Company A",
  },
  {
    videoUrl: "https://www.youtube.com/embed/qstOzbD2XG0",
    author: "Jane Smith",
    position: "Marketing Head, Company B",
  },
  {
    videoUrl: "https://www.youtube.com/embed/F3fUdW3DUkQ",
    author: "David Brown",
    position: "CTO, Company C",
  },
  {
    videoUrl: "https://www.youtube.com/embed/_OtcG0oWW4c",
    author: "David Brown",
    position: "CTO, Company C",
  },
  {
    videoUrl: "https://www.youtube.com/embed/WyTMOrtt350",
    author: "David Brown",
    position: "CTO, Company C",
  },
];

const imageData = [
  {
    imgSrc: "https://i.ibb.co/k5fCPz8/Mahagun.png",
    altText: "Slide 1",
  },
  {
    imgSrc: "https://i.ibb.co/k5fCPz8/Mahagun.png",
    altText: "Slide 2",
  },
  {
    imgSrc: "https://i.ibb.co/k5fCPz8/Mahagun.png",
    altText: "Slide 3",
  },
  {
    imgSrc: "https://i.ibb.co/k5fCPz8/Mahagun.png",
    altText: "Slide 4",
  },
  {
    imgSrc: "https://i.ibb.co/k5fCPz8/Mahagun.png",
    altText: "Slide 5",
  },
];

const Testimonials = () => {
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

  return (
    <>
      <Seo pageTitle="Testimonials" />
      <DefaulHeader />
      <div className="ShowcasePage">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="top-banner text-center">
            <h2 className="tx-dark mb-20">Pershiv Customer Reviews</h2>
          </div>
        </div>
        <div className="mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="showcase-image-tab">
                  <ul
                    className="nav nav-pills mb-3"
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
                        Retail
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
                        Projects
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
                      <div className="client-review">
                        <Slider {...settings}>
                          {testimonial.slice(0, 4).map((item) => (
                            <div className="item" key={item.id}>
                              <div className="feedback-block-eleven">
                                <div className="top-header d-flex align-items-center justify-content-between">
                                  <div>
                                    <h3 className="tx-dark m0">{item.title}</h3>
                                    <ul className="style-none d-flex rating pt-15">
                                      {Array.from({ length: item.rating }).map(
                                        (_, index) => (
                                          <li key={index}>
                                            <i className="bi bi-star-fill" />
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                  <img
                                    src="/images/icon/icon_112.svg"
                                    alt=""
                                    width={50}
                                  />
                                </div>
                                <p className="tx-dark">{item.text}</p>
                                <div className="d-flex align-items-center justify-content-between">
                                  <div className="cost fw-500 tx-dark fs-20">
                                    {item.author},{" "}
                                    <span className="opacity-50 fw-normal">
                                      {item.location}
                                    </span>
                                  </div>
                                  <Image
                                    width={60}
                                    height={60}
                                    src={item.image}
                                    alt="tesimonial avatar"
                                    className="rounded-circle"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                      <div className="client-video-review">
                        <Slider {...settings}>
                          {testimonials.map((testimonial, index) => (
                            <div key={index}>
                              <div className="video-container">
                                <iframe
                                  width="100%"
                                  height="350"
                                  src={testimonial.videoUrl}
                                >
                                  Your browser does not support the video tag.?
                                </iframe>
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
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="project-list">
                        <Slider {...settings}>
                          {imageData.map((image, index) => (
                            <div key={index}>
                              <img
                                src={image.imgSrc}
                                alt={image.altText}
                                className="img-fluid"
                              />
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
