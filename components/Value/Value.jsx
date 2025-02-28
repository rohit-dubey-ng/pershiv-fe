import Link from "next/link";

const services = [
  {
    iconSrc: "/images/icon/icon_104.svg",
    title: "18+ Years",
    delay: "100",
  },
  {
    iconSrc: "/images/icon/icon_105.svg",
    title: "10000+ Customers",
    delay: "200",
  },
  {
    iconSrc: "/images/icon/icon_106.svg",
    title: " 1,00,000+ Windows Installed",
    delay: "300",
  }, 
];

const Service1 = () => {
  return (
    <>
      {services.map((service, index) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={service.delay}
          key={index}
        >
          <div className="card-style-sixteen tran3s text-center position-relative mt-40">
            {/* <div className="icon">
              <img
                src={service.iconSrc}
                alt="icon"
                className="lazy-img m-auto"
              />
            </div> */}
            <h4 className="tx-dark fs-20 value-title d-flex align-items-center justify-content-center">{service.title}</h4>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service1;
