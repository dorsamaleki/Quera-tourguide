import React from "react";
import styles from "./Home.module.css";
import universityiconcolored from "./universityiconcolored.png";
import { NavLink } from "react-router-dom";
import codeiconcolored from "./codeiconcolored.png";
import coffeeiconcolored from "./coffeeiconcolored.png";
export const Home = () => {
  return (
    <div className={styles.root}>
      <div className={styles.box1}>
        <img src={universityiconcolored} alt="university icon" />
        <p>آخرین کلاس های من</p>
        <NavLink to="/overview">
          <div className={styles.text}>همه کلاس ها</div>
        </NavLink>
        <div className={styles.gridcontainer}>
          <div>کلاس کامپیوتر دوره 34 </div>
        </div>
      </div>
      <div className={styles.box2}>
        <img src={codeiconcolored} alt="code icon" />
        <p>تمرین کنید</p>
        <NavLink to="/problemset">
          <div className={styles.text}>همه سوالات</div>
        </NavLink>
      </div>
      <div className={styles.box3}>
        <img src={coffeeiconcolored} alt="code icon" />
        <p>مهارت خود را بسنجید</p>
        <NavLink to="/contest">
          <div className={styles.text}> همه مسابقات</div>
        </NavLink>
      </div>
    </div>
  );
};
