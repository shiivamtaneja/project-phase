import React from "react"

import ArrowDownIcon from "../../../../assets/Icons/ArrowDownIcon"
import ArrowRightIcon from "../../../../assets/Icons/ArrowRightIcon"

const NavTitle = ({ title, icons }) => {
  return (
    <div className="flex items-center justify-between pb-5">
      {icons ? (
        <>
          <h3 className="font-bold lg:text-xl ">{title}</h3>
          <ArrowDownIcon />
        </>
      ) : (
        <>
          <h3 className="font-bold lg:text-xl ">{title}</h3>
          <ArrowRightIcon />
        </>
      )}
    </div>
  );
};

export default NavTitle;
