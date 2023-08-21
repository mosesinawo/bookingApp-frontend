import { backendUrl } from "../../config/__urls";
import useFetch from "../../hooks/useFetch";
import BigLoader from '../loaders/bigLoader'
import Slider from 'react-slick'
import { Settings } from "../../utilities/settings";
import "./featuredProperties.css";

const FeaturedProperties = () => {

  const { data, loading, error, reFetch } = useFetch(backendUrl + "/hotels/featured?featured=true&limit=6")
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  console.log(data)
  const renderShow = loading ? <BigLoader /> : (
    data.map((item) => {

      return (<div className="fpItem" key={item._id}>
        <img
          src={item.photos[0] || "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="}
          alt=""
          className="fpImg"
        />
        <span className="fpName"> {item.name} </span>
        <span className="fpCity">{item.city}</span>
        <span className="fpPrice">#{item.cheapestPrice}</span>
        {item.rating && <div className="fpRating">
          <button>{item.rating}</button>
          <span>Excellent</span>
        </div>}
      </div>)

    })

  )
  return (
    <div className="fp">
      <Slider {...Settings}>
        {renderShow }
      </Slider>
    </div>
  );
};

export default FeaturedProperties;
