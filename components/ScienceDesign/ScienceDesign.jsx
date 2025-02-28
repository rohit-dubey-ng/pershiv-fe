import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ScienceDesign = () => {
  return (
    <>
      <div className="ScienceWrp mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2 className="tx-dark mb-20">Science @ Work</h2>
                <p className="opacity-75 mb-30 lg-mb-20">
                  Fenesta's high-performance windows and doors add an
                  architectural dimension to your home. Its UPVC and Aluminium
                  Windows and Doors keep out street noise, dust, pollution, rain
                  and gale force winds. At the same time, they are energy
                  efficient, low maintenance, and long-lasting.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="ScienceDetails">
                <div className="ContentImage">
                  <Image
                    width={50}
                    height={50}
                    src="/images/assets/energy.png"
                    alt="media"
                    className="lazy-img lg-mt-20 lg-mb-20 "
                  />
                </div>

                <div className="EnergyWrp">
                  <p>Energy Efficient</p>
                </div>
              </div>

              <div className="ScienceDetails">
                <div className="ContentImage">
                  <Image
                    width={50}
                    height={50}
                    src="/images/assets/mute.png"
                    alt="media"
                    className="lazy-img lg-mt-20 lg-mb-20 "
                  />
                </div>

                <div className="EnergyWrp">
                  <p>Noice Insulation</p>
                </div>
              </div>

              <div className="ScienceDetails">
                <div className="ContentImage">
                  <Image
                    width={50}
                    height={50}
                    src="/images/assets/umbrella.png"
                    alt="media"
                    className="lazy-img lg-mt-20 lg-mb-20 "
                  />
                </div>

                <div className="EnergyWrp">
                  <p>Rain Insulation</p>
                </div>
              </div>

              <div className="ScienceDetails">
                <div className="ContentImage">
                  <Image
                    width={50}
                    height={50}
                    src="/images/assets/strom.png"
                    alt="media"
                    className="lazy-img lg-mt-20 lg-mb-20 "
                  />
                </div>

                <div className="EnergyWrp">
                  <p>strom Resistant</p>
                </div>
              </div>

              <div className="ScienceDetails">
                <div className="ContentImage">
                  <Image
                    width={50}
                    height={50}
                    src="/images/assets/low.png"
                    alt="media"
                    className="lazy-img lg-mt-20 lg-mb-20 "
                  />
                </div>

                <div className="EnergyWrp">
                  <p>Low Maintenance</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="work-image">
                <Image
                  width={500}
                  height={500}
                  src="/images/assets/drawing.jpg"
                  alt="media"
                  className="lazy-img lg-mt-20 lg-mb-20 w-100 object-fit-cover"
                />
              </div>
            </div>

            <div className="col-lg-2">
              <div className="ScienceDetails">
                <div className="ContentImage">
                  <Image
                    width={50}
                    height={50}
                    src="/images/assets/scissors.png"
                    alt="media"
                    className="lazy-img lg-mt-20 lg-mb-20 "
                  />
                </div>

                <div className="EnergyWrp">
                  <p>Keep Insects out</p>
                </div>
              </div>

              <div className="ScienceDetails">
                <div className="ContentImage">
                  <Image
                    width={50}
                    height={50}
                    src="/images/assets/dust.png"
                    alt="media"
                    className="lazy-img lg-mt-20 lg-mb-20 "
                  />
                </div>

                <div className="EnergyWrp">
                  <p>Dust Resistant</p>
                </div>
              </div>

              <div className="ScienceDetails">
                <div className="ContentImage">
                  <Image
                    width={50}
                    height={50}
                    src="/images/assets/customize.png"
                    alt="media"
                    className="lazy-img lg-mt-20 lg-mb-20 "
                  />
                </div>

                <div className="EnergyWrp">
                  <p>Easy Customization</p>
                </div>
              </div>

              <div className="ScienceDetails">
                <div className="ContentImage">
                  <Image
                    width={50}
                    height={50}
                    src="/images/assets/weather.png"
                    alt="media"
                    className="lazy-img lg-mt-20 lg-mb-20 "
                  />
                </div>

                <div className="EnergyWrp">
                  <p>Weather Resistant</p>
                </div>
              </div>

              <div className="ScienceDetails">
                <div className="ContentImage">
                  <Image
                    width={50}
                    height={50}
                    src="/images/assets/column.png"
                    alt="media"
                    className="lazy-img lg-mt-20 lg-mb-20 "
                  />
                </div>

                <div className="EnergyWrp">
                  <p>Elegant Look</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScienceDesign;
