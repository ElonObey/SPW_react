import React, { useEffect, useState } from "react";
import { useFetching } from "../../../../hooks/userFetching";
import PostService from "../../../../API/PostService";
import Loader from "../../Loader/Loader";
import style from "../Post.module.css"

const PostComments = ({ id }) => {
  const [comments, setComments] = useState([]);

  const [fetchComments, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchComments(id);
  }, []);
  //   console.log(isLoading)
  return (
    <div>
      {comments.map((comm) => (
        <div className={style.postPage}>
          <h5>{comm.email}</h5>
          <div>{comm.body}</div>
        </div>
      ))}
    </div>
  );

};

export default PostComments;
