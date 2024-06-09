import React from "react";

const Filter = ({ filter, handleRemoveFilter, handleClearFilter }) => {
    return (
        <div className="app-header-search">
            <div className="app-header-search-item">
                {filter.map((category, i) => {
                    return (
                        <div key={i} className="display-item">
                            <p className="display-category">{category}</p>
                            <button onClick={() => handleRemoveFilter(i)}>X</button>
                        </div>
                    );
                })}
            </div>
            <button onClick={handleClearFilter}>Clear</button>
        </div>
    );
};

export default Filter;
