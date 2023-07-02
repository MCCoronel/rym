/*En este componente se encontrara informacion sobre mi*/
/*AGREGAR logos con el link a mi perfil de linkedin y github*/

import style from "./AboutMe.module.css";
import ProfileImg from "../../assets/yo1.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import logoHTML from "../../assets/logoHTML.png";
import logoJS from "../../assets/logoJS.png";
import logoREACT from "../../assets/logoREACT.png";
import logoRedux from "../../assets/logoRedux.png";
import logoCSS from "../../assets/logoCSS.png";

const AboutMe = () => {
  return (
    <div className={style.content}>
      

      <div className={style.container}>
        <div>
          <img src={logoHTML} alt="html" className={style.logos} />
          <img src={logoCSS} alt="css" className={style.logoCSS} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={logoJS} alt="js" className={style.logoJS} />
          &nbsp;&nbsp;
          <img src={logoRedux} alt="redux" className={style.logoRedux} />
          &nbsp;&nbsp;
          <img src={logoREACT} alt="react" className={style.logos} />
        </div>


        <div className={style.description}>
          <div className={style.imageContainer}>
            <img
              src={ProfileImg}
              alt="Maria Celeste Coronel"
              className={style.image}
            />
        <div className={style.redes}>
          <a
            href="https://www.linkedin.com/in/maria-celeste-coronel-b93837249//"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={70} className={style.linkedin} />
          </a>

          <a
            href="https://www.instagram.com/mcelestecrnl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={70} className={style.instagram} />
          </a>
          <a
            href="https://github.com/MCCoronel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={70} margin-right={50} className={style.github} />
          </a>
        </div>
          </div>
          <div className={style.texto}>
          
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
