// import Accordion from 'react-bootstrap/Accordion';

import { Accordion, Card } from "react-bootstrap";
import { FaCheck, FaAngleDown } from "react-icons/fa6";

function SpecificationsSection() {
    return (



        <div className="faqs-section pt-0">
  <div className="inner-container">
    {/* FAQ Column */}
    <h4 className="title">Specifications</h4>
    <div className="faq-column wow fadeInUp" data-wow-delay="400ms">
      <div className="inner-column">
        <ul className="widget-accordion wow fadeInUp">
          {/* Block 1 */}
          <li className="accordion block active-block">
            <div className="acc-btn active">
              Engine and Transmission
              <FaAngleDown/>
            </div>
            <div className="acc-content current">
              <div className="content">
                <div className="row">
                  <div className="list-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-column">
                      <ul className="spects-list">
                        <li>
                          <span>Length:</span> 4950mm
                        </li>
                        <li>
                          <span>Height:</span> 1776mm
                        </li>
                        <li>
                          <span>Front Tread:</span> 1668mm
                        </li>
                        <li>
                          <span>Kerb Weight:</span> 2350kg
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="list-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-column">
                      <ul className="spects-list">
                        <li>
                          <span>Width:</span> 2140mm
                        </li>
                        <li>
                          <span>Wheel Base:</span> 2984mm
                        </li>
                        <li>
                          <span>Rear Tread:</span> 1671mm
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Block 2 */}
          <li className="accordion block">
            <div className="acc-btn">
              Dimensions & Capacity
              <FaAngleDown/>
            </div>
            <div className="acc-content">
              <div className="content">
                <div className="row">
                  <div className="list-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-column">
                      <ul className="spects-list">
                        <li>
                          <span>Length:</span> 4950mm
                        </li>
                        <li>
                          <span>Height:</span> 1776mm
                        </li>
                        <li>
                          <span>Front Tread:</span> 1668mm
                        </li>
                        <li>
                          <span>Kerb Weight:</span> 2350kg
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="list-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-column">
                      <ul className="spects-list">
                        <li>
                          <span>Width:</span> 2140mm
                        </li>
                        <li>
                          <span>Wheel Base:</span> 2984mm
                        </li>
                        <li>
                          <span>Rear Tread:</span> 1671mm
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Block 3 */}
          <li className="accordion block v2">
            <div className="acc-btn">
              Miscellaneous
              <FaAngleDown/>
            </div>
            <div className="acc-content">
              <div className="content">
                <div className="row">
                  <div className="list-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-column">
                      <ul className="spects-list">
                        <li>
                          <span>Length:</span> 4950mm
                        </li>
                        <li>
                          <span>Height:</span> 1776mm
                        </li>
                        <li>
                          <span>Front Tread:</span> 1668mm
                        </li>
                        <li>
                          <span>Kerb Weight:</span> 2350kg
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="list-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-column">
                      <ul className="spects-list">
                        <li>
                          <span>Width:</span> 2140mm
                        </li>
                        <li>
                          <span>Wheel Base:</span> 2984mm
                        </li>
                        <li>
                          <span>Rear Tread:</span> 1671mm
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>



    );
}

export default SpecificationsSection;