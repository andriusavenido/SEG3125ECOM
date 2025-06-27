import heroGameImg from "../assets/gameimg/herogameimg.png"
import heroConsImg from "../assets/consoleimgs/consolehero.png"
import heroDealImg from "../assets/consoleimgs/consoledealhero.png"
import { Link } from "react-router";

const Home: React.FC = () => {
    return (
        <div>
            <HeroCarousel></HeroCarousel>


        </div>
    );
}

const HeroCarousel: React.FC = () => {
    return (
        <div id="heroCarousel" className="carousel slide mt-5" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="d-flex flex-row w-100" style={{ height: '50vh' }}>
                        <div className="w-50 h-100">
                            <img
                                src={heroDealImg}
                                alt="Deals Img"
                                className="w-100 h-100"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>

                        <div className="w-50 d-flex flex-column justify-content-center align-items-start p-4 bg-secondary">
                            <h3 className="fw-bold display-4">
                                Weekly Deals Just Dropped - Up to <span className="text-info">50% Off </span>in select items, don't miss out!
                            </h3>
                            <p>*Weekly Deals refresh every Sunday at 11:59pm EST</p>
                            <Link to="/weekly" className="btn btn-primary mt-3 rounded-pill fw-bold fs-4 shadow-lg">
                                VIEW DEALS
                            </Link>
                            
                        </div>
                    </div>
                </div>
                
                <div className="carousel-item">
                    <div className="d-flex flex-row w-100" style={{ height: '50vh' }}>
                        <div className="w-50 h-100">
                            <img
                                src={heroGameImg}
                                alt="Games Img"
                                className="w-100 h-100"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>

                        <div className="w-50 d-flex flex-column justify-content-center align-items-start p-4 bg-primary">
                            <h3 className="fw-bold display-4">
                              Extensive Video Game Catalogue.  <span className="text-light">Retro and Modern. All Genres.</span>  View our game listings now!
                            </h3>
                            <Link to="/games" className="btn btn-secondary mt-3 rounded-pill fw-bold fs-4 shadow-lg">
                                SHOP NOW
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="d-flex flex-row w-100" style={{ height: '50vh' }}>
                        <div className="w-50 h-100">
                            <img
                                src={heroConsImg}
                                alt="Games Img"
                                className="w-100 h-100"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>

                        <div className="w-50 d-flex flex-column justify-content-center align-items-start p-4 bg-success">
                            <h3 className="fw-bold display-4">
                             <span className="text-info">Yes, We Have Stock!</span> The all new Nintendo Switch 2 featuring up to 4k Docked Resolution, 7.9-in LCD Screen, and 256GB of storage.
                            </h3>
                            <Link to="/consoles" className="btn btn-light mt-3 rounded-pill fw-bold fs-4 shadow-lg">
                                SHOP NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <button
                className="carousel-control-prev custom-carousel-control"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="prev"
            >
                <span className="visually-hidden">Previous</span>
            </button>

            <button
                className="carousel-control-next custom-carousel-control"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="next"
            >
                <span className="visually-hidden">Next</span>
            </button>

        </div>
    )
}

const NewArrivals: React.FC = () => {
    return (
        <div></div>
    )
}

export default Home;