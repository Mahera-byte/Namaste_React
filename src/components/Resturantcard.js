import { CDN_URL } from "../utils/constants";
const Resturantcard = (props) => {
  console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString } = resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
    </div>
  );
};

export default Resturantcard;
