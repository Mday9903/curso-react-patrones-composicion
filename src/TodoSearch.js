import { useState } from "react";
import "./TodoSearch.css";

const TodoSearch = (props) => {
  return (
    <div className="SearchContainer">
      <input
        className="SearchContainer__input"
        type="text"
        placeholder=""
        value={props.searchValue}
        onChange={(event) => props.setSearchValue(event.target.value)}
      />
    </div>
  );
};

export { TodoSearch };
