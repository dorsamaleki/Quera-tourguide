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
        {courses.map((co) => (
          <div>
            <div className={styles.subject}>{co.name}</div>
            <div className={styles.text}>{co.text}</div>
            <div className={styles.date}>{co.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
