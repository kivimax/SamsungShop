import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setFilteredCategory }) => {
  const [showCategories, setShowCategories] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [update, setUpdate] = React.useState("Страница 1");
  const [inputValue, setInputValue] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const products = [
    { id: 1, name: "Galaxy S23" },
    { id: 2, name: "Galaxy Z Fold 5" },
    { id: 3, name: "Galaxy Watch 6" },
    { id: 4, name: "Smart Fridge" },
    { id: 5, name: "4K TV" },
  ];

  const onClickCategories = (category) => {
    setSelectedCategory(category);
    setShowCategories(false);
    setFilteredCategory(category);
    setInputValue("");
    setSuggestions([]);
  };

  const clickUpdate = () => {
    setUpdate("Страница 2");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const newSuggestions = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      onClickCategories(suggestions[0].name);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <div className="container-fluid">
        <button className="navbar-toggler">
          <span>
            <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <b
                className="nav-link active"
                aria-current="page"
                onClick={clickUpdate}
              >
                {update}
              </b>
            </li>
            <li className="nav-item">
              <Link to="/about" target="_blank" className="nav-link">
                About Samsung
              </Link>
            </li>
            <li className="nav-item dropdown">
              <b
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => setShowCategories(!showCategories)}
              >
                Category
              </b>
              <div>
                <ul
                  className={`dropdown-menu ${showCategories ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                  style={{ backgroundColor: "white" }}
                >
                  {products.map((product, index) => (
                    <li
                      key={index}
                      onClick={() => onClickCategories(product.name)}
                      className={
                        selectedCategory === product.name ? "active" : ""
                      }
                    >
                      <b className="dropdown-item">{product.name}</b>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/contact" target="_blank" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="input-group" style={{ maxWidth: "200px" }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={inputValue}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
            {suggestions.length > 0 && (
              <div className="dropdown-menu" style={{ marginTop: "2px" }}>
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => onClickCategories(suggestion.name)}
                    className={
                      selectedCategory === suggestion.name ? "active" : ""
                    }
                  >
                    <b className="dropdown-item">{suggestion.name}</b>
                  </div>
                ))}
              </div>
            )}
            <button
              className="btn btn-outline-success"
              type="button"
              id="search-btn"
              onClick={() => onClickCategories(inputValue)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
