import React from "react";
import styles from "./Showcontestassignments.module.css";
import { Getcontest } from "./Getcontest";

export const Showcontestassignments = () => {
  const contests = Getcontest();
  return (
    <div className={styles.root}>
      <div className={styles.sidebar}>
        {contests.map((contest) => {
          return <div>{contest.questions}</div>;
        })}
        <div>jj</div>
      </div>
    </div>
  );
};
