import { Link } from "react-router";

const Ribbon: React.FC = () => {
    return (
        <div className=" bg-secondary m-0 text-dark">
            <p className="m-0 text-center">
                We'd love to hear what you think about our store. Fill out this survey and receive a <span className="text-info">20%</span> coupon on any video game purchase as a thank you from us!
                <Link to="/survey" className=" text-info fw-medium  mx-3 ">See Survey</Link>
            </p>
        </div>
    );
}

export default Ribbon;