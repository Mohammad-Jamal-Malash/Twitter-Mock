import React from "react";
import { FaSearch } from "react-icons/fa";
import style from "./search.module.css";
const Search = () => {
  return (
    <div className={style.searchContainer}>
        <FaSearch className={style.searchIcon} />
        <input
          type="search"
          placeholder="Search"
          className={style.searchInput}
        ></input>
      </div>

  );
};

export default Search;
