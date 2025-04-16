import Link from "next/link";

const FeatureBanner = () => {
  return (
    <div className="hero-banner-five-FeatureBanner text-center position-relative herMenu">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-10 m-auto overlay"
            >
            <h1>Feature Benefits</h1>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default FeatureBanner;
