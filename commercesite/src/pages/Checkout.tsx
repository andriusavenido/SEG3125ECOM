import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";


const Checkout: React.FC = () => {
    //stages: cart review, shipping or pickup confirmation, payment confirmation, success and survey
    const stages = ["REVIEW CART", "SHIPPING OPTIONS", "PAYMENT DETAILS", "ORDER CONFIRMED"];
    const totalStages = stages.length;
    const [stage, setStage] = useState<number>(0); // 0, 1, 2 ,3 
    const { cartItems, removeFromCart, totalPrice } = useContext(CartContext);
    const progress = ((stage + 1) / totalStages) * 100;

    return (
        <div className="container-lg">
            <div className="mt-2 mb-5">
                <h2 className="display-5 fw-medium text-info d-inline-block border-bottom border-3 border-primary">
                    Checkout
                </h2>
                <div className="progress" style={{ height: "30px" }}>
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                        role="progressbar"
                        style={{ width: `${progress}%` }}
                        aria-valuenow={progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    >
                        {stages[stage]}
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                    {stages.map((label, idx) => (
                        <span key={label} className={idx === stage ? "fw-bold text-info" : "text-muted"}>
                            {label}
                        </span>
                    ))}
                </div>
            </div>

            {stage == 0 && <div className='row'>
                <div className="col-12 col-md-8 bg-secondary text-dark p-3 mb-3 mb-md-0 p-3 ">
                    <div style={{ maxHeight: '800px', overflowY: 'auto' }}>
                        <ul className="list-group">
                            {cartItems.length === 0 ? (
                                <li className="list-group-item bg-secondary text-dark border-0 my-3">
                                    Your cart is currently empty.
                                </li>
                            ) : (
                                cartItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="d-flex justify-content-between align-items-center bg-secondary text-dark border-start border-primary border-4 my-2"
                                    >
                                        <div className="mx-3">
                                            <h5 className="mb-1">{item.title}</h5>
                                            <p className="mb-1 text-info">${item.price.toFixed(2)}</p>
                                        </div>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => removeFromCart(item)}
                                        >
                                            Remove Item
                                        </button>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
                <div className='col-4 bg-info text-light py-5 px-4 d-flex flex-column justify-content-between '>
                    <h3 className='fw-bold fs-1'><i className="bi bi-cart-fill" /> REVIEW CART</h3>
                    <div>
                        <h5 className='mt-3'>Items in Cart: {cartItems.length}</h5>
                        <h5 className='mt-3'>Sales Tax (HST): ${(totalPrice * 0.13).toFixed(2)}</h5>
                        <h5 className='mt-3'>Processing Fee: ${(totalPrice * 0.01).toFixed(2)}</h5>
                        <hr />
                        <h3>Total Cost (with tax): ${totalPrice.toFixed(2)}</h3>
                    </div>
                    <button className='btn btn-light mx-2 fw-bold' onClick={() => setStage(1)}>Proceed to Shipping Options</button>
                </div>
            </div>}
            {stage == 1 && <div className='row'>
                <div className="col-12 col-md-8 bg-secondary text-dark p-3 mb-3 mb-md-0 p-3" style={{ minHeight: "400px" }}>
                    <div className="d-flex align-items-center h-100 ms-5" style={{ minHeight: "300px" }}>
                        <form className="w-100" >
                            <div className="form-check mb-3 fs-3">
                                <input className="form-check-input" type="checkbox" id="standardShipping" />
                                <label className="form-check-label" htmlFor="standardShipping">
                                    Standard Shipping (3-7 business days) — $5.99
                                </label>
                            </div>
                            <div className="form-check mb-3 fs-3">
                                <input className="form-check-input" type="checkbox" id="expressShipping" />
                                <label className="form-check-label" htmlFor="expressShipping">
                                    Express Shipping (1-2 business days) — $14.99
                                </label>
                            </div>
                            <div className="form-check mb-3 fs-3">
                                <input className="form-check-input" type="checkbox" id="pickup" />
                                <label className="form-check-label" htmlFor="pickup">
                                    In-Store Pickup (Ready in 2 hours) — Free
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-4 bg-info text-light py-5 px-4 d-flex flex-column '>
                    <h3 className='fw-bold fs-1'><i className="bi bi-truck" /> SHIPPING OPTIONS</h3>
                    <button className='btn btn-light mx-2 fw-bold my-2' onClick={() => setStage(0)}>Go back to Cart Review</button>
                    <button className='btn btn-secondary mx-2 fw-bold my-1' onClick={() => setStage(2)}>Proceed to Payment Details</button>
                </div>
            </div>}

            {stage == 2 && <div className='row'>
                <div className="col-12 col-md-8 bg-secondary text-dark p-3 mb-3 mb-md-0 p-3" style={{ minHeight: "400px" }}>
                    <div className="d-flex align-items-center h-100 p-3" style={{ minHeight: "300px" }}>
                        <form className="w-100 " autoComplete="off">
                            <h4 className=" fw-bold">Billing Address</h4>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="123 Main St" />
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" className="form-control" id="city" placeholder="City" />
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="province" className="form-label">Province</label>
                                    <input type="text" className="form-control" id="province" placeholder="Province" />
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="postal" className="form-label">Postal Code</label>
                                    <input type="text" className="form-control" id="postal" placeholder="A1A 1A1" />
                                </div>
                            </div>
                            <h4 className=" fw-bold mt-4">Credit Card Information</h4>
                            <div className="mb-3">
                                <label htmlFor="cardName" className="form-label">Name on Card</label>
                                <input type="text" className="form-control" id="cardName" placeholder="Name as shown on card" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cardNumber" className="form-label">Card Number</label>
                                <input type="text" className="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" maxLength={19} />
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="expiry" className="form-label">Expiry Date</label>
                                    <input type="text" className="form-control" id="expiry" placeholder="MM/YY" maxLength={5} />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="cvv" className="form-label">CVV</label>
                                    <input type="password" className="form-control" id="cvv" placeholder="CVV" maxLength={4} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-4 bg-info text-light py-5 px-4 d-flex flex-column '>
                    <h3 className='fw-bold fs-1'><i className="bi bi-credit-card" /> PAYMENT DETAILS</h3>
                    <button className='btn btn-light mx-2 fw-bold my-2' onClick={() => setStage(1)}>Go back to Shipping Options</button>
                    <button className='btn btn-secondary mx-2 fw-bold my-1' onClick={() => setStage(3)}>Finish Checkout</button>
                </div>
            </div>}

             {stage == 3 && <div className='row'>
                <div className="col-12  bg-secondary text-dark p-3 mb-3 mb-md-0 p-3" style={{ minHeight: "400px" }}>
                   </div>

                    <div className="col-12  bg-secondary text-dark p-3 mb-3 mb-md-0 p-3" style={{ minHeight: "400px" }}>
                   </div>

            </div>}

            
        </div>
    );
}

export default Checkout;