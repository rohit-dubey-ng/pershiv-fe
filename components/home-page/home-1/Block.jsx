import Service from "./Block";

const Block = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="tx-dark mb-20">Our Vision / Mission </h2>
      </div>
      <div className="row our-vision-row mb-30">
        <div className="col-lg-6">
          <div className="card-image mb-5">
            <img
              src="images/assets/Vision-10.jpg"
              className="card-img-top"
              alt="Vision Image"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="vision-card">
            <div className="vision-card-body text-left">
              <h5 className="card-title mb-15">Vision</h5>
              <p className="card-text">
                <ul>
                  <li>
                    At Pershiv, we transform dream homes into stunning realities
                    with unparalleled quality and exquisite design. Our products
                    elevate living spaces and stand the test of time, becoming
                    cherished elements of your home.
                  </li>
                  <li>
                    We value every relationship, nurturing connections built on
                    trust, respect, and collaboration. Our strong ethical
                    foundation ensures integrity and transparency in all
                    interactions.
                  </li>
                  <li>
                    Sustainability is central to our vision. We embrace
                    eco-friendly practices and sustainable materials to benefit
                    our clients and the environment.{" "}
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row our-mission-row mb-30">
        <div className="col-lg-6">
          <div className="mission-card mb-5">
            <div className="mission-card-body text-left">
              <h5 className="card-title mb-15">Mission</h5>
              <ul>
                <li>
                  Exceptional Design and Security: At Pershiv, we blend stunning
                  design with unparalleled security, ensuring your home is both
                  beautiful and safe.
                </li>
                <li>
                  Artistry and Craftsmanship: Our products reflect meticulous
                  craftsmanship and innovative designs, using the highest
                  quality materials for resilience and beauty.
                </li>
                <li>
                  Customer-Centric Excellence: We prioritize customer
                  satisfaction from consultation to installation, providing
                  personalized service and advanced security features for peace
                  of mind.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card-image">
            <img
              src="images/assets/Mission-10.jpg"
              className="card-img-top"
              alt="Vision Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Block;
