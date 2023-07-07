import React from 'react';
import { getPagesArray } from '../../utils/pages';

const Plagination = ({page, changePage, totalPages}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className="btn__wrapper">
        {pagesArray.map((p) => (
          <span
            key={p}
            onClick={() => changePage(p)}
            className={page === p ? "btn btn__current" : "btn"}
          >
            {p}
          </span>
        ))}
      </div>
    );
};

export default Plagination;