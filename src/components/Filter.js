import React from "react";

const Filter = ({ filterByGreased, sortByNameOrWeight }) => {
  return (
    <div id="filter">
      <div id="filter-greased">
        <label htmlFor="filter-greased">Filter Greased: </label>
        <input type="checkbox" onChange={filterByGreased} id="checkbox" />
      </div>
      <div id="sort-by-dropdown">
        <label htmlFor="sort-dropdown">Sort By: </label>
        <select onChange={sortByNameOrWeight} id="sort-dropdown">
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
