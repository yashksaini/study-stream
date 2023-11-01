import React from "react";
import style from "./searchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchInput } from "../redux/searchInput";

const SearchBar = () => {
  const dispath = useDispatch();
  const { text } = useSelector((state) => state.searchInput);
  return (
    <>
      <div className={style.searchBox}>
        <input
          type="search"
          placeholder="Type course name, instructor, etc..."
          onChange={(e) => {
            dispath(changeSearchInput(e.target.value));
          }}
          value={text}
        />
        <button>
          <img src="images/search.png" alt="Search"></img>
        </button>
      </div>
    </>
  );
};

export default SearchBar;
