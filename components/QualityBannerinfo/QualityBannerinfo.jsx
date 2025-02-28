import Image from "next/image";

const QualityBannerinfo = () => {
  return (
    <div className="QualityDetails QualityBannerinfo">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="weatherWrp">
              <Image
                width={600}
                height={400}
                src="/images/assets/weather.jpg"
                alt="media"
                className="lazy-img lg-mt-20 lg-mb-20 "
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="weatherWrp banner-info text-start mb-3">
              <p className="opacity-75 mb-15 lg-mb-20 lh-base">
                At Pershiv we believe in evolving with time and maintaining the
                superior quality we have always delivered. In today’s
                competitive world, all our efforts are directed towards getting
                our clients the best of everything, be it the quality or the
                style or even the technology that we make our windows with.
                Everything is designed to withstand time and weather, while
                maintaining the style, design and most importantly the
                durability for years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityBannerinfo;
