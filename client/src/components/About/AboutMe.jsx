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
            <FaLinkedin size={100} className={style.linkedin} />
          </a>

          <a
            href="https://www.instagram.com/mcelestecrnl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={100} className={style.instagram} />
          </a>
          <a
            href="https://github.com/MCCoronel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={100} margin-right={50} className={style.github} />
          </a>
        </div>
          </div>
          <div className={style.texto}>
          <p>
            ¡Saludos, compañeros! Soy Maria Celeste, una estudiante entusiasmada
            que está a punto de terminar la carrera en Ingeniería en Alimentos.
            Sin embargo, eso no es todo,¡hay más cosas en mi vida! En mi camino
            académico, me adentré en el increible mundo de la programación y
            todo cambió. Fue como descubrir un mundo paralelo con infinitas
            posibilidades. Ahí es donde encontré a Soy Henry, una comunidad
            educativa revolucionaria que me abrió las puertas a este emocionante
            mundo.
            </p>
            <p>
            ¡Me encanta aprender constantemente y enfrentar nuevos desafíos!
            Cada día, me sumerjo en lineas y lineas de código, explorando
            lenguajes de programación, resolviendo problemas y creando
            soluciones innovadoras.
            </p>        

           <p>
            En esta oportunidad, les presento mi primer proyecto "Rick and
            Morty" en donde he trabajado con JavaScript, que me ha permitido dar
            vida a cada línea de código y crear una experiencia interactiva y
            dinámica.
            </p>
             <p>
              React, biblioteca que me permitio trabajar con las interfaces de
              usuario de forma ordenada mediante la creacion de componentes. En
              la gestion de algunos estados trabaje con Redux, donde aprendi una
              forma mas equilibrada a la hora de transmitir informacion entre
              mis componentes.</p>
            <p>
            Por ultimo, pero no menos importante, en la forma y estilo de cada
            elemento de este proyecto trabaje con HTML Y CSS.
           </p>

              <p>Espero que les guste!!♥</p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
