import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Banner from "./Banner";
import Cards from "./Cards";
import Contact from "./Contact";
import Heder from "./Heder";
import Home from "./Home";
import Navbar from "./Navbar";
import Product from "./Product";
import Top from "./Top";
import ScrollToTopButton from "./Scroll";
import About from "./About";
import Slider from "./Slider/Slider";
import ProductDetails from "./ProductDetails";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  const [filteredCategory, setFilteredCategory] = React.useState(null);

  return (
    <Provider store={store}>
      <Router>
        <Heder />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                filteredCategory={filteredCategory}
                setFilteredCategory={setFilteredCategory}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="items/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};

const Main = ({ setFilteredCategory, filteredCategory }) => {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <>
      <Top />
      <Navbar
        setFilteredCategory={setFilteredCategory}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Home />
      <Cards />
      <ScrollToTopButton />
      <Banner />
      <Slider />
      <Outlet />
      <Product filteredCategory={filteredCategory} searchValue={searchValue} />
    </>
  );
};

export default App;
