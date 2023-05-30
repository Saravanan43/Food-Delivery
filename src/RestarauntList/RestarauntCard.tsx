import React from "react";
import styles from "./Restaraunt.module.css";
import { RestarauntDetails } from "./RestarauntList";
import { IMG_URL } from "../constants";
function RestarauntCard(restaraunt: RestarauntDetails) {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardImgContainer}>
          <img
            src={IMG_URL + restaraunt.cloudinaryImageId}
            alt="ResImg"
            className={styles.resImg}
          />
        </div>
        <div className={styles.cardInfoContainer}>
          <h2>
            {restaraunt.name.length < 20
              ? restaraunt.name
              : restaraunt.name.slice(0, 20) + "..."}
          </h2>
          <div>
            <span></span>
            <p>{restaraunt.rating}</p>
          </div>
          <h4>
            {restaraunt.cuisines.join(", ").length < 35
              ? restaraunt.cuisines.join(", ")
              : restaraunt.cuisines.join(", ").slice(0, 35) + "..."}
          </h4>
          <h4>{restaraunt.locality}</h4>
        </div>
      </div>
    </>
  );
}

export default RestarauntCard;
