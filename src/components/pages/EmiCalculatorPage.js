import Breadcrumb from "../common/Breadcrumb";
import EMICalculator from "../EMICalculator";

const EmiCalculatorPage = () => {
  return (
    <>
      <section className="contact-us-section layout-radius">
        <div className="boxcar-container">
          <Breadcrumb page={'EMI Calculator'}/>
          <EMICalculator/>
        </div>
      </section>
    </>
  );
};

export default EmiCalculatorPage;
