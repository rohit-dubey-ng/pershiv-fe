import Slider from "react-slick/lib/slider";
import image1 from "../../public/images/assets/ricardo-gomez-angel-j5gCOKZdm6I-unsplash.jpg"
import Image from "next/image";

const Gallery = () => {
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
      <div className="gellery-slider">
        <Slider {...settings}>
          <div className="item">
            <Image
              width={256}
              height={367}
              src="/images/assets/ricardo-gomez-angel-j5gCOKZdm6I-unsplash.jpg"
              alt="media"
              className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
            />
          </div>
          <div className="item">
            <Image
              width={256}
              height={367}
              src="/images/assets/ricardo-gomez-angel-j5gCOKZdm6I-unsplash.jpg"
              alt="media"
              className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
            />
          </div>
          <div className="item">
            <Image
              width={256}
              height={367}
              src="/images/assets/ricardo-gomez-angel-j5gCOKZdm6I-unsplash.jpg"
              alt="media"
              className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
            />
          </div>
          <div className="item">
            <Image
              width={256}
              height={367}
              src="/images/assets/ricardo-gomez-angel-j5gCOKZdm6I-unsplash.jpg"
              alt="media"
              className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
            />
          </div>
          <div className="item">
            <Image
              width={256}
              height={367}
              src="/images/assets/ricardo-gomez-angel-j5gCOKZdm6I-unsplash.jpg"
              alt="media"
              className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Gallery;
