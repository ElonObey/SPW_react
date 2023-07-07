import React from "react";
import MySelect from "./Ui/select/MySelect";
import Myinput from "./Ui/input/Myinput";
import "./styles/main.css"

const PostFilter = ({filter, setFilter}) => {

  return (
    <div className="post_filter">
      <Myinput
        placeholder="Поиск"
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Сортировка по"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
