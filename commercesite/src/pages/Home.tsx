import heroGameImg from "../assets/gameimg/herogameimg.png"
import heroConsImg from "../assets/consoleimgs/consolehero.png"
import heroDealImg from "../assets/consoleimgs/consoledealhero.png"
import GameCard from "../components/GameCard";
import { Link } from "react-router";

const Home: React.FC = () => {
    return (
        <div>
            <HeroCarousel></HeroCarousel>

            <div className="container-lg">
                <div className="container mt-5">
                    <h2 className="fw-bold text-center mb-4">Over a decade of fulfilling gaming orders to local and online customers.</h2>

                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 text-center border-dark border-0 bg-secondary rounded-0">
                                <div className="card-body text-dark">
                                    <i className="bi bi-controller fs-1 text-light mb-3"></i>
                                    <h5 className="card-title">GAME RENTALS</h5>
                                    <p className="card-text">Access a wide variety of games across platforms for short or long-term physical rentals.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 text-center border-0 bg-primary rounded-0">
                                <div className="card-body text-dark">
                                    <i className="bi bi-cash-coin fs-1 text-light mb-3"></i>
                                    <h5 className="card-title ">TRADE IN</h5>
                                    <p className="card-text">Want to save on purchases? Come in store to trade in used games and consoles to recieve store credit or cash back.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 text-center border-0 bg-success rounded-0">
                                <div className="card-body text-dark">
                                    <i className="bi bi-bag-check fs-1 text-light mb-3"></i>
                                    <h5 className="card-title">GAME PURCHASES</h5>
                                    <p className="card-text">Buy the latest and classic games with fast delivery and secure checkout both in store and online.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 text-center border-0 bg-secondary rounded-0">
                                <div className="card-body text-dark">
                                    <i className="bi bi-headset fs-1 text-light mb-3"></i>
                                    <h5 className="card-title">SUPPORT</h5>
                                    <p className="card-text">Get round-the-clock support for orders, tech help, and recommendations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h2 className="fw-bold text-center">New Releases</h2>
                    <div className="row g-4">
                        <GameCard game={{
                            title: "Death Stranding 2: On the Beach",
                            img: "deathstranding2ps5.png",
                            platform: "PlayStation 5",
                            genre: ["Adventure", "Action"],
                            age_rating: "Mature (M)",
                            price: 89.99,
                            og_price: 89.99,
                            tags: ["Single-player", "Story Rich", "New Release"],
                            release_date: "2025-06-26",
                            developer: "PlayStation Studios",
                            availability: ["In Stock"]
                        }} />
                        <GameCard game={{
                            title: "Cyberpunk 2077: Ultimate Edition",
                            img: "cyberpunkswitch.png",
                            platform: "Nintendo Switch 2",
                            genre: ["Adventure", "Action", "RPG"],
                            age_rating: "Mature (M)",
                            price: 99.99,
                            og_price: 99.99,
                            tags: ["Single-player", "Story Rich", "Open World", "New Release"],
                            release_date: "2025-06-05",
                            developer: "CD Projekt Red",
                            availability: ["In Stock"]
                        }} />

                    </div>
                </div>

            </div>
        </div>
    );
}

const HeroCarousel: React.FC = () => {
    return (
        <div id="heroCarousel" className="carousel slide " data-bs-ride="carousel" data-bs-interval="5000">
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