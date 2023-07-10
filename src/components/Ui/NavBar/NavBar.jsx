import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import style from "./NavBar.module.css";
import Mybutton from "../button/Mybutton";



const NavBar = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

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
        <Mybutton onClick={goBack}> Назад </Mybutton>
      </section>
      <Outlet />
    </>
  );
};

export default NavBar;
