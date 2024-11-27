import icon from '../../assets/images/icons/car-collision.png'
const AdvantageCard = () => {
    return (
      <div className="advantage-block choose-us-block col-lg-3 col-md-6 col-sm-12">
        <div className="inner-box wow fadeInUp" data-wow-delay="100ms">
          <div className="icon-box">
            <img width="60" height="60" src={icon.src} alt="Icon" />
          </div>
          <div className="content-box">
            <h6 className="title">Odometer Authenticity</h6>
            <div className="text">Guaranteed accurate mileage readings.</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AdvantageCard;
  