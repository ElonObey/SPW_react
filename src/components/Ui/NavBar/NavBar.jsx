import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import style from "./NavBar.module.css";
import Mybutton from "../button/MyButton/Mybutton";
import { useAuth } from "../../../hooks/useAuth";


const NavBar = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { user, signout } = useAuth();
  // console.log(user)
  return (
    <>
      <section className={style.head}>
        <div className={style.item}>
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
          <div className={style.component}>
            <Link to="/navbar"> NavBars</Link>
          </div>
          <div className={style.component}>
            <Link to="/containers"> Containers </Link>
          </div>
        </div>
        <div className={style.btns}>
          <Mybutton onClick={goBack}> Назад </Mybutton>
          {user ? (
            <Mybutton
              onClick={() =>
                signout(() => navigate("/login", { replace: true }))
              }
            >
              Выйти
            </Mybutton>
          ) : (
            <Mybutton onClick={() => navigate("/login", { replace: true })}>
              Войти
            </Mybutton>
          )}
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default NavBar;
