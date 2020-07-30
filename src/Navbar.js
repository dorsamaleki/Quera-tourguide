import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import universityicon from "./universityicon.png";
import codeicon from "./codeicon.png";
import coffeeicon from "./coffeeicon.png";
import briefcaseicon from "./briefcaseicon.png";
import graduationcapicon from "./graduationcapicon.png";
export const Navbar = () => {
  return (
    <div className={styles.root}>
      <NavLink to="/">
        <img
          src="https://cdn.quera.ir/images/logo/logo-q.0-3aee17faf53e.svg"
          alt="quera logo"
          className={styles.queralogo}
        />
      </NavLink>
      <NavLink to="/overview">
        <div className={styles.overview}>
          <img src={universityicon} alt="university icon" />
          کلاس ها
        </div>
      </NavLink>
      <NavLink to="/problemset">
        <div className={styles.problems}>
          <img src={codeicon} alt="code icon" />
          سوالات
        </div>
      </NavLink>
      <NavLink to="/contest">
        <div className={styles.contest}>
          <img src={coffeeicon} alt="coffee icon" />
          مسابقات
        </div>
      </NavLink>
      <NavLink to="/careers">
        <div className={styles.careersjob}>
          <img src={briefcaseicon} alt="briefcase icon" />
          استخدام
        </div>
      </NavLink>
      <NavLink to="/college">
        <div className={styles.college}>
          <img src={graduationcapicon} alt="graduationcap icon" />
          کالج
        </div>
      </NavLink>
      <NavLink to="/careers">
        <div className={styles.careersfair}>
          <img
            src="https://cdn.quera.ir/careers_fair/images/logo-color.0-4472ad6aab00.png"
            alt="careersfair logo"
          />
          Career Days
        </div>
      </NavLink>
    </div>
  );
};