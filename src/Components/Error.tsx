import React from "react";
import { useRouteError } from "react-router-dom";
import styles from "./Error.module.css";
function Error() {
  const error: any = useRouteError();
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.errorCode}>Page {error.statusText}</h1>
        <p className={styles.errorMessage}>Error Code : {error.status}</p>
      </div>
    </div>
  );
}

export default Error;
