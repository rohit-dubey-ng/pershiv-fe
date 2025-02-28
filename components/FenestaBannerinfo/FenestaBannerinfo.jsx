import Image from "next/image";

const FenestaBannerinfo = () => {
  return (
    <div className="FenestaEdgeDetails PershivDetails ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="weatherWrp">
              <Image
                width={500}
                height={300}
                src="/images/assets/welded.png"
                alt="media"
                className="lazy-img lg-mt-20 lg-mb-20 "
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="EdgeWrp">
              <p>
                We believe in excellence, be it the materials we use, the finish
                we give, the quality we offer, or the service we provide. We are
                committed to providing excellence in everything by focussing on
                all aspects of the product and services we offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FenestaBannerinfo;
