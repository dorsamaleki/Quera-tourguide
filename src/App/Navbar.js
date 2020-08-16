import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import universityicon from "../icon/universityicon.png";
import codeicon from "../icon/codeicon.png";
import coffeeicon from "../icon/coffeeicon.png";
import briefcaseicon from "../icon/briefcaseicon.png";
import graduationcapicon from "../icon/graduationcapicon.png";

export const Navbar = (props) => {
  return (
    <div className={styles.root}>
      <NavLink to="/dashboard">
        <img
          src="https://cdn.quera.ir/images/logo/logo-q.0-3aee17faf53e.svg"
          alt="quera logo"
          className={styles.queralogo}
          id="tour1"
          onClick={props.onLogoClick}
        />
      </NavLink>
      <NavLink to="/overview">
        <div
          className={styles.overview}
          id="tour3"
          onClick={props.onClassClick}
        >
          <img src={universityicon} alt="university icon" />
          کلاس ها
        </div>
      </NavLink>
      <NavLink to="/problemset">
        <div
          className={styles.problems}
          id="tour11"
          onClick={props.onProblemSetClick}
        >
          <img src={codeicon} alt="code icon" />
          سوالات
        </div>
      </NavLink>
      <NavLink to="/contest">
        <div
          className={styles.contest}
          id="tour13"
          onClick={props.onContestClick}
        >
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
      <div onClick={props.onIconPress} className={styles.help}>
        ?
      </div>
    </div>
  );
};
