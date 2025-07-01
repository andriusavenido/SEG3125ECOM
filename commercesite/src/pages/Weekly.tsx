
import { useEffect, useState } from 'react';
import GameCard from "../components/GameCard";
import ConsoleCard from "../components/ConsoleCard";

const Weekly: React.FC = () => {
    return (
        <div className="container-lg">
            <div>
                <h2 className="display-5 fw-bold text-info d-inline-block border-bottom border-3 border-info">
                    WEEKLY DEALS
                </h2>
                <CountdownTimer></CountdownTimer>

            </div>

            <div className="my-5">
                <div className="row g-4 justify-content-center">
                    <GameCard game={{
                        "title": "Super Mario Odyssey",
                        "img": "marioswitch.png",
                        "platform": "Nintendo Switch",
                        "genre": ["Adventure"],
                        "age_rating": "Everyone 10+",
                        "price": 69.99,
                        "og_price": 79.99,
                        "tags": ["Single-player"],
                        "release_date": "2024-10-25",
                        "developer": "Nintendo",
                        "availability": ["In Stock"]
                    }} />
                    <GameCard game={{
                        "title": "Madden NFL 25",
                        "img": "maddenps5.png",
                        "platform": "PlayStation 5",
                        "genre": ["Sports"],
                        "age_rating": "Everyone",
                        "price": 54.99,
                        "og_price": 89.99,
                        "tags": ["Multiplayer"],
                        "release_date": "2024-06-16",
                        "developer": "WB Entertainment",
                        "availability": ["In Stock"]
                    }} />
                    <GameCard game={{
                        "title": "Hogwarts Legacy",
                        "img": "hoswitch.png",
                        "platform": "Nintendo Switch 2",
                        "genre": ["Adventure", "Action"],
                        "age_rating": "Teen (T)",
                        "price": 69.99,
                        "og_price": 79.99,
                        "tags": ["Single-player", "Story Rich", "New Release"],
                        "release_date": "2025-06-05",
                        "developer": "WB Entertainment",
                        "availability": ["In Stock"]
                    }} />
                    <GameCard game={{
                        "title": "Call of Duty: Black Ops 6",
                        "img": "codxbox.png",
                        "platform": "Xbox Series X",
                        "genre": ["Shooter", "Action"],
                        "age_rating": "Mature (M)",
                        "price": 59.99,
                        "og_price": 89.99,
                        "tags": ["Multiplayer"],
                        "release_date": "2024-10-25",
                        "developer": "Activision Blizzard",
                        "availability": ["In Stock"]
                    }} />
                    <ConsoleCard console={{
                        "title": "Xbox Series X",
                        "img": "xbox.png",
                        "brand": "Xbox",
                        "price": 599.99,
                        "og_price": 729.99,
                        "tags": ["Home Console", "1TB", "4K Support", "On Sale"],
                        "release_date": "2025-06-05",
                        "availability": ["In Stock", "Stock Limited"]
                    }} />

                </div>
            </div>
            <p>*Weekly Deals refresh every Sunday at 11:59pm EST</p>
        </div>
    );
}

const getNextSunday = () => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 (Sun) to 6 (Sat)
    const daysUntilSunday = (7 - dayOfWeek) % 7;
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + daysUntilSunday);
    nextSunday.setHours(23, 59, 0, 0); // 11:59 PM
    return nextSunday;
};

const CountdownTimer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            const target = getNextSunday();
            const diff = target.getTime() - now.getTime();

            if (diff <= 0) {
                setTimeLeft('00:00:00');
                return;
            }

            const totalSeconds = Math.floor(diff / 1000);
            const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
            const seconds = String(totalSeconds % 60).padStart(2, '0');

            setTimeLeft(`${hours}:${minutes}:${seconds}`);
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <h3 className="display-2 fw-bold text-dark">
            HURRY, SALE ENDS IN <span className='text-info'>{timeLeft}</span> HRS!
        </h3>
    );
};

export default Weekly;