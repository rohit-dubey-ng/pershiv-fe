import Slider from "react-slick/lib/slider";
import image1 from "../../public/images/assets/ricardo-gomez-angel-j5gCOKZdm6I-unsplash.jpg"
import Image from "next/image";

const Infrastructure = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="infrastructure-slider">
        <Slider {...settings}>
          <div className="item">
           <div className="infrastructure-image">
             <Image
              width={256}
              height={367}
              src="/images/assets/infrastructure-1.jpg"
              alt="media"
              className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
            />
           </div>
            <div className="card-content">
              <h6 className="tx-dark">9 SIGNATURE STUDIOS</h6>
              <p>A first of its kind in the country, these studios are designed to help consumers experience the product before purchase. Visit your nearest studio.</p>
            </div>
          </div>
          <div className="item">
           <div className="infrastructure-image">
             <Image
              width={256}
              height={367}
              src="/images/assets/infrastructure-2.jpg"
              alt="media"
              className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
            />
           </div>
            <div className="card-content">
              <h6 className="tx-dark">8 STATE-OF-THE-ART FACTORIES</h6>
              <p>The fabrication units at Bhiwadi, Chennai, Bhubaneswar and Hyderabad and extrusion plant at Kota meet the highest international standards of quality and productivity.</p>
            </div>
          </div>
          <div className="item">
           <div className="infrastructure-image">
             <Image
              width={256}
              height={367}
              src="/images/assets/infrastructure-3.jpg"
              alt="media"
              className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
            />
           </div>
            <div className="card-content">
              <h6 className="tx-dark">8 STATE-OF-THE-ART FACTORIES</h6>
              <p>The fabrication units at Bhiwadi, Chennai, Bhubaneswar and Hyderabad and extrusion plant at Kota meet the highest international standards of quality and productivity.</p>
            </div>
          </div>
          <div className="item">
           <div className="infrastructure-image">
             <Image
              width={256}
              height={367}
              src="/images/assets/infrastructure-4.jpg"
              alt="media"
              className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
            />
           </div>
            <div className="card-content">
              <h6 className="tx-dark">8 STATE-OF-THE-ART FACTORIES</h6>
              <p>The fabrication units at Bhiwadi, Chennai, Bhubaneswar and Hyderabad and extrusion plant at Kota meet the highest international standards of quality and productivity.</p>
            </div>
          </div>
          <div className="item">
           <div className="infrastructure-image">
             <Image
              width={256}
              height={367}
              src="/images/assets/infrastructure-5.jpg"
              alt="media"
              className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
            />
           </div>
            <div className="card-content">
              <h6 className="tx-dark">8 STATE-OF-THE-ART FACTORIES</h6>
              <p>The fabrication units at Bhiwadi, Chennai, Bhubaneswar and Hyderabad and extrusion plant at Kota meet the highest international standards of quality and productivity.</p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Infrastructure;
