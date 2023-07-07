import React, { useState } from "react";
import "./styles/main.css"

// Двухстороннее  связывание, управляемый компонент
const ValueBlock = function () {
  const [value, setValue] = useState("");

  return (
    <div className="value_block">
      <h1> Value block </h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <h2>Введенный текст: {value}</h2>
    </div>
  );
};

export default ValueBlock;
