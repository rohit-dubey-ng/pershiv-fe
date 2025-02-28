import Image from "next/image";

const DesignPalette = () => {
  return (
    <div className="DesignPalette">
      <div className="container">
        <div className="text-center">
          <h2 className="tx-dark mb-20">Wide Design Palette</h2>
          <p className="opacity-75 mb-30 lg-mb-20">
            Delve into Fenesta's library of styles, and it will amaze you with its
            never-ending collection of picturesque designs. There is a style to
            match every single need of yours. Not only this, Fenesta windows and
            doors come with unparalleled benefits.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Image
              width={900}
              height={500}
              src="/images/assets/design-pallete.jpg"
              alt="media"
              className="lazy-img mb-40 lg-mt-20 lg-mb-20 "
            />
          </div>

          <div className="col-lg-6">
            <div className="WideDesign">
              <strong>Wide Design Palette</strong>
              <p>
                Fenesta's high-performance windows and doors add an architectural
                dimension to your home. Its UPVC and Aluminium Windows and Doors
                keep out street noise, dust, pollution, rain and gale force winds.
                At the same time, they are energy efficient, low maintenance, and
                long-lasting.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="ContentWrp">
                  <div className="ContentImage">
                    <Image
                      width={60}
                      height={60}
                      src="/images/assets/door.png"
                      alt="media"
                      className="lazy-img lg-mt-20 lg-mb-20 "
                    />
                  </div>

                  <div className="DetailsWrp">
                    <h6>More than 1000 window styles</h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="ContentWrp">
                  <div className="ContentImage">
                    <Image
                      width={60}
                      height={60}
                      src="/images/assets/draw.png"
                      alt="media"
                      className="lazy-img lg-mt-20 lg-mb-20 "
                    />
                  </div>

                  <div className="DetailsWrp">
                    <h6>International Designs</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="ContentWrp">
                  <div className="ContentImage">
                    <Image
                      width={60}
                      height={60}
                      src="/images/assets/close-window.png"
                      alt="media"
                      className="lazy-img lg-mt-20 lg-mb-20 "
                    />
                  </div>

                  <div className="DetailsWrp">
                    <h6>A window for every room</h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="ContentWrp">
                  <div className="ContentImage">
                    <Image
                      width={60}
                      height={60}
                      src="/images/assets/paint.png"
                      alt="media"
                      className="lazy-img lg-mt-20 lg-mb-20 "
                    />
                  </div>

                  <div className="DetailsWrp">
                    <h6>Available in variety of colors</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <p className="text-lg font-bold text-dark">Choose Your Product Type</p>
              </div>
              <div className="col-lg-6">
                <div className="ContentWrp">
                  <div className="ContentImage">
                    <Image
                      width={60}
                      height={60}
                      src="/images/assets/close-window.png"
                      alt="media"
                      className="lazy-img lg-mt-20 lg-mb-20 "
                    />
                  </div>

                  <div className="DetailsWrp">
                    <h6>Windows</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ContentWrp">
                  <div className="ContentImage">
                    <Image
                      width={60}
                      height={60}
                      src="/images/assets/Door.png"
                      alt="media"
                      className="lazy-img lg-mt-20 lg-mb-20 "
                    />
                  </div>

                  <div className="DetailsWrp">
                    <h6>Door</h6>
                  </div>
                </div>
              </div>
            </div>








          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignPalette;
