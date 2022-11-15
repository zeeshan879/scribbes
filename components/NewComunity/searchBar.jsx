import React from "react";
import nc from "../../Asstes/style/new_community.module.css";

const SearchBar = () => {
  return (
    <>
      <div className={nc.search_main_box}>
        <div className={nc.search_container}>
          <input placeholder="Search " className={nc.ip_ele} />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
