
import { useEffect } from "react";
import "../styles/index.scss";
import ScrollToTop from "../components/common/ScrollTop";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {


  return (
    <div className="main-page-wrapper">
      <Component {...pageProps} />
      <ScrollToTop />
    </div>
  );
}
