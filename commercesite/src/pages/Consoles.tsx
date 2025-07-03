import React, { useEffect, useState } from "react";
import type { ConsoleProps } from "../context/CartContext";
import consoleItems from "../assets/data/consoles.json";
import ConsoleCard from "../components/ConsoleCard";
import FilterColumnConsole from "../components/FilterColumnConsole";

import { useParams } from "react-router";

const Consoles:React.FC = () => {
    const { category: param } = useParams<{ category?: string }>(); //grab my parameterz

    const [filters, setFilters] = useState({
        brand: [] as string[],
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
            if (range === "Under $200") return price < 200;
            if (range === "$200 - $400") return price >= 200 && price <= 400;
            if (range === "$400 - $600") return price > 400 && price <= 600;
            if (range === "$600+") return price > 600;
            return false;
        });
    };

    const filterGames = (console: ConsoleProps) => {
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

        const matchesSearch = searchTerm.trim() === "" || console.title.toLowerCase().includes(searchTerm.toLowerCase());
        return (
            matches("brand", console.brand) &&
            matches("tags", console.tags) &&
            matches("availability", console.availability) &&
            priceInRange(console.price) &&
            matchesSearch
        );
    };

    //set param for filter
    useEffect(() => {
        const brandMap: Record<string, string> = {
            nintendo: "Nintendo",
            playstation: "PlayStation",
            xbox: "Xbox",
        };

        if (param && brandMap[param]) {
            setFilters({
                brand: [brandMap[param]],
                price: [],
                tags: [],
                availability: [],
            });
        } else if (param === "bestsellers") {
            setFilters({
                brand: [],
                price: [],
                tags: ["Best Seller"],
                availability: [],
            });
        } else if (param === "bundles") {
            setFilters({
                brand: [],
                price: [],
                tags: ["Bundle"],
                availability: [],
            });
        } else if (param === "onsale") {
            setFilters({
                brand: [],
                price: [],
                tags: ["On Sale"],
                availability: [],
            });
        } else {
            setFilters({
                brand: [],
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

    const filteredGames = consoleItems.filter(filterGames);
    useEffect(() => {
        setResultNum(filteredGames.length)
    }, [filteredGames])

    return (
        <div className="container-fluid mt-5 align-items-center">
            <div className="text-center">
                <h2 className="display-5 fw-medium text-dark d-inline-block border-bottom border-3 border-success">
                    CONSOLES
                </h2>
                <p>Don't see a console? Contact us for any custom inquiries!</p>
            </div>
            <div className="row mt-4">
                <FilterColumnConsole filters={filters} onFilterChange={handleFilterChange} />
                <div className="col-10">
                    <div className="row bg-success my-2 p-1">
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
                        {filteredGames.map((console: ConsoleProps) => (
                            <div key={console.title} className="">
                                <ConsoleCard console={console} />
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
}
 
export default Consoles;