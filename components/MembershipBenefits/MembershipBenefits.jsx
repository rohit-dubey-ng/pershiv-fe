import PriorityCustomerSupport from "../../public/images/assets/PriorityCustomerSupport.png";
import RewardPoints from "../../public/images/assets/RewardPoints.png";
import MediaSpotlight from "../../public/images/assets/MediaSpotlight.png";
import ExperienceFenestaInVR from "../../public/images/assets/ExperienceFenestaInVR.png";
import Image from "next/image";

const MembershipBenefits = () => {

  return (<>
    <div className="MembershipBenefits-slider">
      <div className="row">
        <div className="col-md-3">
          <div className="card card-custom">
            <div className="card-body text-left">
              <div className="card-icon mb-3">
                <Image width={60} height={60} src={PriorityCustomerSupport} alt="Media Spotlight Icon"/>
              </div>
              <h5 className="tx-dark">Media Spotlight</h5>
              <p className="card-text">Have the spotlight shine on you by sharing your creation through coverage in trade magazines and professional video shoots.</p>
              <a href="#" className="btn">Explore More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card-custom">
            <div className="card-body text-left">
              <div className="card-icon mb-3">
                <Image width={60} height={60} src={RewardPoints} alt="Priority Customer Support Icon"/>
              </div>
              <h5 className="tx-dark">Priority Customer Support</h5>
              <p className="card-text">Our representatives ensure that you are provided timely support to deliver the best customer experience.</p>
              <a href="#" className="btn">Click to all</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card-custom">
            <div className="card-body text-left">
              <div className="card-icon mb-3">
                <Image width={60} height={60} src={MediaSpotlight} alt="Experience Fenesta in VR Icon"/>
              </div>
              <h5 className="tx-dark">Experience Fenesta In VR</h5>
              <p className="card-text">Take a virtual tour of our showroom and explore our range of products.</p>
              <a href="#" className="btn">Explore More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card-custom">
            <div className="card-body text-left">
              <div className="card-icon mb-3">
                <Image width={60} height={60} src={ExperienceFenestaInVR} alt="Reward Points Icon"/>
              </div>
              <h5 className="tx-dark">Reward Points</h5>
              <p className="card-text">Reward Points that can be redeemed for exclusive gift vouchers.</p>
              <a href="#" className="btn">Members Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default MembershipBenefits;
