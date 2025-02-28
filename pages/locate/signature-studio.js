import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Footer from "../../components/footer/Footer";

const SignatureStudio = () => {
  return (
    <>
      <Seo pageTitle="Signature Studio" />
      <DefaulHeader />
      <div className="hero-banner-thirteen position-relative zn2 pt-190 pb-225 lg-pb-150 lg-pt-150 md-pb-80">
        <div className="container">
          <div className="text-center">
            <h2 className="tx-dark mb-20">Locate Nearest Fenesta Signature Studios</h2>
          </div>
        </div>
      </div>
      <div className="mt-100 mb-100">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="col-md-3 mb-3">
              <select className="form-control">
                <option>India</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <select className="form-control">
                <option>Select State</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <select className="form-control">
                <option>Select City</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <select className="form-control">
                <option>Select Block</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          
        </div>
      </div>
      <Footer />

    </>
  );
};

export default SignatureStudio;
