import Image from "next/image";

const QualityContent = () => {
  return (
    <div className="QualityDetails">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="weatherWrp">
              <h4>High Grade Aluminium for Unmatched Strength
              </h4>
             
                <p>Pershiv Alu System windows are designed with high grade aluminium alloys for stronger structural integrity. No matter how bad the weather conditions are or what level of wear and tear, our windows stand strong through it all.</p>
             
              {/* <button type="submit" className="ReadBtn">
                Read More
              </button> */}
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

        <div className="row mt-70 align-items-center">
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
              <h4>Precision Craftsmanship for Unmatched Finish
              </h4>
                <p>Every window we make is a result of thorough craftsmanship and attention to detail. Smooth edges to flawless finish, at Pershiv we take care of it all to exceed your expectations of an amazing experienc</p>
              {/* <button type="submit" className="ReadBtn">
                Read More
              </button> */}
            </div>
          </div>
        </div>

        <div className="row mt-70 align-items-center">
          <div className="col-lg-6">
            <div className="weatherWrp">
              <h4>Advanced Insulation for Unmatched Efficiency
              </h4>
               <p>Extreme temperatures can be a problem for others, but not for Pershiv Alu Systems. Our windows are designed to keep the temperature indoors at an optimal level. Warm in Winter and cool in Summer, reducing energy consumption and your carbon footprint, making them energy efficient and eco friendly.
               </p>
              {/* <button type="submit" className="ReadBtn">
                Read More
              </button> */}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="weatherWrp">
              <Image
                width={600}
                height={400}
                src="/images/assets/conditions.jpg"
                alt="media"
                className="lazy-img lg-mt-20 lg-mb-20 "
              />
            </div>
          </div>
        </div>

        <div className="row mt-70 align-items-center">
          <div className="col-lg-6">
            <div className="weatherWrp">
              <Image
                width={600}
                height={400}
                src="/images/assets/manufacturing.jpg"
                alt="media"
                className="lazy-img lg-mt-20 lg-mb-20 "
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="weatherWrp">
              <h4>Soundproofing for Unmatched Peace
              </h4>
               <p>Our high performance sealing technology blocks all the distracting sounds from noisy neighbourhoods. The multi layer sealing is ideal for homes in busy areas blocking all external noise to give you a comfortable and quiet living environment.
               </p>
              {/* <button type="submit" className="ReadBtn">
                Read More
              </button> */}
            </div>
          </div>
        </div>

        <div className="row mt-70 align-items-center">
          <div className="col-lg-6">
            <div className="weatherWrp">
              <h4>Smart Innovation for Unmatched Security
              </h4>
             <p>Security and safety is our first thought at Pershiv. Reinforced with multi point advanced locking systems and toughened glass options for maximum safety and security our windows keep your home and your family protected at all times.</p>
              {/* <button type="submit" className="ReadBtn">
                Read More
              </button> */}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="weatherWrp">
              <Image
                width={600}
                height={400}
                src="/images/assets/hardware.jpg"
                alt="media"
                className="lazy-img lg-mt-20 lg-mb-20 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityContent;
