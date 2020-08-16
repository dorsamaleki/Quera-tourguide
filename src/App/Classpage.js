import React from "react";
import universityiconcolored from "../icon/universityiconcolored.png";
import stariconorange from "../icon/stariconorange.png";
import codeiconcolored from "../icon/codeiconcolored.png";
import styles from "./Classpage.module.css";
import { getClass } from "../api/getClass";
export const Classpage = () => {
  const classes = getClass();
  return (
    <div className={styles.root} id="tour6">
      <div className={styles.gridContainer}>
        <div>
          <div className={styles.top}>
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
          <div className={styles.top}>
            <img
              src={stariconorange}
              alt="star icon"
              className={styles.image}
            />
            <div className={styles.text2}> نوشته های مهم</div>
          </div>
          <div className={styles.box2}>
            <div className={styles.subject}>
              نوشته‌ای به این بخش اضافه نشده است
            </div>
          </div>
        </div>
        <div>
          <div className={styles.top}>
            <img
              src={codeiconcolored}
              alt="code icon"
              className={styles.image}
            />
            <div className={styles.text3}> تمرین ها</div>
          </div>
          <div className={styles.box3}>
            {classes.map((co) => (
              <div>
                {co.exercise.map((coo) => (
                  <div className={styles.exercise}>
                    <div className={styles.text4}>{coo.name}</div>
                    <div className={styles.text5}>
                      <div>{coo.number} سوال</div>
                      <div> {coo.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
