import { useEffect, useState } from "react";
import { RESTARAUNT_MENU } from "../constants";

const useRestaraunt = (id?: string) => {
  const [menuList, setMenuList] = useState<any>();
  useEffect(() => {
    fetch(RESTARAUNT_MENU + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const menuCards =
          data?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards;
        let filteredMenuCards: any = [];
        menuCards &&
          menuCards.forEach((menu: any, ind: any) => {
            if (ind !== 0) {
              if (menu?.card?.card?.itemCards) {
                menu?.card?.card?.itemCards.forEach((item: any) => {
                  filteredMenuCards.push(item?.card?.info);
                });
              }
            }
          });
        setMenuList(filteredMenuCards);
      });
  }, []);
  return menuList;
};
export default useRestaraunt;
