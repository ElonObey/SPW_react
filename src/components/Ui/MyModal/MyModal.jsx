import React from "react";
import style from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  const rootClausses = [style.MyModal];

  if (visible == true) {
    rootClausses.push(style.active);
  }

  return (
    <div className={rootClausses.join(' ')} onClick={() => setVisible(false)}>
      <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default MyModal;
