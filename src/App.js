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

const Main = ({ setFilteredCategory, filteredCategory }) => {
  return (
    <>
      <Top />
      <Navbar setFilteredCategory={setFilteredCategory} />
      <Home />
      <Cards />
      <ScrollToTopButton />
      <Banner />
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
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
