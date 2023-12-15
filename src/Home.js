import React from "react";
import img from "./image/b4.png";

const Home = () => {
  return (
    <section className="home">
      <div className="content">
        <h3>Samsung Galaxy S23 - серия флагманских Android-смартфонов</h3>
        <p>
          Samsung Galaxy S23 и S23+ доступны в шести цветах: фантомный черный,
          кремовый, зеленый, лавандовый, графитовый и лаймовый. А Samsung Galaxy
          S23 Ultra доступен в восьми цветах: фантомный черный, кремовый,
          зеленый, лавандовый, графитовый, лаймовый, небесно-голубой и красный
        </p>
      </div>
      <div className="img">
        <img src={img} alt="Samsung Galaxy" />
      </div>
    </section>
  );
};
export default Home;
