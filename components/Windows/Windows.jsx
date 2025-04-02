import React from "react";

const WindowsList = [
  {
    title: "Minimal to Modern Frames",
    description:
      "A wide range of minimal to modern frames based on your architectural choices.",
    delay: "100",
  },
  {
    title: "Variety of Colour Options",
    description:
      "Variety of colour options matching your personality and home aesthetics.",
    delay: "200",
  },
  {
    title: "Custom Size & Shapes",
    description:
      "Custom size and shapes based on your requirement, crafted as per your space.",
    delay: "300",
  },
  {
    title: "Premium Finishes",
    description: "Premium finishes like metallic or wooden to keep it classy.",
    delay: "400",
  },
  {
    title: "Designed to Perfection",
    description:
      "Designed to perfection for every room and every space, no matter how big or small.",
    delay: "500",
  },
  {
    title: "Attention to Detail",
    description:
      "Crafted with perfection with every small detail given complete attention.",
    delay: "600",
  },
];
const Windows = () => {
  return (
    <>
      <div className="design-your-windows ">
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20 mt-100">
            <h2 className="main-title fw-500 tx-dark m0">
              Design Your Windows
            </h2>
          </div>
          <div className="row">
            {WindowsList.map((feature, index) => (
              <div
                className="col-lg-4 col-sm-6"
                key={index}
              >
                <div
                  className={`tran3s position-relative mt-35 p-4 rounded h-75`}
                  style={{ background: "#f0f0f0" }} // Light shade background
                >
                  <h4 className="mb-3">{feature.title}</h4>{" "}
                  {/* Added title for each card */}
                  <p className="fs-16 fs-md-20 lh-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Windows;
