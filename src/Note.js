import React from "react";
import styles from "./Note.module.css";
import { Getclass } from "./Getclass";
import { useParams } from "react-router-dom";
export const Note = () => {
  const classes = Getclass();
  let { id } = useParams();
  const courses = classes.map((courses) =>
    courses.questions.find((courses) => courses.id.toString() === id)
  );
  return (
    <div className={styles.root}>
      jj
      {courses.map((co) => (
        <div>{co.name}</div>
      ))}
    </div>
  );
};
