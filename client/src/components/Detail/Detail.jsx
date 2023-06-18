import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  console.log({ id });

  const [character, setCharacter] = useState({});

  // useEffect(() => {
  //   axios(`https://rickandmortyapi.com/api/character/${Number(id)}`)
  //     .then(({ data }) => {
  //       if (data.name) {
  //         setCharacter(data);
  //       } else {
  //         window.alert("No hay personajes con ese ID");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       window.alert("Error al obtener los datos del personaje");
  //     });
  // }, [id]);

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${Number(id)}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => {
        console.log(error);
        window.alert("Error al obtener los datos del personaje");
      });
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.containerName}>
        <h3 className={style.name}>{character.name}</h3>
      </div>

      <div className={style.detail}>
        <div className={style.atributes}>
          <h2>STATUS | {character.status}</h2>
          <h2>&nbsp;&nbsp;&nbsp;GENDER |{character.gender}</h2>
          <h2>&nbsp;&nbsp;&nbsp;SPECIE |{character.species}</h2>
          <h2>ORIGIN |{character.origin?.name}</h2>
        </div>

        <div className={style.imageContainer}>
          <img
            className={style.imagen}
            src={character.image}
            alt={character.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
