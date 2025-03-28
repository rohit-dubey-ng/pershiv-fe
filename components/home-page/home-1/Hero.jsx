import Image from "next/image";
import React from "react";

const Hero1 = () => {
  const options = [
    { value: 0, display: "Windows" },
    { value: 1, display: "Doors" },
    { value: 2, display: "Accessories" },
    { value: 3, display: "Services" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };
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
    <div className="m position-relative zn2 mt-md-5">
      <div id="heroSectionSlider" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroSectionSlider"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#heroSectionSlider"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#heroSectionSlider"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/images/assets/HomePageBanner1.jpg"
              className="d-block w-100"
              alt="..."
              height={500}
              width={500}
            />
            <div className="banner-text">
              <div className="container">
                <div className="row">
                  <div
                    className="col-lg-9 col-md-10 m-auto text-center"
                    data-aos="fade-up"
                  >
                    <h1 className="hero-heading fw-500 fs-md-3">
                      Precision. Innovation. Pershiv.
                    </h1>

                    <div>
                      <div className="d-flex flex-column flex-sm-row  align-items-sm-center justify-content-center justify-content-sm-center mt-4 mt-sm-0">
                        <button
                          type="button"
                          class="btn-lg read-more-btn btn-twentyTwo"
                        >
                          {" "}
                          Read More{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              src="/images/assets/HomePageBanner2.jpg"
              className="d-block w-100"
              alt="..."
              height={500}
              width={500}
            />
            <div className="banner-text">
              <div className="container">
                <div className="row">
                  <div
                    className="col-lg-9 col-md-10 m-auto text-center"
                    data-aos="fade-up"
                  >
                    <h1 className="hero-heading fw-500 fs-md-3">
                      Tailored for you. Built to Last.
                    </h1>

                    <div>
                      <div className="d-flex flex-column flex-sm-row  align-items-sm-center justify-content-center justify-content-sm-center mt-4 mt-sm-0">
                        <button
                          type="button"
                          class="btn-lg read-more-btn btn-twentyTwo"
                        >
                          {" "}
                          Read More{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              src="/images/assets/HomePageBanner3.jpg"
              className="d-block w-100"
              alt="..."
              width={500}
              height={500}
            />
            <div className="banner-text">
              <div className="container">
                <div className="row">
                  <div
                    className="col-lg-9 col-md-10 m-auto text-center"
                    data-aos="fade-up"
                  >
                    <h1 className="hero-heading fw-500 fs-md-3">
                      Seamless Service. Unmatched Excellence.
                    </h1>

                    <div>
                      <div className="d-flex flex-column flex-sm-row  align-items-sm-center justify-content-center justify-content-sm-center mt-4 mt-sm-0">
                        <button
                          type="button"
                          class="btn-lg read-more-btn btn-twentyTwo"
                        >
                          {" "}
                          Read More{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroSectionSlider"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroSectionSlider"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* End .container */}
    </div>
  );
};

export default Hero1;
