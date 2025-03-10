import React from "react";

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Windows",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
        { label: "uPVC Windows", href: "/" },
        { label: "Aluminium Windows", href: "/pricing" },
      ],
    },

    {
      id: 1,
      title: "Doors",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
        { label: "uPVC Doors", href: "/" },
        { label: "Aluminium Doors", href: "/pricing" },
        { label: "Hybrid Material Doors", href: "/about-v1" },
        { label: "Engineered Wooden Door", href: "#" },
        { label: "Designer Doors", href: "#" },
      ],
    },
    {
      id: 2,
      title: "Discover Fenesta",
      column: "col-lg-2 col-md-4 col-sm-6 mb-30",
      items: [
        { label: "About Pershiv", href: "/service-details" },
        { label: "DCM Shriram", href: "/service-details" },
        { label: "News & Media", href: "/service-details" },
        { label: "Why Fenesta", href: "/service-details" },
        { label: "Showcase", href: "/service-details" },
      ],
    },
    {
      id: 3,
      title: "Support",
      column: "col-lg-2 col-md-4 col-sm-6 mb-30",
      items: [
        { label: "Locate Us", href: "/service-details" },
        { label: "Great Facades", href: "/service-details" },
        { label: "Request a Brochure", href: "/service-details" },
        { label: "Consult", href: "/service-details" },
        { label: "Blog", href: "/service-details" },
      ],
    },
    {
      id: 4,
      title: "Contact Us",
      column: "col-lg-2 col-md-4 col-sm-6 mb-30",
      items: [
        { label: "Call Toll Free 1800 102 9880", href: "/service-details" },
        { label: "Submit Enquiry", href: "/service-details" },
        { label: "Email Us", href: "/service-details" },
        { label: "Customer Complaint", href: "/service-details" },
        { label: "Reach the Business Head", href: "/service-details" },
      ],
    },
  ];

  const socialIcons = [
    {
      iconClass: "fab fa-facebook-f",
      link: "#",
    },
    {
      iconClass: "fab fa-twitter",
      link: "#",
    },
    {
      iconClass: "fab fa-linkedin-in",
      link: "#",
    },
  ];

  return (
    <>
      <div className="footer-style-ten theme-basic-footer zn2 position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              {links.map((link) => (
                <div className={link.column} key={link.id}>
                  <h5 className="footer-title text-white fw-500">
                    {link.title}
                  </h5>
                  <ul className="footer-nav-link style-none">
                    {link.items.map((item, i) => (
                      <li key={i}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="row add_icon">
              <div className="col-lg-6 add_datalist">
                <img
                  src="images/icon/address.svg"
                  className="card-img-top"
                  alt="Vision Image"
                />
                <address>
                  22,23,FIRST FLOOR, MANGALDAS SHOPPING CENTER, NAJIVAN
                  CIRCLE,U.M ROAD,SURAT.
                </address>
              </div>

              <div className="col-lg-6 footer_media">
                <div className="container mt-5">
                  {" "}
                  <div>
                    {" "}
                    <a
                      href="https://www.facebook.com"
                      className="btn btn-primary me-2"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>{" "}
                    <a
                      href="https://www.twitter.com"
                      className="btn btn-info me-2"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>{" "}
                    <a
                      href="https://www.instagram.com"
                      className="btn btn-danger me-2"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>{" "}
                    <a
                      href="https://www.linkedin.com"
                      className="btn btn-primary"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>{" "}
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
        {/* End .container */}
        <img
          src="/images/assets/ils_13.png"
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <img
          src="/images/assets/ils_14.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />
      </div>

      {/* <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
        <h5 className="footer-title text-white fw-500">Address</h5>
        <p className="text-white opacity-75 mb-35">
          2190 Zinai terrace, Lake view <br />
          house state, 10 no road.
        </p>
        <ul className="d-flex social-icon style-none">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i className={icon.iconClass} />
              </a>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
};

export default Footer;
