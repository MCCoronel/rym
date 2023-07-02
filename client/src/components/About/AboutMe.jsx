/*En este componente se encontrara informacion sobre mi*/
/*AGREGAR logos con el link a mi perfil de linkedin y github*/

import style from "./AboutMe.module.css";
import ProfileImg from "../../assets/yo1.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const AboutMe = () => {
  return (
    <div className={style.container}>
    <div className={style.containerName}>
      <h5 className={style.name}>CORONEL, MARIA CELESTE</h5>
    </div>

    <div className={style.detail}>
      <div className={style.atributes}>
        <h2>STATUS | Alive</h2>
        <h2>&nbsp;&nbsp;&nbsp;GENDER | Female</h2>
        <h2>&nbsp;&nbsp;&nbsp;SPECIE | Human Developer</h2>
        <h2>ORIGIN | Earth(C-137)</h2>
      </div>

     
        <img
          className={style.imagen}
          src={ProfileImg}
          alt='Maria Celeste Coronel'
        />
      
    </div>
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
           
          
  );
};

export default AboutMe;
