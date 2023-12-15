import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://via.placeholder.com/1600x250" alt="slide-1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/1600x250" alt="slide-2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/1600x250" alt="slide-3" />
      </div>
    </Slider>
  );
};

export default Carusel;
