'use client';
import { ApiService } from "@/services/apiservice";
import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiFuelTank } from "react-icons/gi";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStick } from "react-icons/gi";
import { TbAutomaticGearbox } from "react-icons/tb";

const SellYourCarForm = () => {
  const [disabled, setDisabled] = useState(false)
  const [currentTab, setCurrentTab] = useState(0); // Tracks the current step
  const [brands, setBrands] = useState([]);
  const [rtoLocations, setRtoLocations] = useState(["Hyderabad", "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"]); // Example locations
  const defaultFormData = {
    car_make: "",
    location: "",
    MFG_year: "",
    car_model: "",
    variant: "",
    transmission: "",
    ownership: "",
    kms_driven: "",
    when_to_sell: "",
    regsitration_no: "",
    name: "",
    mobilenumber: "",
    email: ""
  }
  const [formData, setFormData] = useState(defaultFormData);
  const steps = [
    "Brand",
    "Location",
    "Year",
    "Model",
    "Variant",
    "Transmission",
    "Ownership",
    "KM Driven",
    "When",
    "Details"
  ];

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await ApiService("fields/current_stock/brand");
        setBrands(response.data.meta.options.choices);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBrands();
  }, []);

  const showTab = (index) => {
    return index === currentTab ? "block" : "none";
  };

  const nextStep = () => {
    if (validateStep(currentTab)) {
      setCurrentTab(currentTab + 1);
    }
  };

  const prevStep = () => {
    setCurrentTab(currentTab - 1);
  };

  const validateStep = (step) => {
    const stepFields = Object.keys(formData).filter((key, index) => index === step);
    for (const field of stepFields) {
      if (!formData[field]) {
        alert("Please complete this step before proceeding.");
        return false;
      }
    }
    return true;
  };

  const handleOptionSelect = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (currentTab < 9)
      setCurrentTab(currentTab + 1); // Automatically move to the next step
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    try {
      setDisabled(true);
      const response = await ApiService("items/sell_your_car", "post", formData);
      if (response) {
        debugger;
        setFormData(defaultFormData)
        setCurrentTab(0);
        setDisabled(false);
      }
      else{
        alert("error submitting form");
        setDisabled(false);
      }
    } catch (error) {
      console.log(error);
      setDisabled(false);
    }
  }

  return (
    <div className="calculater-sec pt-0">
      <div className="right-box">
        <div className="row justify-content-center">
          <div className="col-lg-9 content-column">
            <div className="inner-column">
              <div className="container my-5">
                <h4 className="fw-600 text-center mb-4">Car Details</h4>
                <form id="multiStepForm" className="needs-validation" noValidate>
                  {/* Step Indicators */}
                  <div className="form-header row justify-content-center mb-4">
                    {steps.map((step, index) => (
                      <div
                        key={index}
                        className={`step-indicator col-md-1 px-0  ${currentTab === index
                          ? "active"
                          : currentTab > index
                            ? "finish"
                            : ""
                          }`}
                      >
                        {step}
                      </div>
                    ))}
                  </div>

                  {/* Step 1: Brand Selection */}
                  <div className="step" style={{ display: showTab(0) }}>
                    <h5 className="fw-600 mx-3 ">Select Brand</h5>
                    <div className="row  mx-3 flex-wrap mt-4">
                      {brands?.map((brand, index) => (
                        <div className="col-md-3 col-12 mb-4" key={index}>
                          <button
                            type="button"
                            className={`btn w-100 ${formData.car_make === brand.value ? "btn-theme-red" : "bg-2"}`}
                            onClick={() => handleOptionSelect("car_make", brand.value)}
                          >
                            {brand.text}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: RTO Location */}
                  <div className="step" style={{ display: showTab(1) }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn "
                        onClick={prevStep}
                      >
                        <FaArrowLeftLong />
                      </button>
                    </div>
                    <h5 className="fw-600 mx-3 ">Select RTO Location</h5>
                    <div className="row  mx-3 flex-wrap mt-4">
                      {rtoLocations.map((location, index) => (
                        <button
                          type="button"
                          key={index}
                          className={`col-md-2 rounded-0 btn ${formData.location === location ? "btn-theme-red" : "btn-outline-secondary"}`}
                          onClick={() => handleOptionSelect("location", location)}
                        >
                          {location}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Year */}
                  <div className="step" style={{ display: showTab(2) }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn "
                        onClick={prevStep}
                      >
                        <FaArrowLeftLong />
                      </button>
                    </div>
                    <h5 className="fw-600 mx-3 ">Select Year</h5>
                    <div className="row  mx-3 flex-wrap mt-4">
                      {Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i).map(
                        (year) => (
                          <div className="col-md-4 mb-4"
                            key={year}
                          >
                            <button
                              type="button"
                              className={`btn w-100 ${formData.MFG_year === year.toString() ? "btn-theme-red" : "bg-2"}`}
                              onClick={() => handleOptionSelect("MFG_year", year.toString())}
                            >
                              {year}
                            </button>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Step 4: Model */}
                  <div className="step" style={{ display: showTab(3) }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn "
                        onClick={prevStep}
                      >
                        <FaArrowLeftLong />
                      </button>
                    </div>
                    <h5 className="fw-600 mx-3 ">Enter Model</h5>
                    <div className="mt-4  mx-3 d-flex gap-5">
                      <div className="w-100">
                        <div className="form_boxes">
                          <label htmlFor="car-model">Car Model</label>
                          <input
                            type="text"
                            id="car-model"
                            name="model"
                            className="form-control"
                            required
                            value={formData.car_model}
                            onChange={(e) => setFormData({ ...formData, car_model: e.target.value })}
                          />
                        </div>
                        <div className="invalid-feedback">Please provide the car model.</div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-theme-red d-flex align-items-center gap-3"
                        onClick={nextStep}
                      >
                        Next
                        <FaArrowRightLong />
                      </button>
                    </div>
                  </div>

                  {/* Step 5: Variant */}
                  <div className="step" style={{ display: showTab(4) }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn "
                        onClick={prevStep}
                      >
                        <FaArrowLeftLong />
                      </button>
                    </div>
                    <h5 className="fw-600 mx-3 ">Select Variant</h5>
                    <div className="row  mx-3 flex-wrap mt-4">
                      {[{ fuel: "Petrol", icon: <BsFillFuelPumpFill className="text-info mb-1" size={25} /> }, { fuel: "Diesel", icon: <BsFillFuelPumpDieselFill className="text-warning mb-1" size={25} /> }, { fuel: "CNG", icon: <GiFuelTank className="text-success" size={30} /> }].map((variant) => (
                        <div className="col-md-4 mb-4" key={variant.fuel}>
                          <button
                            type="button"
                            className={`btn w-100 ${formData.variant === variant.fuel ? "btn-theme-red" : "bg-2"}`}
                            onClick={() => handleOptionSelect("variant", variant.fuel)}
                          >
                            <div>
                              {variant.icon}
                            </div>
                            {variant.fuel}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>


                  {/* Step 6: Transmission */}
                  <div className="step" style={{ display: showTab(5) }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn "
                        onClick={prevStep}
                      >
                        <FaArrowLeftLong />
                      </button>
                    </div>
                    <h5 className="fw-600 mx-3 ">Select Transmission</h5>
                    <div className="row  mx-3 flex-wrap mt-4">
                      {[{ type: "Manual", icon: <GiGearStick className=" mb-1" size={25} /> }, { type: "Automatic", icon: <TbAutomaticGearbox className="" size={30} /> }].map((transmission) => (
                        <div className="col-md-4 mb-4" key={transmission.type}>
                          <button
                            type="button"
                            className={`btn w-100 ${formData.transmission === transmission.type ? "btn-theme-red" : "btn-outline-secondary"}`}
                            onClick={() => handleOptionSelect("transmission", transmission.type)}
                          >
                            <div>
                              {transmission.icon}
                            </div>
                            {transmission.type}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 7: Ownership */}
                  <div className="step" style={{ display: showTab(6) }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn "
                        onClick={prevStep}
                      >
                        <FaArrowLeftLong />
                      </button>
                    </div>
                    <h5 className="fw-600 mx-3 ">Select Ownership</h5>
                    <div className="mt-4 mx-3 ">
                      {["1st owner", "2nd owner", "3rd owner", "4th owner", "Beyond 4th owner"].map((ownership) => (
                        <button
                          key={ownership}
                          type="button"
                          className={`btn d-block w-100 mb-4 ${formData.ownership === ownership ? "btn-theme-red" : "btn-outline-secondary"}`}
                          onClick={() => handleOptionSelect("ownership", ownership)}
                        >
                          {ownership}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 8: KM Driven */}
                  <div className="step" style={{ display: showTab(7) }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn "
                        onClick={prevStep}
                      >
                        <FaArrowLeftLong />
                      </button>
                    </div>
                    <h5 className="fw-600 mx-3 ">Select kilometers driven</h5>
                    <div className="mt-4 mx-3 ">
                      {["0 Km - 10,000 Km",
                        "10,000 Km - 20,000 Km",
                        "20,000 Km - 30,000 Km",
                        "30,000 Km - 40,000 Km",
                        "40,000 Km - 50,000 Km",
                        "50,000 Km - 60,000 Km",
                        "60,000 Km - 70,000 Km",
                        "70,000 Km - 80,000 Km",
                        "80,000 Km - 90,000 Km",
                        "90,000 Km - 1,00,000 Km",
                        "1,00,000 Km - 1,25,000 Km",
                        "1,25,000 Km - 1,50,000 Km",
                        "1,50,000 Km - 1,75,000 Km",
                        "1,75,000 Km - 2,00,000 Km",
                        "2,00,000 Km or more",].map((kmDriven) => (
                          <button
                            key={kmDriven}
                            type="button"
                            className={`btn d-block w-100 mb-4 ${formData.kms_driven === kmDriven ? "btn-theme-red" : "btn-outline-secondary"}`}
                            onClick={() => handleOptionSelect("kms_driven", kmDriven)}
                          >
                            {kmDriven}
                          </button>
                        ))}
                    </div>
                  </div>

                  {/* Step 9: When to Sell */}
                  <div className="step" style={{ display: showTab(8) }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn "
                        onClick={prevStep}
                      >
                        <FaArrowLeftLong />
                      </button>
                    </div>
                    <h5 className="fw-600 mx-3 ">When to Sell</h5>
                    <div className="row  mx-3 flex-wrap mt-4">
                      {["Immediately", "Within a month", "After a month", "Just checking price"].map((whenToSell) => (
                        <button
                          key={whenToSell}
                          type="button"
                          className={`btn w-100 mb-4 ${formData.when_to_sell === whenToSell ? "btn-theme-red" : "btn-outline-secondary"}`}
                          onClick={() => handleOptionSelect("when_to_sell", whenToSell)}
                        >
                          {whenToSell}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* step 10: submission  */}
                  <div className="step" style={{ display: showTab(9) }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn "
                        onClick={prevStep}
                      >
                        <FaArrowLeftLong />
                      </button>
                    </div>
                    <h5 className="fw-600 mx-3 ">Details</h5>
                    <div className="row mx-3 ">
                      <div className="col-md-4 mb-4">
                        <div className="form_boxes">

                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div className="invalid-feedback">Please provide your name.</div>
                      </div>
                      <div className="col-md-4 mb-4">
                        <div className="form_boxes">

                          <label htmlFor="mobile">Mobile</label>
                          <input
                            type="number"
                            id="mobile"
                            name="mobilenumber"
                            className="form-control"
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div className="invalid-feedback">Please provide a valid Mobile Number.</div>
                      </div>
                      <div className="col-md-4 mb-4">
                        <div className="form_boxes">

                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div className="invalid-feedback">Please provide a valid email.</div>
                      </div>
                    </div>
                    <div className="d-flex mx-3  justify-content-end">
                      <button
                        type="button"
                        className="btn btn-theme-red d-flex align-items-center gap-3"
                        onClick={handleSubmit}
                        disabled={disabled}
                      >
                        Submit
                        <FaArrowRightLong />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellYourCarForm;