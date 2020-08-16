import React from "react";
import styles from "./Contest.module.css";
import coffeicon from "../icon/coffeeicon.png";
import { NavLink } from "react-router-dom";
import { getContest } from "../api/getContest";
import { Showcontest } from "./Showcontest";
import staricon from "../icon/staricon.png";
import { getPrticipants } from "../api/getParticipants";
import { Showparticipants } from "./Showparticipants";
export const Contest = (props) => {
  const contests = getContest();
  const participants = getPrticipants();
  return (
    <div>
      <div className={styles.root} id="tour14">
        <div className={styles.menu1}>
          <img src={coffeicon} alt="coffee icon" />
          مسابقات
          <div className={styles.menu}>
            <NavLink to="/context/featured">
              <div className={styles.contest}>مسابقات ویژه</div>
            </NavLink>
            <NavLink to="/context/other">
              <div className={styles.contest}>مسابقات دیگر</div>
            </NavLink>
            <NavLink to="/context/private">
              <div className={styles.contest}>مسابقات خصوصی</div>
            </NavLink>
            <NavLink to="/context/draft">
              <div className={styles.contest}>مسابقات منتشر نشده</div>
            </NavLink>
          </div>
        </div>
        <div className={styles.menu2}>مسابقات در حال اجرا</div>
        <div className={styles.menu3gridcontainer}>
          <div>نام مسابقه</div>
          <div>زمان تا شروع</div>
          <div>زمان مسابقه</div>
          <div>#سوالات</div>
          <div>#شرکت کنندگان</div>
        </div>
        <br />
        <div className={styles.menu2}>مسابقات گذشته</div>
        <div className={styles.menu3gridcontainer}>
          <div>نام مسابقه</div>
          <div>زمان تا شروع</div>
          <div>زمان مسابقه</div>
          <div>#سوالات</div>
          <div>#شرکت کنندگان</div>
        </div>
        <div className={styles.menu4}>
          {contests.map((contest) => {
            return (
              <div>
                <Showcontest
                  key={contest.id}
                  {...contest}
                  onShowcontestClick={props.onShowcontestClick}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.top}>
          <img src={staricon} alt="star icon" />
          برترین ها
        </div>
        <div className={styles.sidebargridcontainer}>
          <div>رتبه</div>
          <div>نام</div>
          <div>امتیاز</div>
        </div>
        <div>
          {participants.map((participant, index) => (
            <Showparticipants key={index} {...participant} />
          ))}
        </div>
      </div>
    </div>
  );
};
