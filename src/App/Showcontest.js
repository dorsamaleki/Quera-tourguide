import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Showcontest.module.css";

export const Showcontest = (props) => {
  return (
    <div className={styles.gridcontainer}>
      <div>
        {props.name}
        <br />
        <NavLink to={"/contest" + props.id.toString() + "/problems"}>
          <div className={styles.button} onClick={props.onShowcontestClick}>
            ورود به مسابقه
          </div>
        </NavLink>
      </div>
      <div>{props.date}</div>
      <div>{props.time}</div>
      <div>{props.numberofquestions}</div>
      <div>{props.participants}</div>
    </div>
  );
};
