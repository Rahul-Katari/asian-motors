'use client'

import { useEffect, useState } from "react";
import Breadcrumb from "../common/Breadcrumb";
import CarsSection from "../common/CarsSection";
import CarCard from "../common/CarCard";
import CarCardSkeleton from "../common/CarCardSkeleton";
import { TbClearAll } from "react-icons/tb";
import { ApiService } from "@/services/apiservice";

const CurrentStockPage = () => {
  const [selectedType, setSelectedType] = useState('0');
  const [selectedBrand, setSelectedBrand] = useState('0');
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sort, setSort] = useState('0');
  const [loading, setLoading] = useState(true);
  const [imageCache, setImageCache] = useState({});  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch all data in parallel for better performance
        const [brandsResponse, categoriesResponse, dataResponse] = await Promise.all([
          ApiService('fields/current_stock/brand'),
          ApiService('fields/current_stock/category'),
          ApiService('items/current_stock?sort[]=-date_created')
        ]);        setBrands(brandsResponse.data.meta.options.choices);
        setCategories(categoriesResponse.data.meta.options.choices);
        setData(dataResponse.data);
        setFilteredData(dataResponse.data);        // Preload car images for better performance
        const preloadImages = async () => {
          const imagePromises = dataResponse.data.map(async (car) => {
            try {
              const endPoint = `items/current_stock_files?fields[]=directus_files_id.id&filter[_and][0][current_stock_id]=${car.id}`;
              const response = await ApiService(endPoint);
              if (response?.data && response.data.length > 0) {
                return { [car.id]: response.data[0]?.directus_files_id.id };
              }
              return { [car.id]: null };
            } catch (error) {
              return { [car.id]: null };
            }
          });

          const imageResults = await Promise.all(imagePromises);
          const imageMap = imageResults.reduce((acc, curr) => ({ ...acc, ...curr }), {});
          setImageCache(imageMap);
        };

        preloadImages();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();  }, [])
  
  const handleTypeChange = (event) => {
    const selVal = event.target.value;
    setSelectedType(selVal);
    setLoading(true);
    
    setTimeout(() => {
      if (selVal !== '0')
        setFilteredData(data.filter((car) => car.category === selVal));
      else
        setFilteredData(data);
      setLoading(false);
    }, 100);
  }
  
  const handleBrandChange = (event) => {
    const selVal = event.target.value;
    setSelectedBrand(selVal);
    setLoading(true);
    
    setTimeout(() => {
      if (selVal !== '0')
        setFilteredData(data.filter((car) => car.brand === selVal));
      else
        setFilteredData(data);
      setLoading(false);
    }, 100);
  }
  
  const handleSort = (event) => {
    const selVal = event.target.value;
    setSort(selVal);
    setLoading(true);
    
    setTimeout(() => {
      let sortedData = [...filteredData];
      if (selVal === "1")
        sortedData = sortedData.sort((a, b) => a.price - b.price);
      else if (selVal === "2")
        sortedData = sortedData.sort((a, b) => b.price - a.price);
      
      setFilteredData(sortedData);
      setLoading(false);
    }, 100);
  }
  
  const handleFiltersClear = () => {
    setSelectedType('0');
    setSelectedBrand('0');
    setSort('0');
    setLoading(true);
    
    setTimeout(() => {
      setFilteredData(data);
      setLoading(false);
    }, 100);
  }
  return (
    <>
      <section className="cars-section-four v1 layout-radius">
        <h1 className="d-none">Buy Preowned Cars in Hyderabad – Current Stock</h1>
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
            </div>            <div className="form_boxes d-none">
              <a href="#" title="" className="filter-btn filter-popup">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 7H19.5L18 19H6L4.5 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 7L6 5H18L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> More Filters
              </a>
            </div>
          </form>          <div className="text-box v1">
          </div><div className="row gy-4">
            {loading ? (
              // Show skeleton loaders while loading
              Array.from({ length: 8 }).map((_, index) => (
                <CarCardSkeleton key={index} carspage={true} />
              ))
            ) : (              // Show actual car cards when loaded
              filteredData?.map((car) => {
                return (
                  <CarCard key={car.id} car={car} carspage={true} imageCache={imageCache} />
                );
              })
            )}
          </div>
          {/* <CarsSection page={'cars'} selectedBrand={selectedBrand} selectedType={selectedType} /> */}
        </div>
      </section>
    </>
  );
};

export default CurrentStockPage;
