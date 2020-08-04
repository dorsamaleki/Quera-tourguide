import React from "react";
import styles from "./Showparticipants.module.css";
export const Showparticipants = (props) => {
  return (
    <div>
      <div className={styles.gridcontainer}>
        <div>{props.rank}</div>
        <div>{props.name}</div>
        <div>{props.grade}</div>
      </div>
    </div>
  );
};
