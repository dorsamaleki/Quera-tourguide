import React from "react";
import styles from "./Overview.module.css";
import class1 from "./class1.jpg";
import { Getclass } from "./Getclass";
export const Overview = () => {
  const classes = Getclass();
  return (
    <div className={styles.root}>
      <div>
        <select className={styles.dropbox}>
          <option value="a">آرشیو کلاس ها</option>
          <option value="b">کلاس های فعال من</option>
        </select>
        <div className={styles.line1}></div>
        <div className={styles.class1}>
          <img src={class1} alt="class1" />
          {classes.map((co) => {
            return (
              <div>
                <div className={styles.subject}>{co.name}</div>
                <div className={styles.name}>{co.professor}</div>
                <div className={styles.name}>{co.university}</div>
                <div className={styles.line2}></div>
                <div className={styles.gridcontainer}>
                  <div className={styles.members}>{co.members}عضو</div>
                  <div className={styles.date}>{co.date}</div>
                </div>
              </div>
            );
          })}
          <div className={styles.subject}>{classes.name}</div>
          <div className={styles.name}></div>
          <div className={styles.name}></div>
        </div>
      </div>
    </div>
  );
};
