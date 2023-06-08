import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
interface featureType {
  name: string;
  path: string;
}
const Header = (): JSX.Element => {
  const features: featureType[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "About us",
      path: "about",
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
          {features.map((feature, ind) => (
            <Link to={feature.path}>
              <p key={ind}>{feature.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
