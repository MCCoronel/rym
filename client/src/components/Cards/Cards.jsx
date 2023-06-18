import Card from "../Card/Card";
import style from "./Cards.module.css";
//import Loading from '../Loading/Loading.jsx'

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.CardsContainer}>
      {characters.map(
        ({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              key={id} //esta key solo es para uso interno de react, no podemos acceder al valor de la key,se la grega cuando necesitamos usar una plantilla para que React pueda diferenciar la informacion de las diferentes plantillas
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
}
