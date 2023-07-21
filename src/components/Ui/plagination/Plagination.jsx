import React from "react";
import { getPagesArray } from "../../utils/pages";
import { Pagination } from "@mui/material";

const Plagination = ({ page, changePage, totalPages }) => {
  let pagesArray = getPagesArray(totalPages);
  const handleChange = (event, value) => {
    changePage(value)
  };
  return (
    <>
      <Pagination count={totalPages} shape="rounded" onChange={handleChange} />

      {/* <div className="btn__wrapper">
        {pagesArray.map((p) => (
          <span
            key={p}
            onClick={() => changePage(p)}
            className={page === p ? "btn btn__current" : "btn"}
          >
            {p}
          </span>
        ))}
      </div> */}
    </>
  );
};

export default Plagination;
