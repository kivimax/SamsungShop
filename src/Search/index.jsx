import React from "react";

const Search = ({ className, placeholder, searchValue, setSearchValue }) => {
  return (
    <div>
      <input
        value={searchValue}
        className={className}
        placeholder={placeholder}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
};

export default Search;
