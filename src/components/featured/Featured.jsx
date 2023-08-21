import { backendUrl } from "../../config/__urls";
import useFetch from "../../hooks/useFetch";
import BigLoader from "../loaders/bigLoader";
import "./featured.css";

const Featured = () => {
const {data, loading, error, reFetch} = useFetch(backendUrl+"/hotels/countByCity?cities=berlin,lagos,calabar")
console.log(data)
  return (
    <div className="featured">
     {loading ? 
     <BigLoader/>:
     (<><div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/684500.jpg?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/971990.jpg?k=6d52fe4a57a984e2d540e3d7a1910f8a76fda3a57708faddd74e2109c3344b5e&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lagos</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/976952.jpg?k=4c536b3833e5f6721ff5f89fa4f15d8f50fd5cd4a963060414078428aa67a6d5&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Calabar</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div> </>) }
    </div>
  );
};

export default Featured;
