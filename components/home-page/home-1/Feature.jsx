import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const Feature = () => {
  const features = [
    {
      title: <>Expertise </>,
      width: "169",
      height: "165",
      description:
        "With nearly two decades of experience in the industry, we take pride in our ability to craft top-quality windows and doors that are tailored to your specific needs. Our team’s extensive knowledge and skill ensure that every product we create meets the highest standards of excellence. ",
      icon: "fi fi-rr-user-experience",
      delay: "300",
    },

    {
      title: <>Durability </>,
      width: "169",
      height: "165",
      description:
        " At Pershiv, we believe in the power of quality materials. Our windows and doors are constructed from premium materials designed to withstand the test of time. Each product comes with a comprehensive written warranty, giving you confidence in your investment and assurance of lasting performance. ",
      icon: "fi fi-rr-link-alt",
      delay: "400",
    },

    {
      title: <>Security</>,
      width: "169",
      height: "165",
      description:
        "Your safety is our priority. Our robust designs incorporate advanced security features, ensuring that your home is well-protected against intrusions. With Pershiv, you can enjoy peace of mind knowing that your family and belongings are secure. ",
      icon: "fi fi-rr-shield-check",
      delay: "500",
    },
    {
      title: <>Style</>,
      width: "169",
      height: "165",
      description:
        "We understand that your home is a reflection of your personal style. That’s why our windows and doors feature sleek, contemporary designs that enhance your home’s aesthetic. With a wide variety of versatile finishes to choose from, you can easily find the perfect match for your décor.",
      icon: "fi fi-rr-shield-check",
      delay: "500",
    },
    {
      title: <>Comfort</>,
      width: "169",
      height: "165",
      description:
        " Comfort is key to a peaceful home. Our windows and doors are engineered for smooth operation, making daily use effortless. This attention to detail contributes to a tranquil atmosphere, allowing you to fully enjoy your living space.",
      icon: "fi fi-rr-loveseat",
      delay: "500",
    },
    {
      title: <>Noise Reduction</>,
      width: "169",
      height: "165",
      description:
        " In today’s busy world, a serene environment is invaluable. Our advanced sound insulation technology effectively minimizes outside noise, creating a quiet oasis within your home. Enjoy the tranquillity that comes from effective noise reduction. ",
      icon: "fi fi-rr-noise-cancelling-headphones",
      delay: "500",
    },
    {
      title: <>Low Maintenance</>,
      width: "169",
      height: "165",
      description:
        " Life is busy, and we believe in making homeownership easier. Our products are designed to be weather-resistant and require minimal upkeep. A simple occasional cleaning is all it takes to keep them looking pristine, so you can spend more time enjoying your home. ",
      icon: "fi fi-rr-holding-hand-gear",
      delay: "500",
    },
    {
      title: <>Excellence</>,
      width: "169",
      height: "165",
      description:
        "Our commitment to quality and customer satisfaction is at the heart of everything we do. From the initial consultation to the final installation, we strive for excellence in every aspect of our service. We are dedicated to ensuring your experience with us is seamless and enjoyable.",
      icon: "fi fi-rr-window-frame",
      delay: "500",
    },
  ];

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
          slidesToShow: 1,
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
      <div className="container mt-50" >
        <div className="top-banner text-center">
          <h2 className="tx-dark mb-20">Why Choose Pershiv</h2>
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        {features.map((feature, index) => (
          <div
            className="col-lg-4 col-sm-6 choose-pershiv-card"
            key={index}
          >
            <div
              className={`why-pershiv-card tran3s position-relative mt-35`}
              style={{ background: "#f0f0f0" }} // Light shade background
            >
              <div className="icon-round mb-3">
                <i
                  className={`position-absolute ${feature.icon}`}
                  style={{
                    fontSize: feature.height, // Adjust size to match dimensions
                  }}
                />
              </div>
              <h4>{feature.title}</h4>
              <p className="fs-16 fs-md-20 lh-base ">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-50">
        <Link
          href="/pages-menu/service-v1"
          className="btn-twentyTwo fw-500 tran3s"
        >
          Know More
        </Link>
      </div>
    </>
  );
};

export default Feature;
