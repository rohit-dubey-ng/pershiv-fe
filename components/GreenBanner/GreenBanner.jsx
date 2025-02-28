import Link from "next/link";

const GreenBanner = () => {
  return (
    <div className="hero-banner-five text-center position-relative herMenu">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-10 m-auto overlay"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <h1>Sustainability</h1>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default GreenBanner;
