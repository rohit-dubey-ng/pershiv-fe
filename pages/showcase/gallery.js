import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import Image from "next/image";
import imageBox from "../../public/images/logo/p-7.png";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Footer from "../../components/footer/Footer";

const Gallery = () => {
  return (
    <>
    <DefaulHeader/>
      <div className="ShowcasePage">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="top-banner text-center">
            <h2 className="tx-dark mb-20">Gallery</h2>
            <p className="mb-5">Take a look at what we make, browse through our gallery, view Fenesta in real settings and find your inspiration. 
              You can filter your search by product type or segment type.</p>
          </div>
        </div>
        <div className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="showcase-image-tab">
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Category</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Property Type</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                      <div className="row">
                        <div className="col-lg-2">
                          <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Window</button>
                            <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Door</button>
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                              <div className="image-wrp">
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                              <div className="image-wrp">
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                      <div className="row">
                        <div className="col-lg-2">
                          <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Housing</button>
                            <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Hotels</button>
                            <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Offices</button>
                            <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Hospitals</button>
                            <button className="nav-link" id="v-pills-education-tab" data-bs-toggle="pill" data-bs-target="#v-pills-education" type="button" role="tab" aria-controls="v-pills-education" aria-selected="false">Education Institutes
                            </button>
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                              <div className="image-wrp">
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                              <div className="image-wrp">
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                              <div className="image-wrp">
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                              <div className="image-wrp">
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-education" role="tabpanel" aria-labelledby="v-pills-education-tab">
                              <div className="image-wrp">
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                                <div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div><div className="image-box">
                                  <Image width={150} height={150} src={imageBox} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Gallery;
