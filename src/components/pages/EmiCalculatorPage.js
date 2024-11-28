import EmiCalculator from "@/app/EmiCalculator/page";
import AsianAdvantage from "../common/AsianAdvantage";
import BlogsSection from "../common/BlogsSection";
import Breadcrumb from "../common/Breadcrumb";
import CarsSection from "../common/CarsSection";
import TestimonialSection from "../common/TestimonialSection";
import WhyChooseUs from "../common/WhyChooseUs";

const EmiCalculatorPage = () => {
  return (
    <>
      <section className="contact-us-section layout-radius">
        <div className="boxcar-container">
          <Breadcrumb page={'EMI Calculator'}/>
          {/* <EmiCalculator/> */}
        </div>
      </section>
    </>
  );
};

export default EmiCalculatorPage;
