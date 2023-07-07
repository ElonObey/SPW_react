import React, { useState } from "react";

// Двухстороннее  связывание, управляемый компонент
const ValueBlock = function () {
  const [value, setValue] = useState("");

  return (
    <div>
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
