import React, { Suspense, lazy, useEffect, useState } from "react";
import Wrapper from "../layout/wrapper";

const Preshiv = lazy(() => delayForDemo(import("./pages-menu/preshiv")));

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  }).then(() => promise);
}

const MainRoot = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  });
  return (
    <>
      {loader ? (
        <div className="loader">
          <div className="loaderBox">
            <div className="loaderArrow">
              <img src="/images/assets/loader-arrow.png" />
            </div>
            <div className="loaderlogo">
              <img src="/images/assets/loader-logo.png" />
            </div>
          </div>
        </div>
      ) : (
        <Wrapper>
          <Preshiv />
        </Wrapper>
      )}
    </>
  );
};

export default MainRoot;
