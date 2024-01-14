import React from "react";
import { SearchContext } from "../App";

const Search = ({ className, placeholder }) => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

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
