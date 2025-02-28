import Image from "next/image";

import bannerinfo from "../../public/images/assets/aboratories.jpg";

const BannerInfo = () => {
  return (
    <div className="banner-sec position-relative mt-100">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"         >
            <div className="banner-infoimage">
              <Image
                width={600}
                height={400}
                src="/images/assets/weather.jpg"
                alt="media"
                
              />
            </div>

          </div>

          <div
            className="col-xl-6 m-auto overlay"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <div className="banner-info text-start mb-3">
              <p className="opacity-75 mb-15 lg-mb-20">Your home reflects your personality, and even the minute details matter. Windows play a major part of those details too, which is why at Pershiv we make sure that your windows provide you with more than just light and ventilation. We design windows that seamlessly blend with the interior aesthetics of your home, enhancing the overall look and appeal.
                We make this all possible by providing a wide range of designs, finishes and colours, matching your unique style. A sleek modern look, Classic and Timeless, or something Bold and Visually striking, we can customise it for you.</p>
                <p className="opacity-75 mb-30 lg-mb-20">We make this all possible by providing a wide range of designs, finishes and colours, matching your unique style. A sleek modern look, Classic and Timeless, or something Bold and Visually striking, we can customise it for you.</p>
            </div>
            {/* <div className="text-start">
              <ul>
                <li><a href="#">A wide range of minimal to modern frames based on your architectural choices</a></li>
                <li><a href="#">Variety of colour options matching your personality and home aesthetics.</a></li>
                <li><a href="#">Custom size and shapes based on your requirement, crafted as per your space.</a></li>
                <li><a href="#">Premium finishes like metallic or wooden to keep it classy.</a></li>
                <li><a href="#">Designed to perfection for every room and every space, no matter how big or small.</a></li>
                <li><a href="#">Crafted with perfection with every small detail given complete attention.</a></li>
              </ul>
            </div> */}
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default BannerInfo;
