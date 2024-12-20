'use client'
import React, { useEffect, useState } from 'react';
import videoIcon from '../../assets/images/cardetails/video1-1.svg';
import photosIcon from '../../assets/images/cardetails/video1-4.svg';
import bodyIcon from '../../assets/images/cardetails/insep1-1.svg';
import mileageIcon from '../../assets/images/cardetails/insep1-2.svg';
import fuelTypeIcon from '../../assets/images/cardetails/insep1-3.svg';
import yearIcon from '../../assets/images/cardetails/insep1-4.svg';
import transmissionIcon from '../../assets/images/cardetails/insep1-5.svg';
import driveTypeIcon from '../../assets/images/cardetails/insep1-6.svg';
import conditionIcon from '../../assets/images/cardetails/insep1-7.svg';
import engineSizeIcon from '../../assets/images/cardetails/insep1-8.svg';
import doorsIcon from '../../assets/images/cardetails/insep1-9.svg';
import cylindersIcon from '../../assets/images/cardetails/insep1-10.svg';
import colorIcon from '../../assets/images/cardetails/insep1-11.svg';
import vinIcon from '../../assets/images/cardetails/insep1-12.svg';
import tagIcon from '../../assets/images/cardetails/tag.svg';
import directionsIcon from '../../assets/images/cardetails/phone1-1.svg';
import phoneIcon from '../../assets/images/cardetails/phone1-2.svg';
import CarImagesSlider from '../common/CarImagesSlider';
import { FaCheck, FaAngleDown } from "react-icons/fa6";
import spec1 from '../../assets/images/cardetails/spec1-1.svg';
import spec2 from '../../assets/images/cardetails/spec1-2.svg';
import spec3 from '../../assets/images/cardetails/spec1-3.svg';
import spec4 from '../../assets/images/cardetails/spec1-4.svg';

import CarsSection from '../common/CarsSection';
import SpecificationsSection from '../common/SpecificationsSection';
import AsianAdvantage from '../common/AsianAdvantage';
import ModalLeadForm from '../common/ModalLeadForm';
import { ApiService } from '@/services/apiservice';

