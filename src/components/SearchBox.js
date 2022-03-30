import React from "react";

function SearchBox({ onInputChange }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Type Keyword"
        className="input"
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
