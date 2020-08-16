import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Overview.module.css";
import { getClass } from "../api/getClass";
import class1 from "../icon/class1.jpg";

export const Overview = (props) => {
  const classes = getClass();
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
        <div
          className={styles.class1}
          id="tour4"
          onClick={props.onOverviewClick}
        >
          <img src={class1} alt="class1" />
          {classes.map((classescontent) => {
            return (
              <div className={styles.text}>
                <NavLink to={"/course/" + classescontent.id.toString()}>
                  <div className={styles.name}>{classescontent.name}</div>
                  <br />
                  <div className={styles.subject}>
                    {classescontent.professor}
                  </div>
                  <br />
                  <div className={styles.subject}>
                    {classescontent.university}
                  </div>
                </NavLink>
                <div className={styles.line2}></div>
                <div className={styles.gridcontainer}>
                  <div className={styles.members}>
                    {classescontent.members}عضو
                  </div>
                  <div className={styles.date}>{classescontent.date}</div>
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
