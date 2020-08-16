import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import { getClass } from "../api/getClass";
import universityiconcolored from "../icon/universityiconcolored.png";
import codeiconcolored from "../icon/codeiconcolored.png";
import coffeeiconcolored from "../icon/coffeeiconcolored.png";

export const Home = () => {
  const classes = getClass();
  return (
    <div className={styles.root} id="tour2">
      <div className={styles.boxcontainer}>
        <div className={styles.box1}>
          <div className={styles.boxtop}>
            <div>
              <img
                src={universityiconcolored}
                alt="university icon"
                className={styles.image}
              />
              <div className={styles.text6}>آخرین کلاس های من</div>
            </div>
            <div className={styles.item2}>
              <NavLink to="/overview">
                <div className={styles.text}>همه کلاس ها</div>
              </NavLink>
            </div>
          </div>
          <div className={styles.box1bottom}>
            {classes.map((co) => (
              <div className={styles.gridcontainerbox1}>
                <div>
                  <div className={styles.text1}>کلاس {co.name}</div>
                  <div className={styles.text2}>{co.professor}</div>
                </div>
                <div>
                  <div className={styles.text2}>آخرین تمرین:</div>
                  <div className={styles.text}>هفته پنجم</div>
                </div>
                <div className={styles.text2}>
                  <div>{co.members} عضو </div>
                  <div>{co.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.boxtop}>
            <div>
              <img
                src={codeiconcolored}
                alt="code icon"
                className={styles.image}
              />
              <div className={styles.text7}> تمرین کنید</div>
            </div>
            <div className={styles.item2}>
              <NavLink to="/problemset">
                <div className={styles.text}>همه سوالات</div>
              </NavLink>
            </div>
          </div>
          <div className={styles.box2bottom}>
            <div className={styles.text2}>تعداد سوالات حل شده</div>
            <div className={styles.gridcontainerbox2}>
              <div className={styles.text3}>0</div>
              <div className={styles.text4}>0</div>
              <div className={styles.text5}>0</div>
              <div className={styles.text3}>0</div>
              <div className={styles.text1}>تکنولوژی</div>
              <div className={styles.text1}>مسابقه</div>
              <div className={styles.text1}>دانشگاهی</div>
              <div className={styles.text1}>المپیاد</div>
            </div>
          </div>
        </div>
        <div className={styles.box3}>
          <div className={styles.boxtop}>
            <div>
              <img
                src={coffeeiconcolored}
                alt="code icon"
                className={styles.image}
              />
              <div className={styles.text8}>مهارت خود را بسنجید</div>
            </div>
            <div className={styles.item2}>
              <NavLink to="/contest">
                <div className={styles.text}> همه مسابقات</div>
              </NavLink>
            </div>
          </div>
          <div className={styles.box3bottom}>
            <div className={styles.text2}>
              <div>
                در حال حاضر مسابقه فعالی وجود ندارد. می‌توانید سؤالات مسابقات
                برگزارشده را در قسمت سؤالات حل کنید.
              </div>
              <div>
                برای مطلع شدن از مسابقات جدید، به کانال تلگرام ما بپیوندید.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
