import React from "react";
import { SideBar } from "../components";

const Search = () => {
  return (
    <div className="search">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="topbar">topbar</div>
      <div className="results">results</div>
    </div>
  );
};

export default Search;
