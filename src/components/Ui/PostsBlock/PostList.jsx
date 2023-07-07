import React from "react";
import PostItem from "./PostItem/PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import style from "./Post.module.css";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <div>Посты не найдены</div>;
  }

  return (
    <div>
      <div className={style.postlist_head}>
      <h1> {title} </h1>
      <hr />
      </div>
      
      <TransitionGroup className={style.post_block}>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500}>
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
