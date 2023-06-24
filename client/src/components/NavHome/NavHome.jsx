import style from "../NavHome/NavHome.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Rick_and_Morty.svg.png";
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";

const NavHome = ({setAccess }) => {
 
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

          <NavLink to="/characters">
            <button className={style.button}>Game</button>
          </NavLink>
        </div>
      </div>

      <div className={style.conteinerIntruction}>
        <div>
          <img src={logo} alt="logo" className={style.logo}></img>
        </div>
      </div>
    </nav>
  );
};

export default NavHome;
