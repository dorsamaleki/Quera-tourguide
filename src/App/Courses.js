import React from "react";
import { useParams, NavLink } from "react-router-dom";
import styles from "./Courses.module.css";
import { getClass } from "../api/getClass";
import universityiconblue from "../icon/universityiconblue.png";
import pencilicon from "../icon/pencilicon.png";

export const Courses = (props) => {
  const classes = getClass();
  let { id } = useParams();
  const courses = classes.find((courses) => courses.id.toString() === id);
  return (
    <div className={styles.root}>
      {console.log("o")}
      {console.log({ courses })}
      <div className={styles.sidebar}>
        {classes.map((classescontent) => (
          <div>
            <div className={styles.top}>
              <NavLink
                to={"/course/" + classescontent.id.toString() + "/class"}
              >
                <div
                  className={styles.classbutton}
                  id="tour5"
                  onClick={props.onCourseClick}
                >
                  <img
                    src={universityiconblue}
                    alt="university icon"
                    className={styles.image}
                  />
                  <div className={styles.text1}> کلاس</div>
                </div>
              </NavLink>

              <NavLink
                to={"/course/" + classescontent.id.toString() + "/write"}
              >
                <div
                  className={styles.writebutton}
                  id="tour7"
                  onClick={props.onWriteClick}
                >
                  <img
                    src={pencilicon}
                    alt="pencil icon"
                    className={styles.image}
                  />
                  <div className={styles.text1}> نوشته جدید </div>
                </div>
              </NavLink>
            </div>
            <div id="tour9" onClick={props.onNoteClick}>
              {classescontent.questions.map((classesquestion) => (
                <NavLink
                  to={
                    "/course/" +
                    classescontent.id.toString() +
                    "/note" +
                    classesquestion.id.toString()
                  }
                  className={styles.nav}
                >
                  <div className={styles.box}>
                    <div className={styles.text2}> {classesquestion.name}</div>
                    <div className={styles.text3}> {classesquestion.date}</div>
                    <div className={styles.text4}>{classesquestion.text}</div>
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
