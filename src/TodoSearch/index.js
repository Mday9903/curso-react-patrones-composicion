import React from 'react'
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

const TodoSearch = () => {
  // Vamos a crear una variable en donde vamos a recibir las variables y metodos globales que vamos a utilizar en este componente.
  
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext)

  return (
    <div className="SearchContainer">
      <input
        className="SearchContainer__input"
        type="text"
        placeholder=""
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
};

export { TodoSearch };
