
import { NavLink } from "react-router-dom";
import style from "./NavAbout.module.css";
import logo from "../../assets/Rick_and_Morty.svg.png";
import { useNavigate , useLocation} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";

const NavAbout = ({ setAccess }) => {

  const location = useLocation();
  const navigate = useNavigate();


  const handleLogOut = () => {
    setAccess(false);
    navigate("/");
  };
 
  let h3Text = "";
  switch (location.pathname) {
    
    case "/about":
      h3Text =
        "Are you looking for the great creator of this page? Don't worry, because you found it! She is the mastermind behind all of this. Rick Sanchez";
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
      
        <div className={style.conteinerButtons2}>
          <button className={style.button} onClick={handleLogOut}>
            <FontAwesomeIcon icon={faRightFromBracket} className={style.close} />
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

      

      <div className={style.conteinerIntruction}>
        <div>
          <img src={logo} alt="logo" className={style.logo}></img>
        </div>

        <h3 className={style.h3}>{h3Text}</h3>

      </div>
    </nav>
  );
};

export default NavAbout;