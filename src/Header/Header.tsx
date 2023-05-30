import React from "react";
import styles from "./Header.module.css";
interface featureType {
  name: string;
}
const Header = (): JSX.Element => {
  const features: featureType[] = [
    {
      name: "Home",
    },
    {
      name: "Contact",
    },
    {
      name: "About us",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.cKPoesL-JFaNyq5ixJ5OlgHaHa&pid=Api&P=0&h=180"
            alt="App-logo"
            className={styles.logoImg}
          />
        </div>
        <div className={styles.feature}>
          {features.map((feature) => (
            <p>{feature.name}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
