import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Getclass } from "./Getclass";
import styles from "./Courses.module.css";

import universityiconblue from "./universityiconblue.png";
import pencilicon from "./pencilicon.png";
export const Courses = () => {
  const classes = Getclass();
  let { id } = useParams();
  const courses = classes.find((courses) => courses.id.toString() === id);
  return (
    <div className={styles.root}>
      {console.log("o")}
      {console.log({ courses })}
      <div className={styles.sidebar}>
        {classes.map((co) => (
          <div>
            <div className={styles.top}>
              <NavLink to={"/course/" + co.id.toString() + "/class"}>
                <div className={styles.classbutton} id="tour5">
                  <img
                    src={universityiconblue}
                    alt="university icon"
                    className={styles.image}
                  />
                  <div className={styles.text1}> کلاس</div>
                </div>
              </NavLink>

              <NavLink to={"/course/" + co.id.toString() + "/write"}>
                <div className={styles.writebutton} id="tour7">
                  <img
                    src={pencilicon}
                    alt="pencil icon"
                    className={styles.image}
                  />
                  <div className={styles.text1}> نوشته جدید </div>
                </div>
              </NavLink>
            </div>
            <div id="tour9">
              {co.questions.map((coo) => (
                <NavLink
                  to={
                    "/course/" + co.id.toString() + "/note" + coo.id.toString()
                  }
                  className={styles.nav}
                >
                  <div className={styles.box}>
                    <div className={styles.text2}> {coo.name}</div>
                    <div className={styles.text3}> {coo.date}</div>
                    <div className={styles.text4}>{coo.text}</div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
