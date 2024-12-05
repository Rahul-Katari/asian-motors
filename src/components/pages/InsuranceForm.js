import arrow from '../../assets/images/icons/arrow.svg'
const InsuranceForm = () => {
    return (
        <>
            <div className="calculater-sec pt-0 ">
                <div className="right-box">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 content-column">
                            <div className="inner-column">
                                <div className="boxcar-title">
                                    <h2>Secure Your Ride with Comprehensive Car Insurance</h2>
                                    <p>Reliable Coverage Tailored to Your Needs, Offering Peace of Mind, Financial Protection, and Hassle-Free Claims Processing</p>
                                </div>
                                <form className="row">
                                    <div className="col-lg-4 mb-4">
                                        <div className="form_boxes">
                                            <label>Name</label>
                                            <input type="text" name="name" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-4">
                                        <div className="form_boxes">
                                            <label>Email</label>
                                            <input type="email" name="email" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-4">
                                        <div className="form_boxes">
                                            <label>Phone No.</label>
                                            <input type="number" name="phonenumber" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-4">
                                        <div className="form_boxes">
                                            <label>Registration</label>
                                            <input type="file" name="registration" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-4">
                                        <div className="form_boxes">
                                            <label>Prev Insurance</label>
                                            <input type="file" name="previnsurance" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="form-submit d-flex justify-content-end">
                                        <button type="submit" className="theme-btn btn-style-one hover-light">Request Quote
                                            <img
                                                src={arrow.src} alt="" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default InsuranceForm;