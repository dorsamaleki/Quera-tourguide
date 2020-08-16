import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Note.module.css";
import { getClass } from "../api/getClass";

export const Note = () => {
  const classes = getClass();
  let { id } = useParams();
  const courses = classes.map((courses) =>
    courses.questions.find((courses) => courses.id.toString() === id)
  );
  return (
    <div className={styles.root} id="tour10">
      <div className={styles.page}>
        {courses.map((course) => (
          <div>
            <div className={styles.subject}>{course.name}</div>
            <div className={styles.text}>{course.text}</div>
            <div className={styles.date}>{course.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
