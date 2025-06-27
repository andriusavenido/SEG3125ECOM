import { Link } from "react-router";
import { useState } from "react";

const Navbar: React.FC = () => {
    const [showGameDropdown, setShowGameDropdown] = useState(false);
    const [showConDropdown,setConDropdown] = useState(false);
    return (
        <>
            <div className="navbar  bg-light text-info p-3 px-4 d-flex align-items-center justify-content-center row">

                <div className="col-3">
                    <h1 className="m-0 fw-bold"><i className="bi bi-joystick"></i> The Gaming Corner</h1>
                </div>

                <div className="col-6 d-flex justify-content-center">
                    <ul className="navbar-nav d-flex flex-row align-items-center m-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link fs-5 fw-medium mx-3">HOME</Link>
                        </li>
                        <li
                            className="nav-item position-relative"
                            onMouseEnter={() => setShowGameDropdown(true)}
                            onMouseLeave={() => setShowGameDropdown(false)}
                        >
                            <Link to="/games" className="nav-link fs-5 fw-medium mx-3">VIDEO GAMES</Link>
                            {showGameDropdown && <GameDropDown />}
                        </li>
                        <li className="nav-item position-relative"
                            onMouseEnter={() => setConDropdown(true)}
                            onMouseLeave={() => setConDropdown(false)}>
                            <Link to="/consoles" className="nav-link fs-5 fw-medium mx-3">CONSOLES</Link>
                            {showConDropdown && <ConsoleDropDown />}
                        </li>
                        <li className="nav-item">
                            <Link to="/weekly" className="nav-link fs-5 fw-medium mx-3">WEEKLY DEALS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link fs-5 fw-medium mx-3">CONTACT US</Link>
                        </li>
                    </ul>
                </div>


                <div className="col-3 d-flex justify-content-end">
                    <Link to="/checkout" className="text-dark fs-5 fw-medium d-flex align-items-center" style={{ textDecoration: 'none' }}>
                        <i className="bi bi-cart me-2"></i>
                        <span className=" rounded-pill bg-info p-1 fs-6 text-white"  >
                            Empty
                        </span>
                    </Link>

                </div>
            </div>

        </>

    );
}

const GameDropDown: React.FC = () => {
    return (
        <div className="position-absolute top-100 start-0 bg-primary p-2"
            style={{ zIndex: 1000 }}
            onMouseLeave={(e) => {
                const parent = e.currentTarget.closest(".nav-item");
                if (parent) parent.dispatchEvent(new Event("mouseleave", { bubbles: true }));
            }}>
            <div className="d-flex">
                <ul className="navbar-nav d-flex flex-col align-items-start m-0">
                    <li className="nav-item">
                        <span className="fs-6 fw-bold mx-3 text-light">BRANDS</span>
                    </li>
                    <li className="nav-item">
                        <Link to="/games/xbox" className="nav-link nav-link-light fs-6 fw-medium mx-3">XBOX</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/games/playstation" className="nav-link nav-link-light fs-6 fw-medium mx-3">PLAYSTATION</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/games/nintendo" className="nav-link nav-link-light fs-6 fw-medium mx-3">NINTENDO</Link>
                    </li>
                </ul>
                 <ul className="navbar-nav d-flex flex-col align-items-start m-0">
                    <li className="nav-item">
                        <span className="fs-6 fw-bold mx-3 text-light">TAGS</span>
                    </li>
                    <li className="nav-item">
                        <Link to="/games/bestsellers" className="nav-link nav-link-light fs-6 fw-medium mx-3">BEST SELLERS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/games/upcoming" className="nav-link nav-link-light fs-6 fw-medium mx-3">UPCOMING</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/games/newreleases" className="nav-link nav-link-light fs-6 fw-medium mx-3">NEW RELEASES</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

const ConsoleDropDown: React.FC = () =>{
    return (
        <div className="position-absolute top-100 start-0 bg-success p-2"
            style={{ zIndex: 1000 }}
            onMouseLeave={(e) => {
                const parent = e.currentTarget.closest(".nav-item");
                if (parent) parent.dispatchEvent(new Event("mouseleave", { bubbles: true }));
            }}>
            <div className="d-flex">
                <ul className="navbar-nav d-flex flex-col align-items-start m-0">
                    <li className="nav-item">
                        <span className="fs-6 fw-bold mx-3 text-light">BRANDS</span>
                    </li>
                    <li className="nav-item">
                        <Link to="/consoles/xbox" className="nav-link nav-link-light fs-6 fw-medium mx-3">XBOX</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/consoles/playstation" className="nav-link nav-link-light fs-6 fw-medium mx-3">PLAYSTATION</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/consoles/nintendo" className="nav-link nav-link-light fs-6 fw-medium mx-3">NINTENDO</Link>
                    </li>
                </ul>
                 <ul className="navbar-nav d-flex flex-col align-items-start m-0">
                    <li className="nav-item">
                        <span className="fs-6 fw-bold mx-3 text-light">TAGS</span>
                    </li>
                    <li className="nav-item">
                        <Link to="/consoles/bestsellers" className="nav-link nav-link-light fs-6 fw-medium mx-3">BEST SELLERS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/consoles/bundles" className="nav-link nav-link-light fs-6 fw-medium mx-3">BUNDLES</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/consoles/onsale" className="nav-link nav-link-light fs-6 fw-medium mx-3">ON SALE</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;