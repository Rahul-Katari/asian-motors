'use client'
import React, { useState, useEffect, useMemo } from "react";

const EMICalculator = () => {
  const carData = {
    BENTLEY: [
      { model: "2019 BENTLEY BENTAYGA V8", price: 29500000 },
      { model: "2020 BENTLEY CONTINENTAL GT", price: 31500000 },
    ],
    BMW: [
      { model: "2022 BMW X5", price: 7500000 },
      { model: "2023 BMW 7 SERIES", price: 15000000 },
    ],
    AUDI: [
      { model: "2022 AUDI Q8", price: 9800000 },
      { model: "2023 AUDI A8", price: 12500000 },
    ],
  };
  // const carData = response.reduce((acc, car) => {
  //   if (!acc[car.brand]) {
  //     acc[car.brand] = [];
  //   }
  //   acc[car.brand].push({ model: car.model, price: car.price });
  //   return acc;
  // }, {});

  const [selectedBrand, setSelectedBrand] = useState("BENTLEY");
  const [selectedModel, setSelectedModel] = useState(carData.BENTLEY[0].model);
  const [carPrice, setCarPrice] = useState(carData.BENTLEY[0].price);
  const [downPaymentPercent, setDownPaymentPercent] = useState(30);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenureMonths, setTenureMonths] = useState(60);

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);

  const calculateEMI = () => {
    const downPayment = (carPrice * downPaymentPercent) / 100;
    const loanAmount = carPrice - downPayment;
    const monthlyInterest = interestRate / 12 / 100;
    const emi =
      (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, tenureMonths)) /
      (Math.pow(1 + monthlyInterest, tenureMonths) - 1);
    const totalPayment = emi * tenureMonths;
    const totalInterestAmount = totalPayment - loanAmount;

    return {
      emi,
      totalPayment,
      totalInterestAmount,
      downPayment,
    };
  };

  const { emi, totalPayment, totalInterestAmount, downPayment } = useMemo(
    () => calculateEMI(),
    [carPrice, downPaymentPercent, interestRate, tenureMonths]
  );

  useEffect(() => {
    const car = carData[selectedBrand].find((c) => c.model === selectedModel);
    if (car && car.price !== carPrice) {
      setCarPrice(car.price);
    }
  }, [selectedBrand, selectedModel, carPrice]);

  useEffect(() => {
    setSelectedModel(carData[selectedBrand][0].model);
  }, [selectedBrand]);

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow">
          <div className="card-header border-bottom-0">
            <h3 className="text-center mb-0 fw-bold">EMI CALCULATOR</h3>
          </div>
          <div className="card-body">
            <div className="brand-select">
              <select
                className="form-select mb-3"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                {Object.keys(carData).map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
              <select
                className="form-select mb-3"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
              >
                {carData[selectedBrand].map((car) => (
                  <option key={car.model} value={car.model}>
                    {car.model}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-center mb-4">
              <h5 className="mt-3">{selectedModel}</h5>
              <h6 className="text-muted">{formatCurrency(carPrice)}</h6>
            </div>
            <div className="mb-4">
              <label className="form-label">Down Payment (Minimum 30%)</label>
              <input
                type="range"
                className="form-range"
                min="30"
                max="90"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <span>₹</span>
                <span>{formatCurrency(downPayment)}</span>
              </div>
            </div>
            <div className="mb-4">
              <label className="form-label">Annual Interest Rate (%)</label>
              <input
                type="range"
                className="form-range"
                min="1"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <span>%</span>
                <span>{interestRate.toFixed(1)}</span>
              </div>
            </div>
            <div className="mb-4">
              <label className="form-label">Term/Period (Months)</label>
              <input
                type="range"
                className="form-range"
                min="12"
                max="84"
                value={tenureMonths}
                onChange={(e) => setTenureMonths(Number(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <span>Months</span>
                <span>{tenureMonths}</span>
              </div>
            </div>
            <div className="result-box">
              <div className="row">
                <div className="col-md-6 d-flex flex-column align-items-center">
                  <p>Total Interest Payable:</p>
                  <h6>{formatCurrency(totalInterestAmount)}</h6>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center">
                  <p>Total Amount to Pay:</p>
                  <h6>{formatCurrency(totalPayment)}</h6>
                </div>
              </div>
              <div className="text-center mt-3">
                <h5>Monthly Payment (EMI)</h5>
                <h3>{formatCurrency(emi)}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
