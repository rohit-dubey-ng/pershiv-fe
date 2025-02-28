import Link from "next/link";

const DesignBanner = () => {
  return (
    <div className="hero-banner-five text-center position-relative herMenu overflow-hidden">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-10 m-auto overlay"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <h1 className="w-75 mx-auto">Windows that Reflect your Style and Personality
            </h1>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default DesignBanner;
