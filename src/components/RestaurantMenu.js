import { useEffect, useState } from "react";
const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
    console.log("maheras");
  }, []);

  const fetchMenu = async () => {
    try {
      const url =
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576&catalog_qa=undefined&submitAction=ENTER";

      const data = await fetch(
        "https://api.allorigins.win/raw?url=" + encodeURIComponent(url)
      );

      const json = await data.json();
      console.log(json);
      console.log("garimas");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  //const { name, cuisines, costForTwoMessage } =
  //resInfo?.cards[2]?.card?.card?.info || {};
  //const itemCards =
  //resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //?.card || {};

  return (
    <div className="menu">
      <h1>Mahera</h1>
      <ul>
        <li>Momo</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
