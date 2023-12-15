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
import Carusel from "./Carusel";

const Main = ({ setFilteredCategory, filteredCategory }) => {
  return (
    <>
      <Top />
      <Navbar setFilteredCategory={setFilteredCategory} />
      <Home />
      <Cards />
      <ScrollToTopButton />
      <Banner />
      <Carusel />
      <Outlet />
      <Product filteredCategory={filteredCategory} />
    </>
  );
};

const App = () => {
  const [filteredCategory, setFilteredCategory] = React.useState(null);

  return (
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
      </Routes>
    </Router>
  );
};

export default App;
