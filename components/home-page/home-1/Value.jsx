import Link from "next/link";
 

const services = [
  {
    // iconSrc: "/images/icon/icon_104.svg",
    title: "2000+ Direct Sales Representatives",
    delay: "100",
  },
  {
    // iconSrc: "/images/icon/icon_105.svg",
    title: "277 Channel Partner Showrooms",
    delay: "200",
  },
  {
    // iconSrc: "/images/icon/icon_106.svg",
    title: "9 Signature Studios",
    delay: "300",
  },
  {
    // iconSrc: "/images/icon/icon_107.svg",
    title: "20 Sales Offices & 8 Factories",
    delay: "100",
  },
  {
    // iconSrc: "/images/icon/icon_141.svg",
    title: "Serving in 900 Cities",
    delay: "200",
  },
  {
    // iconSrc: "/images/icon/icon_142.svg",
    title: "Part of 1889 Est. DCM Shriram group",
    delay: "300",
  },
  {
    // iconSrc: "/images/icon/icon_142.svg",
    title: "India's Largest Windows & Doors brand",
    delay: "300",
  },
];

const Service1 = () => {
  return (
    <>
      {services.map((service, index) => (
        <div
          className="col-lg-3 col-sm-6"
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
            <h4 className="tx-dark fs-20 value-title">{service.title}</h4>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service1;
