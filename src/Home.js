import React from "react";
import styles from "./Home.module.css";
import universityiconcolored from "./universityiconcolored.png";
import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <div className={styles.root}>
      <img src={universityiconcolored} alt="university icon" />
      <p>آخرین کلاس های من</p>
      <NavLink to="/overview">
        <div className={styles.text}>همه کلاس ها</div>
      </NavLink>
    </div>
  );
};
