import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Problemset.module.css";
import { getContest } from "../api/getContest";

export const Problemset = () => {
  const contests = getContest();
  let selected = false;
  return (
    <div className={styles.root} id="tour12">
      <div className={styles.right}>
        <div className={styles.subject}>دسته ها</div>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem} onClick={() => selected === true}>
            <NavLink to="/problemset/technology">
              <div>تکنولوژی</div>
            </NavLink>
          </div>
          <div className={styles.gridItem}>
            <NavLink to="/problemset/contest">
              <div>مسابقه</div>
            </NavLink>
          </div>
          <div className={styles.gridItem}>
            <NavLink to="/problemset/university">
              <div>دانشگاهی</div>
            </NavLink>
          </div>
          <div className={styles.gridItem}>
            <NavLink to="/problemset/olympiad">
              <div>المپیاد</div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className={styles.left}>
        <div className={styles.gridcontainer1}>
          <div>شناسه</div>
          <div>سوال</div>
          <div>برچسب ها</div>
          <div>مسابقه</div>
          <div>تعداد حل</div>
        </div>
        <div className={styles.menu2}>
          {contests.map((contest) => {
            return (
              <div>
                {contest.questions.map((contestquestion) => (
                  <div className={styles.gridcontainer2}>
                    <div> {contestquestion.id}</div>
                    <div className={styles.name}> {contestquestion.name}</div>
                    <div> {contestquestion.tag}</div>
                    <div className={styles.name}> {contest.name}</div>
                    <div> {contestquestion.number}</div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      {console.log(selected)}
    </div>
  );
};
