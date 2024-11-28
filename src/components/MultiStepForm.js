'use client'
import React, { useState } from "react";

const MultiStepForm = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const steps = ["Car Details", "Car Image", "Personal Details"];
  
  const showTab = (index) => {
    return index === currentTab ? "flex" : "none";
  };

  const validateForm = () => {
    const currentStep = document.getElementsByClassName("step")[currentTab];
    const inputs = currentStep.querySelectorAll("[required]");
    let valid = true;

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        input.classList.add("is-invalid");
        valid = false;
      } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
      }
    });

    return valid;
  };

  const nextPrev = (n) => {
    if (n === 1 && !validateForm()) return;

    const newTab = currentTab + n;
    if (newTab >= steps.length) {
      // Submit the form
      document.getElementById("multiStepForm").submit();
      return;
    }

    setCurrentTab(newTab);
  };

  return (
    <div className="calculater-sec pt-0 sellyourcar">
      <div className="right-box">
        <div className="row justify-content-center">
          <div className="col-lg-7 content-column">
            <div className="inner-column">
              <div className="boxcar-title">
                <h2>Sell Your Car</h2>
                <p>Fast, Transparent, and Hassle-Free Process</p>
                <p>
                  We simplify the selling process with ownership transfers
                  completed within <span className="fw-bold">one week</span>.
                </p>
              </div>
              <form
                id="multiStepForm"
                className="row needs-validation"
                noValidate
              >
                <div className="col-12 mb-4">
                  <div className="form-header d-flex">
                    {steps.map((step, index) => (
                      <span
                        key={index}
                        className={`stepIndicator ${
                          currentTab === index
                            ? "active"
                            : currentTab > index
                            ? "finish"
                            : ""
                        }`}
                      >
                        Step {index + 1}: {step}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Step 1: Car Details */}
                <div className="step row" style={{ display: showTab(0) }}>
                  <div className="col-lg-4">
                    <label htmlFor="car-make">Car Make</label>
                    <select
                      id="car-make"
                      name="brand"
                      className="form-control bg-transparent w-100"
                      required
                    >
                      <option value="">Select Car Make</option>
                      <option value="Aston Martin">Aston Martin</option>
                      <option value="Audi">Audi</option>
                      <option value="Bentley">Bentley</option>
                    </select>
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="car-model">Car Model</label>
                    <input
                      type="text"
                      id="car-model"
                      name="model"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="mfg-year">MFG Year</label>
                    <input
                      type="text"
                      id="mfg-year"
                      name="mfg-year"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                {/* Step 2: Car Images */}
                <div className="step row" style={{ display: showTab(1) }}>
                  <div className="col-lg-6 mb-4">
                    <label htmlFor="car-img1">Car Image 1</label>
                    <input
                      type="file"
                      id="car-img1"
                      name="img1"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <label htmlFor="car-img2">Car Image 2</label>
                    <input
                      type="file"
                      id="car-img2"
                      name="img2"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                {/* Step 3: Personal Details */}
                <div className="step row" style={{ display: showTab(2) }}>
                  <div className="col-lg-4">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="form-submit col-12 d-flex justify-content-center mt-4">
                  <button
                    type="button"
                    id="prevBtn"
                    className="btn btn-secondary rounded-lg me-4"
                    onClick={() => nextPrev(-1)}
                    style={{ display: currentTab === 0 ? "none" : "inline" }}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    id="nextBtn"
                    className="btn btn-primary"
                    onClick={() => nextPrev(1)}
                  >
                    {currentTab === steps.length - 1 ? "Submit" : "Next"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
