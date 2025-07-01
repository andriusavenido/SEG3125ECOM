interface FilterColumnProps {
    filters: {
        [key: string]: string[];
    };
    onFilterChange: (category: string, value: string) => void;
}

const FilterColumn: React.FC<FilterColumnProps> = ({ filters, onFilterChange }) => {
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
            <h4 className="fw-medium text-info border-bottom border-primary border-3">CATEGORIES</h4>
            {renderCheckbox("platform", ["Nintendo", "PlayStation", "Xbox"])}

            <div className="accordion mt-4" id="accordionFilters">
                <AccordionItem title="Genre" category="genre" options={["Action", "Adventure", "RPG", "Shooter", "Sports", "Strategy"]} filters={filters} onFilterChange={onFilterChange} />
                <AccordionItem title="Age Rating" category="age_rating" options={["Everyone", "Everyone 10+", "Teen (T)", "Mature (M)"]} filters={filters} onFilterChange={onFilterChange} />
                <AccordionItem title="Price" category="price" options={["Under $20", "$20 - $40", "$40 - $60", "$60+"]} filters={filters} onFilterChange={onFilterChange} />
                <AccordionItem title="Tags" category="tags" options={["Single-player", "Story Rich", "Multiplayer", "Open World", "Best Seller", "Upcoming","New Release"]} filters={filters} onFilterChange={onFilterChange} />
                <AccordionItem title="Availability" category="availability" options={["In Stock", "Out of Stock", "Digital Only", "Physical Only"]} filters={filters} onFilterChange={onFilterChange} />
            </div>
        </div>
    );
};

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

export default FilterColumn;