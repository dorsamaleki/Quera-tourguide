import React from "react";
import styles from "./Showcontestassignments.module.css";

import { useParams } from "react-router-dom";
import { Getcontest } from "./Getcontest";

export const Showcontestassignments = () => {
  const contests = Getcontest();
  let { id } = useParams();
  const contest = contests.find((contest) => contest.id.toString() === id);

  if (!contest) {
    return <div>Question not found</div>;
  }

  return (
    <div className={styles.root}>
      <div className={styles.sidebar}>
        <div>
          {contest.questions.map((co) => (
            <div>{co.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
