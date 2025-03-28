import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const IntroAbout = () => {
  const [isOpen, setOpen] = useState(false);
  const cardsData = [
    {
      id: 1,
      cardNo: "card-one",
      title: "masterful craftsmanship",
    },
    {
      id: 2,
      title: "wide variety",
      cardNo: "card-two",
     
    },
    {
      id: 3,
      title: "happier customers",
      // cardNo: "card-three",
    },
  ];

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="rDYdeq3JW_E"
        onClose={() => setOpen(false)}
      />

      <div className="row">
        <div className="col-xl-5 col-md-6 order-md-last">
          <div className="text-wrapper md-pb-70">
            <Image
              width={66}
              height={66}
              src="/images/icon/icon_103.svg"
              alt="icon"
              className="lazy-img cursor-pointer"
              onClick={() => setOpen(true)}
            />
            {/* <p className="tx-dark pt-30 pb-30 md-pb-15" data-aos="fade-up">
              The team signed <span className="fw-500">~$7,000,000</span> in new
              business in July. Accelerator has been a large part of that.
            </p> */}
            <h2 className="tx-dark pt-30 pb-30 md-pb-15"data-aos="fade-up">
            Quality & Innovations
            </h2>
            <ul className="style-none list-item fs-18">
              <li className="mb-20">
              <Link href="#">Crafted with premium materials for superior durability and style.</Link>
              </li>
              <li className="mb-20">
              <Link href="#">Featuring advanced technology for enhanced security and comfort.</Link>
              </li>
              <li className="mb-20">
              <Link href="#">Sleek designs with versatile finishes to match every aesthetic.</Link>
              </li>
              <li className="mb-20">
              <Link href="#">Driven by innovation to deliver modern, tailored solutions.</Link>
              </li>
            </ul>
           
          </div>
          {/* /.text-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-xl-7 col-md-6 order-md-first" data-aos="fade-up">
          <div className="img-holder d-lg-inline-flex position-relative zn2 pb-45 xl-pb-90">
            <img
              src="/images/shape/shape_135.svg"
              alt="shape"
              className="lazy-img"
            />
            <Image
              width={561}
              height={732}
              layout="intrinsic"
              src="/images/assets/Home Page Quality and Innovation section horizontal image.jpg"
              className="lazy-img avatar-img"
              alt="man"
            />

            {cardsData.map((item) => (
              <div
                className={`card-style ${item.cardNo} d-flex justify-content-center`}
                key={item.id}
              >
                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-lg" />
                </div>
                <div className="ps-2 ps-lg-4">
                  <h3>{item.title}</h3>
                  <p className="fs-20 tx-dark m0">{item.subtitle}</p>
                </div>
              </div>
            ))}
            {/* /.card */}
          </div>
        </div>
        {/* End .col-xl-7 */}
      </div>
    </>
  );
};

export default IntroAbout;
