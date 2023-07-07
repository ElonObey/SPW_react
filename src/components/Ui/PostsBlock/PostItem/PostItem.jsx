import React from "react";
// import "./styles/main.css";
import Mybutton from "../../button/Mybutton";
import { useLocation, useNavigate } from "react-router-dom";
import style from "../Post.module.css";

function PostItem(props) {
  const router = useNavigate();

  // const router = useLocation()
  // console.log(router.pathname)

  return (
    <div className={style.post}>
      <div className={style.post_content}>
        <div className={style.post_head}>
          {props.post.id}. {props.post.title}
        </div>
        <div className={style.post_content}> {props.post.body} </div>
      </div>
      <div className="post-btns">
        {/* <Mybutton onClick={() => console.log(router.pathname +"/"+ props.post.id)}>Открыть</Mybutton> */}
        <Mybutton onClick={() => router("/posts/" + props.post.id)}>
          Открыть
        </Mybutton>
        <Mybutton onClick={() => props.remove(props.post)}>Удалить</Mybutton>
      </div>
    </div>
  );
}

export default PostItem;
