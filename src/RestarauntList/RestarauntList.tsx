import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./RestarauntList.module.css";
import { RESTARAUNT_LIST } from "../constants";
import RestarauntCard from "./RestarauntCard";
import Loader from "../Components/Loader";

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
  const initialRestarauntList = useRef<RestarauntDetails[]>();
  useEffect(() => {
    getRestarauntDetails();
  }, []);

  const getRestarauntDetails = async () => {
    try {
      const restarauntArray: RestarauntDetails[] = [];
      const response = await fetch(RESTARAUNT_LIST);
      const { data } = await response.json();
      data?.cards.forEach((card: any) => {
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
    } catch (error) {
      alert("Something went wrong");
    }
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
            className={styles.inputBox}
            placeholder="Search for restaraunts"
            onChange={filterRestaraunt}
          />
          <button className={styles.inputBtn}>Search</button>
        </div>
        <div className={styles.cardContainer}>
          {initialRestarauntList.current ? (
            restarauntList && restarauntList?.length > 0 ? (
              restarauntList.map((restaurant, ind) => (
                <RestarauntCard key={ind} {...restaurant} />
              ))
            ) : (
              <h2>No restaurants found</h2>
            )
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
}

export default RestarauntList;
