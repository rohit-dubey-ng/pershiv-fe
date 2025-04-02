import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import ACEGallery from "../../components/ACEGallery/ACEGallery";
import MembershipBenefits from "../../components/MembershipBenefits/MembershipBenefits";
import ContactForm from "../../components/home-page/home-1/ContactForm";
import aceClubWelcome from "../../public/images/assets/ace-club-welcome.webp"
import Image from "next/image";

const FenestaAceClub = () => {
  return (
    <>
      <Seo pageTitle="Fenesta Ace Club" />
      <DefaulHeader />

      <div className="hero-banner-thirteen position-relative zn2 pt-190 pb-225 lg-pb-150 lg-pt-150 md-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 m-auto">
              <div className="text-wrapper">
                <h1 className="hero-heading fw-500 tx-dark text-center">
                  Fenesta Ace Club

                </h1>

              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_159.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div>
      <div className="lg-mt-100 position-relative  pb-70 lg-mt-120 lg-pt-70 lg-pb-50 bg-black pt-70">
        <div className="container">
          <div className="top-banner text-center mb-20">
            <h2 className="text-white mb-20">Welcome to the Fenesta Ace Club</h2>
          </div>
           <p className="text-white mb-50">Experience the remarkable partnership that seamlessly blends Fenesta's unparalleled expertise in Window Excellence with the imaginative genius of Architects</p>
           <Image src={aceClubWelcome} alt="aceClubWelcome" />
        </div>
      </div>
      <div className="mt-140 lg-mt-100 position-relative  pb-70 lg-mt-120 lg-pt-70 lg-pb-50">
        <div className="container">
          <div className="top-banner text-center mb-50">
            <h2 className="tx-dark mb-20">ACE Gallery</h2>
          </div>
          <ACEGallery />
        </div>
      </div>
      <div className="mt-140 lg-mt-100 position-relative  pb-70 lg-mt-120 lg-pt-70 lg-pb-50">
        <div className="container">
          <div className="top-banner text-center mb-50">
            <h2 className="tx-dark mb-20">Membership Benefits</h2>
          </div>
          <MembershipBenefits />
        </div>
      </div>
      <div className="mt-140 lg-mt-100 position-relative  pb-70 lg-mt-120 lg-pt-70 lg-pb-50">
        <div className="container">
          <div className="top-banner text-center mb-50">
            <h2 className="tx-dark mb-20">Get in Touch</h2>
          </div>
          <div className="container">
            <div className="bg-wrapper zn2 bg-white position-relative">
              <div className="row">
                <div className="col-xl-11 m-auto">
                  <div className="row align-items-center">
                    <div className="col-lg-6 ms-auto order-lg-last">
                      <div className="text-wrapper">
                        <img
                          src="/images/icon/icon_114.svg"
                          alt="icon"
                          className="lazy-img mb-30"
                        />
                        <div className="title-style-one">
                          <h2 className="main-title fw-500 tx-dark m0">
                            Let’s talk with expereince advisors.
                          </h2>
                        </div>
                        <p className="fs-20 tx-dark pt-20 m0">
                          eiusmod tempor incididunt. Ut enim mim veniam, quis
                          nostrud elit lorem dolor.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 order-lg-first">
                      <div className="form-style-two md-mb-40">
                        <ContactForm />
                      </div>
                      {/* /.form-style-two */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
};

export default FenestaAceClub;
