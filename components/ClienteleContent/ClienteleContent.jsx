import Link from "next/link";
import Image from "next/image";
import imageBox from "../../public/images/logo/p-7.png";


const ClienteleContent = () => {
  return (
    <>
      <div className="ShowcasePage">
        <div className="container">
          <div className="top-banner text-center">
            <h2 className="tx-dark mb-20">Clientele</h2>
            <p className="mb-5">Fenesta is proud to have worked on some of the most challenging projects and with well known brands in India.
              Check out the impressive list of clients spread across Hotels, Hospitals, Institutes, Offices and Residential sectors.</p>
          </div>
        </div>
        <div className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="showcase-image-tab">
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Zone Wise</button>
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
                            <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">South Region</button>
                            <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">North Region</button>
                            <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">West Region</button>
                            <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">East Region</button>
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                      <div className="row">
                        <div className="col-lg-2">
                          <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">South Region</button>
                            <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">North Region</button>
                            <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">West Region</button>
                            <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">East Region</button>
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
    </>
  );
};

export default ClienteleContent;
