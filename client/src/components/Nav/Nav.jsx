import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
import logo from "../../assets/Rick_and_Morty.svg.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Nav = ({ onSearch, setAccess }) => {
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    setAccess(false);
    navigate("/");
  };

  function generateRandomId() {
    return Math.floor(Math.random() * 826) + 1;
  }

  const handleAddRandomCharacter = () => {
    const randomId = generateRandomId();

    axios(`https://rickandmortyapi.com/api/character/${randomId}`)
      .then(({ data }) => {
        if (data.name) {
          const existe = characters.some((char) => char.id === data.id);
          if (existe) {
            window.alert("¡Este personaje ya está en la lista!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No se encontraron personajes con este ID!");
        }
      })
      .catch((error) => {
        console.error("Error al obtener el carácter:", error.message);
        window.alert("¡Error al obtener los datos del carácter!");
      });
  };

  let h3Text = "";
  switch (location.pathname) {
    case "/home":
      h3Text= "ESTO ES HOME";
      break;
    case "/about":
      h3Text =
        "Are you looking for the great creator of this page? Don't worry, because you found it! She is the mastermind behind all of this. Rick Sanchez";
      break;
    case "/character":
      h3Text =
        "Wubba lubba dub dub! Get ready to unleash your imagination and explore a universe full of endless possibilities. Every number from 1 to 826 can be the starting point for a new and exciting adventure. Start creating your characters!";
      break;
    case "/favorites":
      h3Text =
        "Burp! These are the chosen ones! This is where you can find your favorite characters from all the universes, Wubba lubba dub dub!";
      break;

    default:
      h3Text =
        "Hey hey! Here we are in the detail of a character! Wow, that is amazing! Get ready to immerse yourself in the life of this extraordinary being and discover all the fascinating details about him";
  }

  return (
    <nav className={style.navBar}>
      <div className={style.conteinerButtons}>
        <div className={style.conteinerButtons2}>
          <button className={style.button} onClick={handleLogOut}>
            Log Out
          </button>

          <NavLink to="/about">
            <button className={style.button}>About me</button>
          </NavLink>

          <NavLink to="/favorites">
            <button className={style.button}>Favorites</button>
          </NavLink>
          <NavLink to="/characters">
            <button className={style.button}>Characters</button>
          </NavLink>
          <NavLink to="/home" >
              <button className={style.button}>Home</button>
          </NavLink>
        </div>

        <div className={style.characters}>
          <button
            className={style.button}
            onClick={() => {
              handleAddRandomCharacter();
              onSearch(generateRandomId());
            }}
          >
            +Random Characters
          </button>
          <SearchBar onSearch={onSearch} />
        </div>
      </div>

      <div className={style.conteinerIntruction}>
        <div>
          <img src={logo} alt="logo" className={style.logo}></img>
        </div>

        <h3 className={style.h3}>{h3Text}</h3>
      </div>
    </nav>
  );
};

export default Nav;
