import Service from "./Service";

const Banner = () => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <li key={i}>
        <i className="fa-solid fa-star" />
      </li>
    );
  }

  const services = [
    {
      icon: "images/icon/window.svg",
      title: "By Design",
      delayAnim: 0,
    },
    {
      icon: "images/icon/series.svg",
      title: "By Series",
      delayAnim: 100,
    },

    {
      icon: "images/icon/space.svg",
      title: "By Space",
      delayAnim: 300,
    },
  ];
  return (
    <div className="top-banner text-center">
      <h2 className="tx-dark mb-20">Wide Range of Windows</h2>
      {/* <p className="text-lg tx-dark opacity-75 mb-30 lg-mb-20">
        “I couldn’t have asked for a better experience with Fenesta”
      </p> */}
      <p className="mb-5">
        A wide range of Windows for your homes and offices adding beauty and
        elegance to your space. This is something we do at Pershiv Alu Systems
        with High Quality Aluminium Windows and the Slimmest Frames, providing
        maximum daylight and expansive views enhancing the look and feel of your
        space. All this while providing security and reliable protection against
        any kind of weather conditions.
      </p>

      <div className="row justify-content-center">
        <Service services={services} />
      </div>
      {/* <div className="d-inline-flex align-items-center mt-30">
        <ul className="d-flex style-none rating">{stars}</ul>
        <div className="fs-20 ms-4">
          <strong className="fw-500 tx-dark">4.8</strong>{" "}
          <span className="tx-dark opacity-25">(30k Reviews)</span>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
