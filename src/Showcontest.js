import React from "react";
import styles from "./Showcontest.module.css";
export const Showcontest = (props) => {
  return (
    <div className={styles.gridcontainer}>
      <div>{props.name}</div>
      <div>{props.date}</div>
      <div>{props.time}</div>
      <div>{props.numberofquestions}</div>
      <div>{props.participants}</div>
    </div>
  );
};