const CarDetailsPage = ({ carSlug }) => {
  const [carDetails, setCarDetails] = useState([])
  const [imgSrcs, setImgSrcs] = useState([]);
  useEffect(() => {
    const endPoint = `items/current_stock_files?fields[]=directus_files_id.id&fields[]=directus_files_id.type&fields[]=directus_files_id.title&fields[]=directus_files_id.filename_download&fields[]=id&filter[_and][0][current_stock_id]=${carDetails?.id}`;
    const FindImage = async () => {
      const response = await ApiService(endPoint);
      setImgSrcs(response?.data);
    }
    FindImage();
  }, [carDetails])
  useEffect(() => {
    const fetchData = async () => {
      try {
        let queryString = "?sort=-date_created&filter[slug][_eq]=" + carSlug;
        let response = await ApiService('items/current_stock' + queryString);
        setCarDetails(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])
  // useEffect(() => {

  // }, [carDetails])
  return (
    <section className="inventory-section pb-0 layout-radius">
      <div className="boxcar-container">
        <div className="boxcar-title boxcar-title-three">
          <ul className="breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>{carDetails?.name}</span>
            </li>
          </ul>
          <h2>{carDetails?.name}</h2>
          <div className="text">{carDetails?.short_description}</div>
          <ul className="spectes-list">
            <li><span><img src={spec1.src} />{carDetails?.year}</span></li>
            <li><span><img src={spec2.src} />{Number(carDetails?.mileage)?.toLocaleString('en-IN')} Kms</span></li>
            <li><span><img src={spec3.src} />{carDetails?.transmission}</span></li>
            <li><span><img src={spec4.src} />{carDetails?.fuel_type}</span></li>
          </ul>
        </div>
        <div className="row">
          {/* Left Column */}
          <div className="inspection-column v2 col-xl-8 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              {/* Gallery Section */}
              <div className="gallery-sec">
                <div className="image-column wrap-gallery-box">
                  <CarImagesSlider imgs={imgSrcs} />
                  <div className="content-box">
                    <ul className="video-list">
                      <li>
                        <a href="#" data-fancybox="gallery2">
                          <img src={videoIcon.src} alt="Video Icon" /> Video
                        </a>
                      </li>
                      {/* <li>
                        <a href={inventoryImg1.src} data-fancybox="gallery">
                          <img src={photosIcon.src} alt="Photos Icon" /> All Photos
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Overview Section */}
              <div className="overview-sec v2">
                <h4 className="title">Car Overview</h4>
                <div className="row">
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <ul className="list">
                        <li>
                          <span>
                            <img src={bodyIcon.src} alt="Body" />
                            Body
                          </span>
                          {carDetails?.body}
                        </li>
                        <li>
                          <span>
                            <img src={mileageIcon.src} alt="Mileage" />
                            Mileage
                          </span>
                          {Number(carDetails?.mileage).toLocaleString('en-IN')} Kms
                        </li>
                        <li>
                          <span>
                            <img src={fuelTypeIcon.src} alt="Fuel Type" />
                            Fuel Type
                          </span>
                          {carDetails?.fuel_type}
                        </li>
                        <li>
                          <span>
                            <img src={yearIcon.src} alt="Year" />
                            Year
                          </span>
                          {carDetails?.year}
                        </li>
                        <li>
                          <span>
                            <img src={transmissionIcon.src} alt="Transmission" />
                            Transmission
                          </span>
                          {carDetails?.transmission}
                        </li>
                        <li>
                          <span>
                            <img src={driveTypeIcon.src} alt="Drive Type" />
                            Drive Type
                          </span>
                          {carDetails?.drive_type}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <ul className="list">
                        <li>
                          <span>
                            <img src={conditionIcon.src} alt="Condition" />
                            Condition
                          </span>
                          {carDetails?.condition}
                        </li>
                        <li>
                          <span>
                            <img src={engineSizeIcon.src} alt="Engine Size" />
                            Engine Size
                          </span>
                          {carDetails?.engine_size}
                        </li>
                        <li>
                          <span>
                            <img src={doorsIcon.src} alt="Doors" />
                            Doors
                          </span>

                          {carDetails?.doors && carDetails?.doors + '-door'}
                        </li>
                        <li>
                          <span>
                            <img src={cylindersIcon.src} alt="Cylinders" />
                            Cylinders
                          </span>
                          {carDetails?.cylinders}
                        </li>
                        <li>
                          <span>
                            <img src={colorIcon.src} alt="Color" />
                            Color
                          </span>
                          {carDetails?.color}
                        </li>
                        {/* <li>
                          <span>
                            <img src={vinIcon.src} alt="VIN" />
                            VIN
                          </span>
                          ZN682AVA2P7429564
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Description Section */}
              <div className="description-sec">
                <h4 className="title">Description</h4>
                <div className="text two">
                  <div
                  dangerouslySetInnerHTML={{__html : carDetails?.description}}/>
                </div>
              </div>

              {/* Features Section */}
              <div className="features-sec">
                <h4 className="title">Features</h4>
                {carDetails &&
                  <div className="row">
                    {/* List Column */}
                    <div className="list-column col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-column">
                        <h6 className="title">Interior</h6>
                        <ul className="feature-list">
                          {
                            carDetails?.interior?.map((int, index) => (
                              <li key={index}><FaCheck /> {int?.name}</li>

                            ))
                          }
                        </ul>
                      </div>
                    </div>
                    <div className="list-column col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-column">
                        <h6 className="title">Exterior</h6>
                        <ul className="feature-list">
                          {
                            carDetails?.exterior?.map((ext, index) => (
                              <li key={index}><FaCheck /> {ext?.name}</li>

                            ))
                          }
                        </ul>
                      </div>
                    </div>
                    <div className="list-column col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-column">
                        <h6 className="title">Safety</h6>
                        <ul className="feature-list">
                          {
                            carDetails?.safety?.map((safe, index) => (
                              <li key={index}><FaCheck /> {safe?.name}</li>

                            ))
                          }
                        </ul>
                      </div>
                    </div>
                    <div className="list-column col-lg-3 col-md-6 col-sm-12">
                      <div className="inner-column">
                        <h6 className="title">Comfort & Convenience</h6>
                        <ul className="feature-list">
                          {
                            carDetails?.comfort_and_convenience?.map((cc, index) => (
                              <li key={index}><FaCheck /> {cc?.name}</li>

                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                }
              </div>

              {/* FAQ Section */}
{/* 
              <div className="faqs-section pt-0">
                <div className="inner-container">
                  <div className="faq-column wow fadeInUp" data-wow-delay="400ms">
                    <div className="inner-column">
                      <SpecificationsSection />
                    </div>
                  </div>
                </div>
              </div> */}


            </div>
          </div>
          {/* Sidebar */}
          <div className="side-bar-column v2 col-xl-4 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="contact-box-two">
                <span>Our Price</span>
                <h3 className="title">
                  {carDetails?.price && '₹ '+ Number(carDetails?.price)?.toLocaleString('en-IN')}</h3>
                <div className="btn-box">
                  <ModalLeadForm bookNow={true} carDetails={carDetails} detail={true} />
                </div>
              </div>
              <div className="contact-box">
                <div className="content-box">
                  <h6 className="title">Asian Motors</h6>
                  <div className="text">
                    <a
                      href="https://maps.app.goo.gl/8ZEFE99xFtatNFPU9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kings Kohinoor Covention, Pillar No : 68,
                      PV Narasimha Rao Expy, Attapur, Hyderabad-06
                    </a>
                  </div>
                  <ul className="contact-list">
                    <li>
                      <a
                        href="https://maps.app.goo.gl/8ZEFE99xFtatNFPU9"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="image-box">
                          <img src={directionsIcon.src} alt="Directions Icon" />
                        </div>
                        Get Directions
                      </a>
                    </li>
                    <li>
                      <a href="tel:9391017686">
                        <div className="image-box">
                          <img src={phoneIcon.src} alt="Phone Icon" />
                        </div>
                        9391017686
                      </a>
                    </li>
                  </ul>
                  <div className="btn-box">
                    {/* <a href="#" className="side-btn two">
                      Chat Via Whatsapp
                    </a> */}
                    {/* {console.log(carDetails)} */}
                    {/* <ModalLeadForm carDetails={carDetails} detail={true}/> */}
                  </div>
                  {/* <ul className="social-links">
                    <li>
                      <a href="#">
                        <img src={facebookIcon.src} alt="Facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={instagramIcon.src} alt="Instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={twitterIcon.src} alt="Twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={linkedinIcon.src} alt="LinkedIn" />
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <AsianAdvantage topgap={true} />
        {console.log(carDetails?.id)}
        <CarsSection repeatCarId={carDetails?.id} />
      </div>
    </section>
  );
};

export default CarDetailsPage;
