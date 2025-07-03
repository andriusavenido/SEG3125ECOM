import { useState } from "react";
import { Link } from "react-router";
const Survey: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    return (
        <div className="container-lg ">
            <div className="row">
                { !submitted && <><div className="col-12 col-md-8 bg-secondary text-dark p-3 mb-3 mb-md-0 p-3" style={{ minHeight: "400px" }}>
                    <div className="d-flex align-items-center h-100 p-3" style={{ minHeight: "300px" }}>
                        <form className="w-100" autoComplete="off">
                            <h4 className="fw-bold">We value your thoughts and opinions!</h4>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="name" placeholder="John Doe" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email (optional)</label>
                                <input type="email" className="form-control" id="email" placeholder="john@email.com" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">How would you rate your experience?</label>
                                <div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="rating" id="rating1" />
                                        <label className="form-check-label" htmlFor="rating1">1</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="rating" id="rating2" />
                                        <label className="form-check-label" htmlFor="rating2">2</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="rating" id="rating3" />
                                        <label className="form-check-label" htmlFor="rating3">3</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="rating" id="rating4" />
                                        <label className="form-check-label" htmlFor="rating4">4</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="rating" id="rating5" />
                                        <label className="form-check-label" htmlFor="rating5">5</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="feedback" className="form-label">Your Thoughts</label>
                                <textarea className="form-control" id="feedback" rows={4} placeholder="Share your thoughts or suggestions..." />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Would you recommend us?</label>
                                <div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="recommend" id="recommendYes" />
                                        <label className="form-check-label" htmlFor="recommendYes">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="recommend" id="recommendNo" />
                                        <label className="form-check-label" htmlFor="recommendNo">No</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-4 bg-info text-light py-5 px-4 d-flex flex-column '>
                    <h3 className='fw-bold fs-1'><i className="bi bi-clipboard-check" /> SURVEY</h3>
                    <button className='btn btn-light mx-2 fw-bold my-2' onClick={() =>setSubmitted(true)}>Submit Survey</button>
                </div>
                </>
                }
                 {submitted && <div className='row'>
                <div className="d-flex flex-column justify-content-center align-items-center bg-info text-light p-3 mb-3  p-3" style={{ minHeight: "200px" }}>
                  <h3 className='fw-bold fs-1'><i className="bi bi-clipboard-check" /> THANK YOU FOR SUBMITTING YOUR THOUGHTS!</h3>
                  <p>*An email with a discount code should reach your inbox soon.</p>
                    <Link to="/" className='btn btn-light mx-2 fw-bold my-1'> Go to Home Page</Link>
                   </div>
            </div>}

            </div>
        </div>
    );
}

export default Survey;