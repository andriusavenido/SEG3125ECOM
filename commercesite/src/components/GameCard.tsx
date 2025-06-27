import React from 'react';

type Game = {
    title: string;
    img: string;
    platform: string;
    genre: string[];
    age_rating: string;
    price: number;
    og_price: number;
    tags: string[];
    release_date: string;
    developer: string;
    availability: string[];
};

type GameCardProps = {
    game: Game;
};

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    const gameImg = new URL(`../assets/gameimg/${game.img}`, import.meta.url).href;

    return (
        <div className="card p-3 border-0 mx-1 p-3 bg-white rounded-0" style={{ maxWidth: '320px'}}>
            <img
                src={gameImg}
                alt={game.title}
                className="card-img-start "
                style={{ maxWidth: '140px', maxHeight: '140px', objectFit: 'cover' }}
            />
            <div className="card-body ">
                <h5 className="card-title fw-bold">{game.title}</h5>
                <h6 className="text-muted">{game.platform}, {game.developer} </h6>
                <div className="d-flex align-items-center">
                    <h4 className="mb-0 text-info fw-bold me-2">${game.price.toFixed(2)}</h4>
                    {game.og_price > game.price && (
                        <span className="text-muted text-decoration-line-through">
                            ${game.og_price.toFixed(2)}
                        </span>
                    )}
                </div>
                  <div className="mb-2">
                    {game.tags.map((tag, idx) => (
                        <span key={idx} className="badge bg-success me-1">{tag}</span>
                    ))}
                </div>
                <p className="mb-0"><strong>Genre:</strong> {game.genre.join(', ')}</p>
                <p className="mb-0"><strong>Age Rating:</strong> {game.age_rating}</p>
                <p className="mb-0"><strong>Release:</strong> {new Date(game.release_date).toLocaleDateString()}</p>
                <strong className=''>Status:</strong> {game.availability[0]}
              
                
            </div>
            <div className="d-flex justify-content-center">
                <button className="mt-2 btn btn-primary rounded-pill">Add to Cart</button>
            </div>
        </div>
    );
};

export default GameCard;
