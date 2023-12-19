import React from "react";
import img from "./image/q.jpg";

const About = () => {
  return (
    <div>
      <div className="container" id="about">
        <h1>About Samsung</h1>
        <div className="row">
          <div
            class="col-md-6 py-3 py-md-0"
            style={{ width: "40%", paddingLeft: "2rem" }}
          >
            <img src={img} alt="" />
          </div>
          <div className="col-md-6 py-3 py-md-0">
            <div className="card"></div>
          </div>
          <div
            className="col-md-6 py-3 py-md-0"
            style={{
              paddingLeft: "2rem",
              marginRight: "0",
              marginLeft: "0",
              width: "100%",
            }}
          >
            <p>
              В 1930-х годах в Корее предприниматель Ли Бён Чхоль открывает своё
              дело по производству рисовой муки. Небольшой склад в городе Тэгу
              становится началом большой истории компании Samsung. В это время
              Корея являлась колонией Японии, и в стране было довольно сложно
              заниматься частным предпринимательством. Тем не менее, уже в 1938
              году Ли удаётся создать первый независимый канал для экспорта из
              Кореи в Китай и Маньчжурию. Активное развитие поставок пищевых
              продуктов, таких, как рис, сахар и сушёная рыба, дало возможность
              официально зарегистрировать торговую марку Samsung Trading
              Company. Иностранное (для Кореи) происхождение названия явилось
              следствием далеко идущих амбициозных планов корейского
              предпринимателя: уже к концу 1950-х годов Бён Чхоль собирался
              наладить торговлю со странами Американского континента. А после
              высадки войск США на Корейском полуострове продукция завода по
              производству рисовой водки и пива стала продаваться представителям
              союзных войск. Война в Корее положила конец этому бизнесу. Склады
              были разграблены и сожжены так же, как и основные заводы компании.
              Склад в Тэгу, 1938 год Существует легенда о том, что на развалинах
              сожжённого дома Бён Чхоль нашёл спрятанный ящик с деньгами,
              которые и вложил в своё новое дело. Это была текстильная фабрика,
              сахарный завод, а позднее — и страховой бизнес. Бён Чхоль быстро
              богател при том, что средний доход на душу населения в Корее в
              1960-х годах не превышал 80 долларов.[3] На тот момент даже в
              столице, Сеуле, не было постоянного электричества, электроэнергия
              подавалась на несколько часов в день, а централизованный
              водопровод отсутствовал. Скорый военный переворот сверг Ли Сын
              Мана, президента и близкого друга Бён Чхоля, который как богатый
              предприниматель входил в ближайшее окружение опального правителя.
              Самого Ли Бён Чхоля посадили в тюрьму за взяточничество и близкое
              знакомство со свергнутым президентом.
            </p>
          </div>
        </div>
        <footer id="footer" style={{ marginTop: "50px" }}>
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-content">
                  <h3>Samsung</h3>
                  <p>Official dealer</p>
                  <p>
                    Azerbaijan <br />
                    Qusar <br />
                  </p>
                  <strong>
                    <i className="fas fa-phone"></i> Phone:
                    <strong>+(994) 000 - 00 - 00</strong>
                  </strong>
                  <br />
                  <strong>
                    <i className="fa-solid fa-envelope"></i> Email:
                    <strong>example@gmail.com</strong>
                  </strong>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Usefull Links</h4>
                  <ul>
                    <li>
                      <b>Home</b>
                    </li>
                    <li>
                      <b>About</b>
                    </li>
                    <b>Contact</b>
                    <li>
                      <b>Services</b>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <b>Smart Whone</b>
                    </li>
                    <li>
                      <b>Smart Watch</b>
                    </li>
                    <li>
                      <b>TV</b>
                    </li>
                    <li>
                      <b>Fridge</b>
                    </li>
                    <li>
                      <b>Washing machine</b>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Social Network</h4>
                  <div className="socail-links mt-3">
                    <b className="twiiter" style={{ marginLeft: "0.5rem" }}>
                      <i className="fa-brands fa-twitter"></i>
                    </b>
                    <b className="twiiter" style={{ marginLeft: "0.5rem" }}>
                      <i className="fa-brands fa-facebook-f"></i>
                    </b>
                    <b className="twiiter" style={{ marginLeft: "0.5rem" }}>
                      <i className="fa-brands fa-google-plus"></i>
                    </b>
                    <b className="twiiter" style={{ marginLeft: "0.5rem" }}>
                      <i className="fa-brands fa-instagram"></i>
                    </b>
                    <b className="twiiter" style={{ marginLeft: "0.5rem" }}>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="container py-4">
            <div className="copyright">
              &copy; Copyright <strong>Samsung</strong>.All Rights Reserved
            </div>
            <div className="credits">
              Designed By <b>Max</b>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
