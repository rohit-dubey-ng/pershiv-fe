import React from "react";
import Link from "next/link";
import Image from "next/image";
import location from "../../../public/images/icon/location.png";
import email from "../../../public/images/icon/email.png";
import phone from "../../../public/images/icon/phone.png";
import Slider from "react-slick/lib/slider";

const Property = () => {
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
          <div className="location_slider">
            <div className="slider_image">
              <Image
                src={location}
                alt="media"
                className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
              />
            </div>

            <div className="slider_content">
              <h6>Noida</h6>
              <p>2nd Floor, GIP Noida</p>
            </div>

            <div className="city_details">
              <div className="city_list">
                <div className="city_social_links">
                  <Image
                    src={email}
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                  />
                </div>

                <div className="mail_details">
                  <p>response@fenesta.com</p>
                </div>
              </div>

              <div className="city_list">
                <div className="city_social_links">
                  <Image
                    src={phone}
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                  />
                </div>

                <div className="mail_details">
                  <p>1800 102 9880</p>
                </div>
              </div>
            </div>
          </div>

          <div className="location_slider">
            <div className="slider_image">
              <Image
                src={location}
                alt="media"
                className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
              />
            </div>

            <div className="slider_content">
              <h6>Gurgaon</h6>
              <p>
                Fenesta Signature Studio. Ground floor, Plot no 82, Sector 32,
                Gurugram, Haryana 122001, India
              </p>
            </div>

            <div className="city_details">
              <div className="city_list">
                <div className="city_social_links">
                  <Image
                    src={email}
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                  />
                </div>

                <div className="mail_details">
                  <p>response@fenesta.com</p>
                </div>
              </div>

              <div className="city_list">
                <div className="city_social_links">
                  <Image
                    src={phone}
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                  />
                </div>

                <div className="mail_details">
                  <p>1800 102 9880</p>
                </div>
              </div>
            </div>
          </div>

          <div className="location_slider">
            <div className="slider_image">
              <Image
                src={location}
                alt="media"
                className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
              />
            </div>

            <div className="slider_content">
              <h6>Mumbai</h6>
              <p>
                Sea sequence Building, Final Plot No. 925, First Floor,
                Appasaheb Marathe Marg, above Volvo showroom, TPS Scheme No. IV,
                Prabhadevi, Mumbai, Maharashtra 400025
              </p>
            </div>

            <div className="city_details">
              <div className="city_list">
                <div className="city_social_links">
                  <Image
                    src={email}
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                  />
                </div>

                <div className="mail_details">
                  <p>response@fenesta.com</p>
                </div>
              </div>

              <div className="city_list">
                <div className="city_social_links">
                  <Image
                    src={phone}
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                  />
                </div>

                <div className="mail_details">
                  <p>1800 102 9880</p>
                </div>
              </div>
            </div>
          </div>

          <div className="location_slider">
            <div className="slider_image">
              <Image
                src={location}
                alt="media"
                className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
              />
            </div>

            <div className="slider_content">
              <h6>Chennai</h6>
              <p>
                9, 1st Floor, Oyster Building, Khader Nawaz Khan Road, Chennai -
                600006
              </p>
            </div>

            <div className="city_details">
              <div className="city_list">
                <div className="city_social_links">
                  <Image
                    src={email}
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                  />
                </div>

                <div className="mail_details">
                  <p>response@fenesta.com</p>
                </div>
              </div>

              <div className="city_list">
                <div className="city_social_links">
                  <Image
                    src={phone}
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                  />
                </div>

                <div className="mail_details">
                  <p>1800 102 9880</p>
                </div>
              </div>
            </div>
          </div>

          <div className="location_slider">
            <div className="slider_image">
              <Image
                src={location}
                alt="media"
                className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
              />
            </div>

            <div className="slider_content">
              <h6>Ahmedabad</h6>
              <p>
                G/4, Ground Floor, Scheme Sapat-4, S.G. Road, Opp. Karnavati
                Club, Satellite, Ahmedabad
              </p>
            </div>

            <div className="city_details">
              <div className="city_list">
                <div className="city_social_links">
                  <Image
                    src={email}
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                  />
                </div>

                <div className="mail_details">
                  <p>response@fenesta.com</p>
                </div>
              </div>

              <div className="city_list">
                <div className="city_social_links">
                  <Image
                    src={phone}
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                  />
                </div>

                <div className="mail_details">
                  <p>1800 102 9880</p>
                </div>
              </div>
            </div>
          </div>

          <div className="location_slider">
            <div className="slider_image">
              <Image
                src={location}
                alt="media"
                className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
              />
            </div>

            <div className="slider_content">
              <h6>Bengaluru</h6>
              <p>
                Citadel Plaza, 3293/A, 12th Main, H.A.L 2nd Stage, Indira Nagar,
                Banglore - 560038
              </p>
            </div>

            <div className="city_details">
              <div className="city_list">
                <div className="city_social_links">
                  <Image
                    src={email}
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                  />
                </div>

                <div className="mail_details">
                  <p>response@fenesta.com</p>
                </div>
              </div>

              <div className="city_list">
                <div className="city_social_links">
                  <Image
                    src={phone}
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                  />
                </div>

                <div className="mail_details">
                  <p>1800 102 9880</p>
                </div>
              </div>
            </div>
          </div>

          <div className="location_slider">
            <div className="slider_image">
              <Image
                src={location}
                alt="media"
                className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
              />
            </div>

            <div className="slider_content">
              <h6>Pune</h6>
              <p>
                Showroom No -3, ICC Tower, Senapati Bapat Road, Pune - 411 016
              </p>
            </div>

            <div className="city_details">
              <div className="city_list">
                <div className="city_social_links">
                  <Image
                    src={email}
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                  />
                </div>

                <div className="mail_details">
                  <p>response@fenesta.com</p>
                </div>
              </div>

              <div className="city_list">
                <div className="city_social_links">
                  <Image
                    src={phone}
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                  />
                </div>

                <div className="mail_details">
                  <p>1800 102 9880</p>
                </div>
              </div>
            </div>
          </div>

          <div className="location_slider">
            <div className="slider_image">
              <Image
                src={location}
                alt="media"
                className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
              />
            </div>

            <div className="slider_content">
              <h6>Hyderabad</h6>
              <p>
                Plot No: 56, Vamsiram Jyoti Celeste, Beside Ci gusta Restaurant,
                Kavuri Hills, Madhapur Hyderabad - 81, Telangana
              </p>
            </div>

            <div className="city_details">
              <div className="city_list">
                <div className="city_social_links">
                  <Image
                    src={email}
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                  />
                </div>

                <div className="mail_details">
                  <p>response@fenesta.com</p>
                </div>
              </div>

              <div className="city_list">
                <div className="city_social_links">
                  <Image
                    src={phone}
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20"
                  />
                </div>

                <div className="mail_details">
                  <p>1800 102 9880</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Property;
