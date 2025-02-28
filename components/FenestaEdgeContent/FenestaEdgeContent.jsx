import Image from "next/image";

const FenestaEdgeContent = () => {
  return (
    <div className="FenestaEdgeDetails mt-50">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="EdgeWrp">
              <h4>Attention to every Detail</h4>

               <p>From consultation to installation, we take the time to understand every need and requirement of our client and based on that, suggest to them what will work for them. This serves our purpose and helps us be more precise and deliver quality.
               </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="weatherWrp">
              <Image
                width={500}
                height={300}
                src="/images/assets/window (1).jpg"
                alt="media"
                className="lazy-img lg-mt-20 lg-mb-20 "
              />
            </div>
          </div>
        </div>

        <div className="row mt-70 align-items-center">
          <div className="col-lg-6">
            <div className="weatherWrp">
              <Image
                width={500}
                height={300}
                src="/images/assets/home.jpg"
                alt="media"
                className="lazy-img lg-mt-20 lg-mb-20 "
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="EdgeWrp">
              <h4>Simple Hassle free Process
              </h4>

              <p>
              The entire process of choosing the design to installing the windows, our team is there to make it smooth and hassle free for you. We understand how important your routine is to you and we make sure we do not disrupt that for you.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-70 align-items-center">
          <div className="col-lg-6">
            <div className="EdgeWrp">
              <h4>Experienced and a Skilled Team
              </h4>

              <p>
              Our team of trained employees have an experience of 18 years in the industry with unmatched skills. They are updated with the latest technology and design styles to make your journey less troublesome when it comes to the finishing and quality of work
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="weatherWrp">
              <Image
                width={500}
                height={300}
                src="/images/assets/service.jpg"
                alt="media"
                className="lazy-img lg-mt-20 lg-mb-20 "
              />
            </div>
          </div>
        </div>

        <div className="row mt-70 align-items-center">
          <div className="col-lg-6">
            <div className="weatherWrp">
              <Image
                width={500}
                height={300}
                src="/images/assets/customer.jpg"
                alt="media"
                className="lazy-img lg-mt-20 lg-mb-20 "
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="EdgeWrp">
              <h4>After Sale Support </h4>

              <p>
              We believe in building long term relations with our clients, and to do that we need to make sure that our clients do not face any issues even after we have installed the windows. Because that is not where our job ends. We make sure our clients do not have to worry about any after sale services. We are just a call away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FenestaEdgeContent;
