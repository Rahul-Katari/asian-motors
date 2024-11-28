import Breadcrumb from "../common/Breadcrumb";
import CarsSection from "../common/CarsSection";

const CurrentStockPage = () => {
  return (
    <>
      <section className="cars-section-four v1 layout-radius">
        <div className="boxcar-container">
        <Breadcrumb page={'Cars for Sale'} />

          <form className="form-box d-none d-md-flex">
            <div className="form_boxes">
              <div className="drop-menu">
                <div className="select">
                  <span>
                    New & Used <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
                <input type="hidden" name="gender" />
                <ul className="dropdown" style={{ display: "none" }}>
                  <li>used</li>
                  <li>new</li>
                </ul>
              </div>
            </div>
            <div className="form_boxes">
              <div className="drop-menu">
                <div className="select">
                  <span>
                    Type <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
                <input type="hidden" name="gender" />
                <ul className="dropdown" style={{ display: "none" }}>
                  <li>Tufan</li>
                  <li>Tufan</li>
                </ul>
              </div>
            </div>
            <div className="form_boxes">
              <div className="drop-menu">
                <div className="select">
                  <span>
                    Make <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
                <input type="hidden" name="gender" />
                <ul className="dropdown" style={{ display: "none" }}>
                  <li>Tofan</li>
                  <li>Tofan</li>
                </ul>
              </div>
            </div>
            <div className="form_boxes">
              <div className="drop-menu">
                <div className="select">
                  <span>
                    Models <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
                <input type="hidden" name="gender" />
                <ul className="dropdown" style={{ display: "none" }}>
                  <li>2010</li>
                  <li>2012</li>
                </ul>
              </div>
            </div>
            <div className="form_boxes">
              <div className="drop-menu">
                <div className="select">
                  <span>
                    Years <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
                <input type="hidden" name="gender" />
                <ul className="dropdown" style={{ display: "none" }}>
                  <li>2010</li>
                  <li>2012</li>
                </ul>
              </div>
            </div>
            <div className="form_boxes">
              <div className="drop-menu">
                <div className="select">
                  <span>
                    Mileage <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
                <input type="hidden" name="gender" />
                <ul className="dropdown" style={{ display: "none" }}>
                  <li>2010</li>
                  <li>2012</li>
                </ul>
              </div>
            </div>
            <div className="form_boxes">
              <div className="drop-menu">
                <div className="select">
                  <span>
                    Price <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
                <input type="hidden" name="gender" />
                <ul className="dropdown" style={{ display: "none" }}>
                  <li>2010</li>
                  <li>2012</li>
                </ul>
              </div>
            </div>
            <div className="form_boxes d-none">
              <a href="#" title="" className="filter-btn filter-popup">
                <img src="images/icons/filter.svg" alt="" /> More Filters
              </a>
            </div>
          </form>

          <div className="text-box v1">
            <div className="text">Showing 1 to 16 of 1559 vehicles</div>
            <form>
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
            </form>
          </div>
          <CarsSection />
        </div>
      </section>
    </>
  );
};

export default CurrentStockPage;
