import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
// import ClassCounter from "../components/CounterBlock";
// import Counter from "../components/CounterBlock";
import InputForm from "../components/InputForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/Ui/PostsBlock/PostList";
import Loader from "../components/Ui/Loader/Loader";
import MyModal from "../components/Ui/MyModal/MyModal";
import Mybutton from "../components/Ui/button/MyButton/Mybutton";
import Plagination from "../components/Ui/plagination/Plagination";
// import Value from "../components/ValueBlock";
import { getPageCount } from "../components/utils/pages";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/userFetching";

function Posts() {
  const [posts, setPosts] = useState([
    // { id: 1, title: "War thunder", body: "No armor is best armor" },
    // { id: 2, title: "World of tanks", body: "MOOOORE tanks!" },
    // { id: 3, title: "Warface", body: "Imposter post" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  // const [isPostsLoading, setIsPostsLoading] = useState(false);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  // async function fetchPosts() {
  //   setIsPostsLoading(true);
  //   setTimeout(async () => {
  //     const posts = await PostService.getAll();
  //     setPosts(posts);
  //     setIsPostsLoading(false);
  //   }, 1000);
  // }
  // Получение поста из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  return (
    <div className="App">
      {/* Условная отрисовка. Использутся тернарный оператор. Замена if/else */}
      {/* <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов"
      /> */}

      {/* <button onClick={fetchPosts}>Get posts</button> */}

      <MyModal visible={modal} setVisible={setModal}>
        <InputForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1> Произошла ошибка ${postError}</h1>}
      <div className="posts-blk"></div>
      {isPostsLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список постов"
        />
      )}
      <div className="btn_pst">
        <Plagination
          page={page}
          changePage={changePage}
          totalPages={totalPages}
        />
        <Mybutton onClick={() => setModal(true)}> Создать пост </Mybutton>
      </div>
    </div>
  );
}

export default Posts;
