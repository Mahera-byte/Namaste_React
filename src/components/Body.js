import Resturantcard from "./Resturantcard";
//import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restList, setresList] = useState([]);
  const [searchtext, setsearchtext] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setresList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>looks like your internet is not working!!!Its you, not us</h1>;

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1 m-4  bg-green-100 rounded-lg"
            onClick={() => {}}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="className= px-4 py-1 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredList = restList.filter(
                (res) => res.info.avgRating > 4
              );
              setresList(filteredList);
            }}
          >
            Top Rated Resturant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {restList.map((resturant) => (
          <Resturantcard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
