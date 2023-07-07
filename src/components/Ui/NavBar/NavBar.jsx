import React from "react";
import { Link, Outlet } from "react-router-dom";
import style from "./NavBar.module.css";



const NavBar = () => {
  return (
    <>
      <section className={style.head}>
        <div className={style.component}>
          <Link to="/about"> About </Link>
        </div>
        <div className={style.component}>
          <Link to="/posts"> Posts </Link>
        </div>
        <div className={style.component}>
          <Link to="/counter"> Counters </Link>
        </div>
        <div className={style.component}>
          <Link to="/value"> Value </Link>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default NavBar;