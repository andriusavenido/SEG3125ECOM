import { Link } from "react-router";

const Navbar: React.FC = () => {
    return (
        <div className="navbar  bg-light text-info p-3 px-4 d-flex align-items-center justify-content-center row">

            <div className="col-3">
                <h1 className="m-0 fw-bold"><i className="bi bi-joystick"></i> The Gaming Corner</h1>
            </div>

            <div className="col-6 d-flex justify-content-center">
                <ul className="navbar-nav d-flex flex-row align-items-center m-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-dark fs-5 fw-medium mx-3">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/games" className="nav-link text-dark fs-5 fw-medium mx-3">VIDEO GAMES</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/consoles" className="nav-link text-dark fs-5 fw-medium mx-3">CONSOLES</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/weekly" className="nav-link text-dark fs-5 fw-medium mx-3">WEEKLY DEALS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link text-dark fs-5 fw-medium mx-3">CONTACT US</Link>
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
    );
}

export default Navbar;