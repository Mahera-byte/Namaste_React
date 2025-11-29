import { CDN_URL } from "../utils/constants";
const Resturantcard = (props) => {
  console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString } = resData.info;
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100 hover:bg-gray-300 rounded-lg">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className=" py-4 text-lg font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
    </div>
  );
};

export default Resturantcard;
