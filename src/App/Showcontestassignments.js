import React from "react";
import { useParams, NavLink } from "react-router-dom";
import styles from "./Showcontestassignments.module.css";
import { getContest } from "../api/getContest";

export const Showcontestassignments = () => {
  const contests = getContest();
  let { id } = useParams();
  const contest = contests.find((contest) => contest.id.toString() === id);
  if (!contest) {
    return <div>Question not found</div>;
  }
  return (
    <div className={styles.root} id="tour15">
      <div className={styles.sidebar}>
        <div>
          <div className={styles.text}>سوالات</div>
          {contest.questions.map((contestquestion) => (
            <NavLink
              to={
                "/contest" +
                contest.id.toString() +
                "/problems" +
                contestquestion.id.toString()
              }
              className={styles.nav}
            >
              <div className={styles.text}>{contestquestion.name}</div>
            </NavLink>
          ))}
          <div className={styles.text}>جدول امتیازات</div>
        </div>
      </div>
      <div className={styles.main}>
        <div>لینک‌های مفید برای شرکت در مسابقه:</div>
        <ul>
          <li>قالب صورت سوال</li>
          <li>نحوه کار با ورودی و خروجی</li>
          <li>قوانین شرکت در مسابقات</li>
          <li>دسترسی‌های برنامه</li>
          <li>اطلاعات بیشتر درباره مسابقه</li>
        </ul>
        <div>
          در قسمت آموزشی برای حل سوالات، سه سری راهنمایی به انتهای سوالات اضافه
          می‌شود. زمان اضافه شدن راهنمایی‌ها را می‌توانید در قسمت آموزشی پایین
          سوالات ببینید.‌ همچنین می‌توانید سوال‌های خود را از بخش "سوال بپرسید"
          مطرح کنید.
        </div>
      </div>
    </div>
  );
};
