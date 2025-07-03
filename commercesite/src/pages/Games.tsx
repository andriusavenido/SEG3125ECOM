import React, { useEffect, useState } from "react";
import type { GameProps } from "../context/CartContext";
import gameItems from "../assets/data/games.json";
import GameCard from "../components/GameCard";
import FilterColumn from "../components/FilterColumn";

import { useParams } from "react-router";

const Games: React.FC = () => {
    const { category: param } = useParams<{ category?: string }>(); //grab my parameterz

    const [filters, setFilters] = useState({
        platform: [] as string[],
        genre: [] as string[],
        age_rating: [] as string[],
        price: [] as string[],
        tags: [] as string[],
        availability: [] as string[],
    });

    const [searchTerm, setSearchTerm] = useState("");

    const [resultNum, setResultNum] = useState(0);

    const [activeFilters, setActiveFilters] = useState<String[]>([]);

    const handleFilterChange = (category: string, value: string) => {
        setFilters((prev) => {
            const current = prev[category as keyof typeof filters] || [];
            return {
                ...prev,
                [category]: current.includes(value)
                    ? current.filter((v: string) => v !== value)
                    : [...current, value],
            };
        });
    };

    const priceInRange = (price: number) => {
        if (filters.price.length === 0) return true;
        return filters.price.some((range) => {
            if (range === "Under $20") return price < 20;
            if (range === "$20 - $40") return price >= 20 && price <= 40;
            if (range === "$40 - $60") return price > 40 && price <= 60;
            if (range === "$60+") return price > 60;
            return false;
        });
    };

    const filterGames = (game: GameProps) => {
        const matches = (category: keyof typeof filters, value: string | string[]) => {
            const selected = filters[category];
            if (selected.length === 0) return true;

            // Handle array vs string comparisons
            if (Array.isArray(value)) {
                return value.some((v) => selected.includes(v));
            }
            return selected.some((filterVal) =>
                typeof value === "string"
                    ? value.toLowerCase().includes(filterVal.toLowerCase())
                    : false)
        };

        const matchesSearch = searchTerm.trim() === "" || game.title.toLowerCase().includes(searchTerm.toLowerCase());
        return (
            matches("platform", game.platform) &&
            matches("genre", game.genre) &&
            matches("age_rating", game.age_rating) &&
            matches("tags", game.tags) &&
            matches("availability", game.availability) &&
            priceInRange(game.price) &&
            matchesSearch
        );
    };

    //set param for filter
    useEffect(() => {
        const platformMap: Record<string, string> = {
            nintendo: "Nintendo",
            playstation: "PlayStation",
            xbox: "Xbox",
        };

        if (param && platformMap[param]) {
            setFilters({
                platform: [platformMap[param]],
                genre: [],
                age_rating: [],
                price: [],
                tags: [],
                availability: [],
            });
        } else if (param === "bestsellers") {
            setFilters({
                platform: [],
                genre: [],
                age_rating: [],
                price: [],
                tags: ["Best Seller"],
                availability: [],
            });
        } else if (param === "newreleases") {
            setFilters({
                platform: [],
                genre: [],
                age_rating: [],
                price: [],
                tags: ["New Release"],
                availability: [],
            });
        } else if (param === "upcoming") {
            setFilters({
                platform: [],
                genre: [],
                age_rating: [],
                price: [],
                tags: ["Upcoming"],
                availability: [],
            });
        } else {
            setFilters({
                platform: [],
                genre: [],
                age_rating: [],
                price: [],
                tags: [],
                availability: [],
            });
        }
    }, [param])


    useEffect(() => {
        const allActive = Object.values(filters).flat();
        setActiveFilters(allActive);
    }, [filters])

    const filteredGames = gameItems.filter(filterGames);
    useEffect(() => {
        setResultNum(filteredGames.length)
    }, [filteredGames])

    return (
        <div className="container-fluid mt-5 align-items-center">
            <div className="text-center">
                <h2 className="display-5 fw-medium text-dark d-inline-block border-bottom border-3 border-primary">
                    VIDEO GAMES
                </h2>
                <p>Don't see a title? Contact us for any custom inquiries!</p>
            </div>
            <div className="row mt-4">
                <FilterColumn filters={filters} onFilterChange={handleFilterChange} />
                <div className="col-10">
                    <div className="row bg-primary my-2 p-1">
                        <div className="d-flex justify-content-start gap-3 align-items-center w-100">
                            <span className="fw-medium">Results Found: {resultNum}</span>
                            <span className="fw-medium ms-4">Search <i className="bi bi-search" /> </span> <input
                                type="text"
                                className="form-control"
                                style={{ maxWidth: "250px" }}
                                placeholder="Search by Name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />

                        </div>
                    </div>
                    {activeFilters.length !== 0 && (
                        <div className="row">
                            <p>
                                Active Filters:
                                {activeFilters.map((filterName, idx) => (
                                    <span key={idx} className="rounded-pill bg-success mx-1 p-1 ">
                                        {filterName}
                                    </span>
                                ))}
                            </p>

                        </div>
                    )}
                    <div className="d-flex flex-wrap justify-content-start gap-4">
                        {filteredGames.map((game: GameProps) => (
                            <div key={game.title} className="">
                                <GameCard game={game} />
                            </div>
                        ))}

                        {filteredGames.length === 0 && (
                            <div className="w-100 text-center mt-5">
                                <p className="text-muted fw-bold">No games match the selected filters.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Games;