import React, { useState } from "react";
import styles from "./Write.module.css";

export const Write = (props) => {
  const [selected, setSelected] = useState("option1");

  const onValueChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <div className={styles.root} id="tour8">
      <div className={styles.text1}>نوشته جدید</div>
      <div className={styles.top}>
        <div className={styles.text2}>یادداشت</div>
        <div className={styles.text2}>پرسش</div>
      </div>
      <div>
        <label className={styles.text3}>
          <input
            type="radio"
            value="option1"
            checked={selected === "option1"}
            onChange={onValueChange}
          />
          عمومی
        </label>
        <label className={styles.text3}>
          <input
            type="radio"
            value="option2"
            checked={selected === "option2"}
            onChange={onValueChange}
          />
          خصوصی
        </label>
      </div>
      <div className={styles.text3}>عنوان</div>
      <input type="textbox" placeholder="عنوان" className={styles.textbox1} />
      <div className={styles.text3}>متن</div>
      <input type="textbox" className={styles.textbox2} />
      <br />
      <div className={styles.button1}>لغو</div>
      <div className={styles.button2}>ارسال</div>
    </div>
  );
};
