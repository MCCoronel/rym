
import { NavLink } from "react-router-dom";
import style from "./NavDetail.module.css";
import logo from "../../assets/Rick_and_Morty.svg.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";

const NavDetail = ({ setAccess }) => {
  

  const navigate = useNavigate();


  const handleLogOut = () => {
    setAccess(false);
    navigate("/");
  };

 

  return (
    <nav className={style.navBar}>
      <div className={style.conteinerButtons}>
        <div className={style.conteinerButtons2}>
        <button className={style.button} onClick={handleLogOut}>
          <FontAwesomeIcon icon={faRightFromBracket} className={style.close}/>
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

      </div>

      <div className={style.conteinerIntruction}>
        <div>
          <img src={logo} alt="logo" className={style.logo}></img>
        </div>

        <h3 className={style.h3}>Hey hey! Here we are in the detail of a character! Wow, that is amazing! Get ready to immerse yourself in the life of this extraordinary being and discover all the fascinating details about him.</h3>
      </div>
    </nav>
  );
};

export default NavDetail;