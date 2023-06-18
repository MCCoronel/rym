import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setID] = useState([]);

  const handleChange = (event) => {
    setID(event.target.value);
  };

  return (
    <div className={style.bar}>
      <input
        className={style.SearchInput}
        onChange={handleChange}
        value={id}
        type="search"
      />
      <button
        className={style.SearchButton}
        onClick={() => {
          onSearch(id);
          setID("");
        }}
      >
        Search
      </button>
    </div>
  );
}
//id es mi ESTADO LOCAL, QUE ES? LO QUE ESCRIBE EL USUARIO;

//si pongo{onsearch} no estoy enviando el parametro que necesita, por eso usamos una funcion que ejecuta una funcion onsearch
