import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/userFetching";
import PostService from "../API/PostService";
import PostTitle from "../components/Ui/PostsBlock/PostPageBlocks/PostTitle";
import PostComments from "../components/Ui/PostsBlock/PostPageBlocks/PostComments";
// import NavBar from "../components/Ui/NavBar/NavBar";

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  // Функция получения постов
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  // Получение комментариев
  // const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
  //   const response = await PostService.getCommentsById(id);
  //   setComments(response.data);
  // });

  // console.log(post);
  // useEffect(() => {
  //   // fetchPostById(params.id);
  //   fetchComments(params.id);
  // }, []); // <--- Не забывать массив в конце, уходит бесконечный цикл

  return (
    <div>
      <PostTitle id={params.id}/>

      <h1>Коментарии</h1>
      <PostComments id= {params.id}/>
    </div>
  );
};

export default PostPage;
//  {isLoading ? (
//         <Loader />
//       ) : (
//         <div>
//           <PostComments id={params.id}/>
//           {/* {comments.map((comm) =>
//             <div>
//               <h5>{comm.email}</h5>
//               <div>{comm.body}</div>
//               </div>
//             )} */}
//         </div>
//       )}