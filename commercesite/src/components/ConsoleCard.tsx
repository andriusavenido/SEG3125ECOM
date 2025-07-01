import { type ConsoleProps, CartContext } from "../context/CartContext";
import { useContext } from 'react';
type ConsoleCardProps ={
    console:ConsoleProps
}

const ConsoleCard:React.FC<ConsoleCardProps> = ({console}) => {
     const consImg = new URL(`../assets/consoleimgs/${console.img}`, import.meta.url).href;

     const{addToCart} = useContext(CartContext);
    return ( 
 <div className="card p-3 border-0 mx-1 p-3 border-top border-bottom border-5 border-secondary bg-light rounded-0 " style={{ maxWidth: '320px'}}>
            <img
                src={consImg}
                alt={console.title}
                className="card-img-start "
                style={{ maxWidth: '140px', maxHeight: '140px', objectFit: 'cover' }}
            />
            <div className="card-body ">
                <h5 className="card-title fw-bold">{console.title}</h5>
                <h6 className="text-muted">{console.brand}</h6>
                <div className="d-flex align-items-center">
                    <h4 className="mb-0 text-info fw-bold me-2">${console.price.toFixed(2)}</h4>
                    {console.og_price > console.price && (
                        <span className="text-muted text-decoration-line-through">
                            ${console.og_price.toFixed(2)}
                        </span>
                    )}
                </div>
                  <div className="mb-2">
                    {console.tags.map((tag, idx) => (
                        <span key={idx} className="badge bg-success me-1">{tag}</span>
                    ))}
                </div>
                <p className="mb-0"><strong>Release:</strong> {new Date(console.release_date).toLocaleDateString()}</p>
                <strong className=''>Status:</strong> {console.availability[0]}
              
                
            </div>
            <div className="d-flex justify-content-center">
                <button className="mt-2 btn btn-primary rounded-pill fw-bold" onClick={() => addToCart(console)}>ADD TO CART</button>
            </div>
        </div>
     );
}
 
export default ConsoleCard;