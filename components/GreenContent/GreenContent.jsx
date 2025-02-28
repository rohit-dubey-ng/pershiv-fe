import Image from "next/image";

const GreenContent = () => {
  return (
    <div className="FenestaEdgeDetails">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="EdgeWrp">
              <h4>Recyclable for a Better Tomorrow</h4>

              <p>
                Aluminium is 100% recyclable and retains its strength and
                quality even after multiple recycles. This ensures that every
                window we create at Pershiv is part of a sustainable cycle,
                reducing waste and promoting responsible use of resources.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="weatherWrp">
              <Image
                width={500}
                height={300}
                src="/images/assets/green.jpg"
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
                width={500}
                height={300}
                src="/images/assets/Natural.jpg"
                alt="media"
                className="lazy-img lg-mt-20 lg-mb-20 "
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="EdgeWrp">
              <h4>Protecting Natural Resources</h4>

              <p>
                By choosing aluminium over wood, we contribute to global forest
                conservation. Aluminium windows have replaced traditional wooden
                frames worldwide, helping reduce cutting down of forests and
                ensuring a more sustainable future for the coming generations.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-70 align-items-center">
          <div className="col-lg-6">
            <div className="EdgeWrp">
              <h4>Lower Carbon Footprint</h4>

              <p>
                Aluminium's energy-efficient properties help offset the energy
                used in production by over 100 times. Additionally, Pershiv’s
                precision-engineered windows last longer, resist damage from
                rust or warping, and require minimal replacements—further
                reducing waste and environmental impact.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="weatherWrp">
              <Image
                width={500}
                height={300}
                src="/images/assets/carbon.jpg"
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
                width={500}
                height={300}
                src="/images/assets/Indoor.jpg"
                alt="media"
                className="lazy-img lg-mt-20 lg-mb-20 "
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="EdgeWrp">
              <h4>Cleaner, Healthier Indoor Air</h4>

              <p>
                Pershiv’s advanced sealing technology prevents dust, smoke, and
                outdoor pollutants from entering your home, improving air
                quality and reducing health risks. A cleaner environment inside
                means a healthier living for you and your family.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-70 align-items-center">
          <div className="col-lg-6">
            <div className="EdgeWrp">
              <h4>Superior Energy Efficiency</h4>

              <p>
                Pershiv aluminium windows are designed with thermal break
                technology, double or triple glazing, and airtight sealing. This
                ensures excellent insulation against heat, leading to reduced
                energy consumption and lower cooling costs—making your home both
                eco-friendly and cost-efficient.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="weatherWrp">
              <Image
                width={500}
                height={300}
                src="/images/assets/energy.jpg"
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

export default GreenContent;
