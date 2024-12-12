'use client'

import { useEffect, useState } from "react";
import Breadcrumb from "../common/Breadcrumb";
import CarsSection from "../common/CarsSection";
import ApiService from "@/services/apiservice";
import CarCard from "../common/CarCard";
import { TbClearAll } from "react-icons/tb";

const CurrentStockPage = () => {
  const [selectedType, setSelectedType] = useState('0');
  const [selectedBrand, setSelectedBrand] = useState('0');
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sort, setSort] = useState('0');
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await ApiService('fields/current_stock/brand');
        setBrands(response.data.meta.options.choices);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBrands();
    const fetchTypes = async () => {
      try {
        const response = await ApiService('fields/current_stock/category');
        setCategories(response.data.meta.options.choices);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTypes();
    const fetchData = async () => {
      try {
        const response = await ApiService('items/current_stock?sort[]=-date_created');
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])
  useEffect(()=>{

  },[filteredData])
  const handleTypeChange = (event) => {
    const selVal = event.target.value;
    setSelectedType(selVal)
    if (selVal !== '0')
      setFilteredData(data.filter((car) => car.category === selVal));
    else
      setFilteredData(data);
  }
  const handleBrandChange = (event) => {
    const selVal = event.target.value;
    setSelectedBrand(selVal)
    if (selVal !== '0')
      setFilteredData(data.filter((car) => car.brand === selVal));
    else
      setFilteredData(data);
  }
  const handleSort = (event) => {
    debugger;
    const selVal = event.target.value;
    setSort(selVal);
    if (selVal === "1")
      setFilteredData(filteredData.sort((a, b) => a.price - b.price));
    else if (selVal === "2")
      setFilteredData(filteredData.sort((a, b) => b.price - a.price));
    else
      setFilteredData(filteredData)
  }
  const handleFiltersClear = () => {
    setSelectedType('0');
    setSelectedBrand('0');
    setSort('0');
    setFilteredData(data);
  }
  return (
    <>
      <section className="cars-section-four v1 layout-radius">
        <div className="boxcar-container">
          <Breadcrumb page={'Cars for Sale'} />

          <form className="form-box d-none d-md-flex">
            <div className="form_boxes">
              <div className="drop-menu mb-0">
                <div className="">
                  <select className="form-select select rounded-circle border-0 shadow-none h-100" aria-label="Default select example" value={sort} onChange={handleSort}>
                    <option value={'0'}>Price</option>
                    <option value="1">Low to High</option>
                    <option value="2">High to Low</option>

                  </select>
                </div>
              </div>
            </div>
            <div className="form_boxes">
              <div className="drop-menu mb-0">
                <div className="">
                  <select className="form-select select rounded-circle border-0 shadow-none h-100" aria-label="Default select example" value={selectedType} onChange={handleTypeChange}>
                    <option value={'0'}>Type</option>
                    {categories?.map((category, index) => {
                      return (
                        <option value={category.value} key={index}>{category.text}</option>
                      )
                    })}
                    {/* <option value="1">PREMIUM SUVS</option>
                    <option value="2">MPV</option>
                    <option value="3">HATCH BACK</option>
                    <option value="4">SEDANS</option>
                    <option value="5">PREMIUM SEDANS</option> */}

                  </select>
                </div>
              </div>
            </div>
            <div className="form_boxes">
              <div className="drop-menu mb-0">
                <div className="">
                  <select className="form-select select rounded-circle border-0 shadow-none h-100" aria-label="Default select example" value={selectedBrand} onChange={handleBrandChange}>
                    <option value={'0'}>Brand</option>
                    {brands?.map((brand, index) => {
                      return (
                        <option value={brand.value} key={index}>{brand.text}</option>
                      )
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <a className="btn btn-outline-danger" onClick={handleFiltersClear}> clear All <TbClearAll /></a>
            </div>

            <div className="form_boxes d-none">
              <a href="#" title="" className="filter-btn filter-popup">
                <img src="images/icons/filter.svg" alt="" /> More Filters
              </a>
            </div>
          </form>

          <div className="text-box v1">
            {/* <div className="text">Showing 1 to 16 of 1559 vehicles</div> */}
            {/* <form>
              <div className="form_boxes v3 mb-4">
                <small>Sort by</small>
                <div className="drop-menu">
                  <div className="select">
                    <span>Any Makes</span>
                    <i className="fa fa-angle-down"></i>
                  </div>
                  <input type="hidden" name="gender" />
                  <ul className="dropdown" style={{display: 'none'}}>
                    <li>Audi</li>
                    <li>Honda</li>
                  </ul>
                </div>
              </div>
            </form> */}
          </div>
          <div className="row gy-4">
            {filteredData?.map((car) => {
              return (
                <CarCard key={car.id} car={car} carspage={true} />
              );
            })}
          </div>
          {/* <CarsSection page={'cars'} selectedBrand={selectedBrand} selectedType={selectedType} /> */}
        </div>
      </section>
    </>
  );
};

export default CurrentStockPage;
