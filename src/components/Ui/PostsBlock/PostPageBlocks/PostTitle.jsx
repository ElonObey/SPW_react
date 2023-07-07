import React, { useEffect, useState } from "react";
import PostService from "../../../../API/PostService";
import { useFetching } from "../../../../hooks/userFetching";
import Loader from "../../Loader/Loader";
import style from "../Post.module.css";

const PostTitle = ({ id }) => {
  //   const params = useParams();
  const [post, setPost] = useState({});

  //   Функция получения постов
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById(id);
  }, []);
  return (
    <div className={style.postPage}>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className={style.postPage_header}>
            <h1>{post.title}</h1>
          </div>
          <div className={style.postPage_body}>
            <h3>{post.body}</h3>
          </div>
        </div>
      )}
    </div>
  );
};
// post.id, post.title

export default PostTitle;
