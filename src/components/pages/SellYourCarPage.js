import AsianAdvantage from "../common/AsianAdvantage";
import BlogsSection from "../common/BlogsSection";
import Breadcrumb from "../common/Breadcrumb";
import CarsSection from "../common/CarsSection";
import TestimonialSection from "../common/TestimonialSection";
import WhyChooseUs from "../common/WhyChooseUs";
import MultiStepForm from "../MultiStepForm";

const SellYourCarPage = () => {
  return (
    <>
      <section class="contact-us-section layout-radius">
        <div class="boxcar-container">
          <Breadcrumb page={'Sell Your Car'} />
          <MultiStepForm/>
        </div>
      </section>
      <AsianAdvantage />
      <CarsSection />
      <WhyChooseUs />
      <BlogsSection />
    </>
  );
};

export default SellYourCarPage;
