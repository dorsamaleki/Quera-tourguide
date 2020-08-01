import React from "react";
import styles from "./Problemset.module.css";
import { NavLink } from "react-router-dom";
export const Problemset = () => {
  let selected = false;
  return (
    <div className={styles.root}>
      <div className={styles.subject}>دسته ها</div>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem} onClick={() => selected === true}>
          <NavLink to="/problemset/technology">
            <div>تکنولوژی</div>
          </NavLink>
        </div>
        <div className={styles.gridItem}>
          <NavLink to="/problemset/contest">
            <div>مسابقه</div>
          </NavLink>
        </div>
        <div className={styles.gridItem}>
          <NavLink to="/problemset/university">
            <div>دانشگاهی</div>
          </NavLink>
        </div>
        <div className={styles.gridItem}>
          <NavLink to="/problemset/olympiad">
            <div>المپیاد</div>
          </NavLink>
        </div>
      </div>
      {console.log(selected)}
    </div>
  );
};
