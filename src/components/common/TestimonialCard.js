import icon from '../../assets/images/icons/comas.png'
import author from '../../assets/images/test-auther-1.jpg'

const TestimonialCard = () => {
    return (
      <div className="testimonial-block-four col-lg-4 col-md-6 col-sm-12">
        <div className="inner-box wow fadeInUp">
          <figure className="icon">
            <a href="#">
              <img src={icon.src} alt="Testimonial Icon" />
            </a>
          </figure>
          <h6 className="title">Great Work</h6>
          <div className="text">
            “Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”
          </div>
          <div className="auther-info">
            <figure className="image">
              <a href="#">
                <img src={author.src} alt="Leslie Alexander" />
              </a>
            </figure>
            <h6 className="name">Leslie Alexander</h6>
            <span>Nintendo</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialCard;
  