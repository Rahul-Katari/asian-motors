import Breadcrumb from "../common/Breadcrumb";
import Gallery from "../Gallery";

const OurShowroomPage = () => {
  return (
    <>
      <section className="contact-us-section layout-radius">
      <div className="boxcar-container">
        <Breadcrumb page={'Our Showroom'}/>
        <Gallery/>
        </div>
        </section>
    </>
  );
};

export default OurShowroomPage;
