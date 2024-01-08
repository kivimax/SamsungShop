import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ setFilteredCategory, searchValue, setSearchValue }) => {
  const [showCategories, setShowCategories] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const products = ["Phone", "Smart Watch", "TV", "Washing machine", "Fridge"];

  const onClickCategories = (category) => {
    setSelectedCategory(category);
    setShowCategories(false);
    setFilteredCategory(category);
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
              <Link
                to="/"
                className="nav-link"
                onClick={() => window.location.reload()}
              >
                Домой
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" target="_blank" className="nav-link">
                О Samsung
              </Link>
            </li>
            <li className="nav-item dropdown">
              <b
                className="nav-link dropdown-toggle"
                onClick={() => setShowCategories(!showCategories)}
              >
                Категории
              </b>
              <ul
                className={`dropdown-menu ${showCategories ? "show" : ""}`}
                style={{ backgroundColor: "white", cursor: "pointer" }}
              >
                {products.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => onClickCategories(item)}
                    className={selectedCategory === item ? "active" : ""}
                  >
                    <b className="dropdown-item">{item}</b>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contact" target="_blank" className="nav-link">
                Свяжитесь с нами
              </Link>
            </li>
          </ul>
          <form className="d-flex ms-auto">
            <Search
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              ariaLabel="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
