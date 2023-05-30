import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./RestarauntList.module.css";
import { RESTARAUNT_LIST } from "../constants";
import RestarauntCard from "./RestarauntCard";

export interface RestarauntDetails {
  name: string;
  address: string;
  rating: string;
  costForTwo: number;
  deliveryTime: number;
  distanceAway: string;
  cuisines: string[];
  area: string;
  locality: string;
  cloudinaryImageId: string;
}

function RestarauntList(): JSX.Element {
  const [restarauntList, setRestarauntList] = useState<RestarauntDetails[]>();
  const [searchRestaraunt, setSearchRestaraunt] = useState<string>();
  const initialRestarauntList = useRef<RestarauntDetails[]>();
  useEffect(() => {
    getRestarauntDetails();
  }, []);

  const getRestarauntDetails = async () => {
    const restarauntArray: RestarauntDetails[] = [];
    const response = await fetch(RESTARAUNT_LIST);
    const { data } = await response.json();
    data?.cards.map((card: any) => {
      const restarauntData = card?.data;
      restarauntArray.push({
        name: restarauntData.data.name,
        address: restarauntData.data.address,
        rating: restarauntData.data.avgRating,
        costForTwo: restarauntData.data.costForTwo,
        deliveryTime: restarauntData.data.deliveryTime,
        distanceAway: restarauntData.data.lastMileTravelString,
        cuisines: restarauntData.data.cuisines,
        area: restarauntData.data.area,
        locality: restarauntData.data.locality,
        cloudinaryImageId: restarauntData.data.cloudinaryImageId,
      });
    });
    initialRestarauntList.current = restarauntArray;
    setRestarauntList(restarauntArray);
  };

  const filterRestaraunt = (e: ChangeEvent<HTMLInputElement>) => {
    let filteredResData: RestarauntDetails[] = [];
    if (initialRestarauntList.current) {
      initialRestarauntList.current.forEach((restaraunt) => {
        if (
          restaraunt.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
          filteredResData.push(restaraunt);
      });
      filteredResData && setRestarauntList(filteredResData);
    }
  };
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={searchRestaraunt}
            className={styles.inputBox}
            placeholder="Search for restaraunts"
            onChange={filterRestaraunt}
          />
          <button className={styles.inputBtn}>Search</button>
        </div>
        <div className={styles.cardContainer}>
          {restarauntList &&
            restarauntList.map((restaurant) => (
              <RestarauntCard {...restaurant} />
            ))}
        </div>
      </div>
    </>
  );
}

export default RestarauntList;
