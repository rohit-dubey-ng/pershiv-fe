import Image from "next/image";

const BrandContent = () => {
  return (
    <div className="FenestaEdgeDetails">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="EdgeWrp">
              <h4>Experience Of 4M+ Installations</h4>

              <p>
                With its expertise, knowledge of the Indian market, global
                technologies, skilled workforce, extensive service network, and
                commitment to excellence, Fenesta has successfully produced and
                installed over 4 million windows. These windows serve nearly
                400,000 homes and a multitude of establishments, including
                hotels, hospitals, factories, showrooms, and schools.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="weatherWrp">
              <Image
                width={500}
                height={300}
                src="/images/assets/experience.png"
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
                width={500}
                height={300}
                src="/images/assets/shriram.jpg"
                alt="media"
                className="lazy-img lg-mt-20 lg-mb-20 "
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="weatherWrp">
              <h4>Part of the 133 Year Old DCM Shriram Group</h4>

              <p>
                Fenesta is a part of the Rs 11,431 Crore DCM Shriram Group, one
                of the oldest, largest and most trusted business houses in north
                India. Founded by Sir Shriram in the late 19th century, DCM
                Shriram is known for its transparent work culture and diversity.
                It has a vast and diverse business portfolio including
                industries like Sugar, Farm Solutions, Bioseeds, Chemicals,
                Fertilizers, Cement, Fenestration and many more.
              </p>

              <button type="submit" className="ReadBtn">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-70">
          <div className="col-lg-6">
            <div className="weatherWrp">
              <h4>Fenesta Open</h4>

              <p>
                The 27th edition of the Fenesta Open National Tennis
                Championship took place in 2022, continuing the tradition of the
                national hardcourt tennis championship. Organized annually by
                the DCM Group since 1998, under the aegis of the All India
                Tennis Association, the championship serves as a source of
                inspiration for aspiring young players and sports enthusiasts.
              </p>

              <button type="submit" className="ReadBtn">
                Read More
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="weatherWrp">
              <Image
                width={500}
                height={300}
                src="/images/assets/compitition.png"
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
                width={500}
                height={300}
                src="/images/assets/medal.png"
                alt="media"
                className="lazy-img lg-mt-20 lg-mb-20 "
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="weatherWrp">
              <h4>Not Just A Brand, But A SUPERBRAND</h4>

              <p>
                Not surprisingly, Fenesta is India's first window 'Superbrand'.
                More than 4M+ Installations, pan India presence,
                technology-driven solutions, a company-run showroom in every
                major city (the Fenesta Signature Studio), 365-days customer
                support and the 20-year warranty on profiles distinguish Fenesta
                from others.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-70">
          <div className="col-lg-6">
            <div className="weatherWrp">
              <h4>Awards & Recognition</h4>

              <p>
                Fenesta is a proud recipient of prestigious industry awards and
                accolades that recognise its supreme quality and
                state-of-the-art infrastructure.
              </p>

              <button type="submit" className="ReadBtn">
                Read More
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="weatherWrp">
              <Image
                width={500}
                height={300}
                src="/images/assets/gold.jpg"
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
                width={500}
                height={300}
                src="/images/assets/Clientele.jpg"
                alt="media"
                className="lazy-img lg-mt-20 lg-mb-20 "
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="weatherWrp">
              <h4>Fenesta Clientele</h4>

              <p>
                Fenesta has won the confidence of India's most renowned
                developers, among them DLF, Brigade, Mahagun, Prateek, Omaxe and
                Presitge. More than 100 hotels such as Le Meridien, Leela
                Palace, The Lalit, Ashoka, Lemon Tree and several leading
                hospitals including Wockhardt, Leelavati, Hinduja and Gangaram
                have installed Fenesta windows. Fenesta is also the preferred
                choice of educational institutes across the country and has
                installed its windows in premium institutes like the IITs and
                IIMs.
              </p>

              <button type="submit" className="ReadBtn">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandContent;
