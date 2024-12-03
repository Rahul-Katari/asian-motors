'use client'
import React, { useEffect, useState } from 'react';
import Breadcrumb from '../common/Breadcrumb';
import inventoryImg1 from '../../assets/images/cardetails/inventory1-6.png';
import inventoryImg2 from '../../assets/images/cardetails/inventory1-7.png';
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
import ApiService from '@/services/apiservice';

const CarDetailsPage = ({ carId }) => {
  const [carDetails, setCarDetails] = useState('')
  // const [carId, setCarId] = useState(id)
  useEffect(() => {
    const fetchData = async () => {
      try {
        let queryString = "?sort=-date_created&filter[slug][_eq]=" + carId;
        let response = await ApiService('items/current_stock' + queryString);
        setCarDetails(response.data[0]);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])
  useEffect(() => {

  }, [carDetails])
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
            <li><span><img src={spec2.src} />{carDetails?.mileage} miles</span></li>
            <li><span><img src={spec3.src} />{carDetails?.transmission}</span></li>
            <li><span><img src={spec4.src} />{carDetails?.fuel_type}</span></li>
          </ul>
        </div>
        {/* <Breadcrumb page={carDetails?.name} carDetails={true} /> */}
        <div className="row">
          {/* Left Column */}
          <div className="inspection-column v2 col-xl-8 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              {/* Gallery Section */}
              <div className="gallery-sec">
                <div className="image-column wrap-gallery-box">
                  <CarImagesSlider img1={inventoryImg1} img2={inventoryImg2} />
                  {/* <div className="inner-column inventry-slider-two">
                    <div className="image-box">
                      <figure className="image">
                        <a href={inventoryImg1.src} data-fancybox="gallery">
                          <img src={inventoryImg1.src} alt="" />
                        </a>
                      </figure>
                    </div>
                    <div className="image-box">
                      <figure className="image">
                        <a href={inventoryImg2.src} data-fancybox="gallery">
                          <img src={inventoryImg2.src} alt="" />
                        </a>
                      </figure>
                    </div>
                  </div> */}
                  <div className="content-box">
                    <ul className="video-list">
                      <li>
                        <a href="https://www.youtube.com/watch?v=hCsCJqDv38E&feature=youtu.be" data-fancybox="gallery2">
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
                          {carDetails?.mileage} miles
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
                          Front Wheel Drive
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
                          {carDetails?.doors}-door
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
                        <li>
                          <span>
                            <img src={vinIcon.src} alt="VIN" />
                            VIN
                          </span>
                          ZN682AVA2P7429564
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Description Section */}
              <div className="description-sec">
                <h4 className="title">Description</h4>
                {carDetails?.description}
                <div className="text two">
                  Quisque imperdiet dignissim enim dictum finibus. Sed consectetutr convallis enim eget laoreet.
                  Aenean vitae nisl mollis, porta risus vel, dapibus lectus. Etiam ac suscipit eros, eget maximus
                </div>
                <div className="text">
                  Etiam sit amet ex pharetra, venenatis ante vehicula, gravida sapien. Fusce eleifend vulputate
                  nibh, non cursus augue placerat pellentesque. Sed venenatis risus nec felis mollis, in pharetra
                  urna euismod. Morbi aliquam ut turpis sit amet ultrices. Vestibulum mattis blandit nisl, et
                  tristique elit scelerisque nec. Fusce eleifend laoreet dui eget aliquet. Ut rutrum risus et
                  nunc pretium scelerisque.
                </div>
              </div>

              {/* Features Section */}
              <div className="features-sec">
                <h4 className="title">Features</h4>
                <div className="row">
                  {/* List Column */}
                  <div className="list-column col-lg-3 col-md-6 col-sm-12">
                    <div className="inner-column">
                      <h6 className="title">Interior</h6>
                      <ul className="feature-list">
                        <li><FaCheck size={10} /> Air Conditioner</li>
                        <li><FaCheck /> Digital Odometer</li>
                        <li><FaCheck /> Leather Seats</li>
                        <li><FaCheck /> Heater</li>
                        <li><FaCheck /> Tachometer</li>
                      </ul>
                    </div>
                  </div>
                  <div className="list-column col-lg-3 col-md-6 col-sm-12">
                    <div className="inner-column">
                      <h6 className="title">Exterior</h6>
                      <ul className="feature-list">
                        <li><FaCheck /> Fog Lights Front</li>
                        <li><FaCheck /> Rain Sensing Wipe</li>
                        <li><FaCheck /> Rear Spoiler</li>
                        <li><FaCheck /> Sun Roof</li>
                      </ul>
                    </div>
                  </div>
                  <div className="list-column col-lg-3 col-md-6 col-sm-12">
                    <div className="inner-column">
                      <h6 className="title">Safety</h6>
                      <ul className="feature-list">
                        <li><FaCheck /> Brake Assist</li>
                        <li><FaCheck /> Child Safety Locks</li>
                        <li><FaCheck /> Traction Control</li>
                        <li><FaCheck /> Power Door Locks</li>
                        <li><FaCheck /> Driver Air Bag</li>
                      </ul>
                    </div>
                  </div>
                  <div className="list-column col-lg-3 col-md-6 col-sm-12">
                    <div className="inner-column">
                      <h6 className="title">Comfort & Convenience</h6>
                      <ul className="feature-list">
                        <li><FaCheck /> Power Steering</li>
                        <li><FaCheck /> Vanity Mirror</li>
                        <li><FaCheck /> Trunk Light</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}

              <div className="faqs-section pt-0">
                <div className="inner-container">
                  <h4 className="title">Specifications</h4>
                  <div className="faq-column wow fadeInUp" data-wow-delay="400ms">
                    <div className="inner-column">
                      <SpecificationsSection />
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          {/* Sidebar */}
          <div className="side-bar-column v2 col-xl-4 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="contact-box-two">
                <span>Our Price</span>
                <h3 className="title">$45,900</h3>
                <div className="btn-box">
                  <a href="#" className="side-btn">
                    <img src={tagIcon.src} alt="Tag" /> Book Now
                  </a>
                </div>
              </div>
              <div className="contact-box">
                <div className="content-box">
                  <h6 className="title">Asian Motors</h6>
                  <div className="text">619 Francisco Blvd E, San Rafael, CA 94901</div>
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
                    <a href="#" className="side-btn two">
                      Chat Via Whatsapp
                    </a>
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
        <AsianAdvantage />
        <CarsSection />
      </div>
    </section>
  );
};

export default CarDetailsPage;
