import React, { useRef, useState } from "react";
import Mybutton from "./Ui/button/Mybutton";
import Myinput from "./Ui/input/Myinput";

// { posts, setPosts }
const InputForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const addNewPost = (e) => {
    // Предотвращение обновления при вводе информации в поля
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <div>
      <h1>Input form</h1>
      <form>
        {/* Так же управляемый компонент */}
        <Myinput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />
        <Myinput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Содержимое поста"
        />

        <Mybutton onClick={addNewPost}> Создать пост </Mybutton>
      </form>
    </div>
  );
};

export default InputForm;
