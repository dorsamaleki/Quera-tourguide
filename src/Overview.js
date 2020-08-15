import React from "react";
import styles from "./Overview.module.css";
import class1 from "./class1.jpg";
import { Getclass } from "./Getclass";
import { NavLink, useParams } from "react-router-dom";
export const Overview = () => {
  const classes = Getclass();
  let { id } = useParams();
  const courses = classes.find((courses) => courses.id.toString() === id);

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
              <div className={styles.text}>
                <NavLink to={"/course/" + co.id.toString()}>
                  <div className={styles.name}>{co.name}</div>
                  <br />
                  <div className={styles.subject}>{co.professor}</div>
                  <br />
                  <div className={styles.subject}>{co.university}</div>
                </NavLink>
                <div className={styles.line2}></div>
                <div className={styles.gridcontainer}>
                  <div className={styles.members}>{co.members}عضو</div>
                  <div className={styles.date}>{co.date}</div>
                </div>
              </div>
            );
          })}
          <div className={styles.subject}>{classes.name}</div>
        </div>
        <div> {console.log({ courses })}</div>
      </div>
    </div>
  );
};