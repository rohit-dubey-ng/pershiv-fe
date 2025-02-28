import Slider from "react-slick/lib/slider";
import image1 from "../../public/images/assets/ricardo-gomez-angel-j5gCOKZdm6I-unsplash.jpg";
import Image from "next/image";

const Life = () => {
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
                src="/images/assets/one.png"
                alt="media"
                className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
              />
            </div>
            <div className="card-content">
              <h6 className="tx-dark">
                A platform to exhibit skills and due recognition for work
              </h6>
              <p>
                Fenesta provides a platform to its employees to exhibit their
                skills and ensures that even the smallest achievements are
                recognized and appreciated!
              </p>
            </div>
          </div>
          <div className="item">
            <div className="infrastructure-image">
              <Image
                width={256}
                height={367}
                src="/images/assets/two.png"
                alt="media"
                className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
              />
            </div>
            <div className="card-content">
              <h6 className="tx-dark">
                A culture that fosters innovative thinking
              </h6>
              <p>
                Newness is one of our core values. Fenesta encourages creative
                thinking and innovative initiatives from all employees.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="infrastructure-image">
              <Image
                width={256}
                height={367}
                src="/images/assets/three.png"
                alt="media"
                className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
              />
            </div>
            <div className="card-content">
              <h6 className="tx-dark">Each Employee can "be the change"</h6>
              <p>
                Fenesta empowers every employee to “be the change” and provides
                them a platform to improve themselves and the system.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="infrastructure-image">
              <Image
                width={256}
                height={367}
                src="/images/assets/four.png"
                alt="media"
                className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
              />
            </div>
            <div className="card-content">
              <h6 className="tx-dark">Dynamic roles and responsibilities</h6>
              <p>
                Employees in Fenesta have dynamic roles and responsibilities
                which allow them to learn and grow each day and ensure their
                holistic development.
              </p>
            </div>
          </div>

          <div className="item">
            <div className="infrastructure-image">
              <Image
                width={256}
                height={367}
                src="/images/assets/five.png"
                alt="media"
                className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
              />
            </div>
            <div className="card-content">
              <h6 className="tx-dark">Personal Growth for All</h6>
              <p>
                Fenesta ensures personal growth for all its employees through a
                customized development program for each individual in the
                organization.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Life;
