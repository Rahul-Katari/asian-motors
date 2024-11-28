import Breadcrumb from "../common/Breadcrumb";

const ContactPage = () => {
  return (
    <>
      <section className="contact-us-section layout-radius">
        <div className="boxcar-container">
          <Breadcrumb page={'Contact Us'} />

          {/* map section  */}
          <div className="map-sec">
            <div className="google-iframe">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5126382721237!2d78.42766897516495!3d17.387169083499945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974c8699442f%3A0x313ffd283ff2a494!2sASIAN%20MOTORS%20ATTAPUR!5e0!3m2!1sen!2sin!4v1731341219369!5m2!1sen!2sin"
                title="Asian Motors Location"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-100"
                height={400}
              ></iframe>
            </div>
          </div>
          {/* calculator section  */}
          <div className="calculater-sec">
            <div className="right-box">
              <div className="row">
                {/* content-column */}
                <div className="col-lg-6 content-column">
                  <div className="inner-column">
                    <div className="boxcar-title">
                      <h2>Get In Touch</h2>
                      <p>
                        Have questions or need assistance? We&apos;re here to help! Reach out
                        to us today, and our team will get back to you promptly.
                      </p>
                    </div>

                    <form className="row">
                      <div className="col-lg-6">
                        <div className="form_boxes">
                          <label htmlFor="firstName">First Name</label>
                          <input type="text" name="name" id="firstName" placeholder="" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_boxes">
                          <label htmlFor="lastName">Last Name</label>
                          <input type="text" name="last-name" id="lastName" placeholder="" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_boxes">
                          <label htmlFor="email">Email</label>
                          <input type="email" name="email" id="email" placeholder="" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_boxes">
                          <label htmlFor="phone">Phone</label>
                          <input type="number" name="number" id="phone" placeholder="" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_boxes v2">
                          <label htmlFor="comment">Comment</label>
                          <textarea
                            name="message"
                            id="comment"
                            placeholder=""
                            required
                            style={{ color: "#000", width: "100%" }}
                          ></textarea>
                        </div>
                      </div>
                      <div className="form-submit">
                        <button type="submit" className="theme-btn">
                          Send Message<img src="images/arrow.svg" alt="" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* contact-column */}
                <div className="contact-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="boxcar-title">
                      <h6 className="title">Contact Details</h6>
                      <div className="text">
                        We’re here to assist you with any queries or concerns. Reach out
                        to us using the details below, and we’ll be happy to help!
                      </div>
                    </div>

                    <div className="content-box">
                      <h6 className="title">
                        <span className="icon">
                          {/* Add your SVG code here */}
                        </span>
                        Address
                      </h6>
                      <div className="text">
                        <a href="https://g.co/kgs/4GJD7hk" target="_blank" rel="noopener noreferrer">
                          Kings Kohinoor Covention, Pillar No : 68, <br /> PV Narasimha
                          Rao Expy, Attapur, Hyderabad-06
                        </a>
                      </div>
                    </div>
                    <div className="content-box">
                      <h6 className="title">
                        <span className="icon">
                          {/* Add your SVG code here */}
                        </span>
                        Email
                      </h6>
                      <div className="text">
                        <a href="mailto:info@asianmotors.com">info@asianmotors.com</a>
                      </div>
                    </div>
                    <div className="content-box">
                      <h6 className="title">
                        <span className="icon">
                          {/* Add your SVG code here */}
                        </span>
                        Phone
                      </h6>
                      <div className="text">
                        <a href="tel:09391037686">09391037686</a>
                      </div>
                    </div>
                    <div className="social-icons">
                      <h6 className="title">Follow us</h6>
                      <ul className="social-links">
                        <li>
                          <a
                            href="https://www.facebook.com/p/asianmotors-100063777053189/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/@asianmotors2362"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa-brands fa-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/asian.motors/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ContactPage;
