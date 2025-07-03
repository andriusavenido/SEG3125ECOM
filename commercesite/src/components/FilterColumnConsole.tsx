interface FilterColumnProps {
    filters: {
        [key: string]: string[];
    };
    onFilterChange: (category: string, value: string) => void;
}

const FilterColumnConsole: React.FC<FilterColumnProps> = ({ filters, onFilterChange }) => {
    const renderCheckbox = (category: string, options: string[]) =>
        options.map((option) => (
            <div key={option} className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={filters[category]?.includes(option)}
                    onChange={() => onFilterChange(category, option)}
                />
                <label className="form-check-label">{option}</label>
            </div>
        ));

    return (
        <div className="col-2 bg-light p-4">
            <h4 className="fw-medium text-dark border-bottom border-success border-3">CATEGORIES</h4>
            {renderCheckbox("brand", ["Nintendo", "PlayStation", "Xbox"])}

            <div className="accordion mt-4" id="accordionFilters">
                <AccordionItem title="Price" category="price" options={["Under $200", "$200 - $400", "$400 - $600", "$600+"]} filters={filters} onFilterChange={onFilterChange} />
                <AccordionItem title="Tags" category="tags" options={[
                    // Storage
                    "256 GB",
                    "1TB",
                    // Features
                    "4K Support",
                    "Handheld",
                    "Home Console",
                    // Status
                    "Best Seller",
                    "New Release",
                    "On Sale"
                ]} filters={filters} onFilterChange={onFilterChange} />
                <AccordionItem title="Availability" category="availability" options={["In Stock", "Out of Stock", "Low Stock"]} filters={filters} onFilterChange={onFilterChange} />
            </div>
        </div>
    );
}

const AccordionItem: React.FC<{ title: string; category: string; options: string[]; filters: any; onFilterChange: (category: string, value: string) => void }> = ({
    title,
    category,
    options,
    filters,
    onFilterChange,
}) => (
    <div className="accordion-item border-0 bg-light">
        <h2 className="accordion-header">
            <button className="accordion-button collapsed rounded-0 bg-secondary fw-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#${category}Collapse`}>
                {title}
            </button>
        </h2>
        <div id={`${category}Collapse`} className="accordion-collapse collapse">
            <div className="accordion-body">
                {options.map((option) => (
                    <div key={option} className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={filters[category]?.includes(option)}
                            onChange={() => onFilterChange(category, option)}
                        />
                        <label className="form-check-label">{option}</label>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default FilterColumnConsole;