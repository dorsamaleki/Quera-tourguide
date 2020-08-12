import React from "react";
import { useParams } from "react-router-dom";
import { Getclass } from "./Getclass";
import styles from "./Courses.module.css";
import universityiconcolored from "./universityiconcolored.png";
import stariconorange from "./stariconorange.png";
export const Courses = () => {
  const classes = Getclass();
  let { id } = useParams();
  const courses = classes.find((courses) => courses.id.toString() === id);
  return (
    <div className={styles.root}>
      {console.log({ courses })}
      <div className={styles.gridContainer}>
        <div>
          <div className={styles.topclass1}>
            <img
              src={universityiconcolored}
              alt="university icon"
              className={styles.image}
            />
            <div className={styles.text1}>کلاس در یک نگاه</div>
          </div>
          <div className={styles.class1}>
            {classes.map((co) => (
              <div>
                <div className={styles.name}>{co.name}</div>
                <div className={styles.subject}>{co.professor}</div>
                <br />
                <div className={styles.line1}>
                  <span>دستیاران آموزشی</span>
                </div>
                <div className={styles.subject}>{co.TA}</div>

                <div className={styles.line2}></div>
                <div className={styles.gridContainer1}>
                  <div className={styles.member1}>{co.members}</div>
                  <div className={styles.member2}>4</div>
                  <div>تعداد اعضا</div>
                  <div>تعداد نوشته ها</div>
                </div>
                <br />
                <div className={styles.gridContainer2}>
                  <div className={styles.number1}>16</div>
                  <div className={styles.number2}>19</div>
                  <div className={styles.number3}>11</div>
                  <div className={styles.text}>خوانده نشده</div>
                  <div className={styles.text}>بدون بحث</div>
                  <div className={styles.text}>حل نشده</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.topbox2}>
            <img
              src={stariconorange}
              alt="star icon"
              className={styles.image}
            />
            <div className={styles.text2}> نوشته های مهم</div>
          </div>
          <div className={styles.box2}></div>
        </div>
      </div>
    </div>
  );
};
