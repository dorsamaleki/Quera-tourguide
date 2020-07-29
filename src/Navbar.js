import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className={styles.root}>
      <NavLink to="/">jj</NavLink>
      <NavLink to="/classes">gg</NavLink>
    </div>
  );
};
