import style from "./Card.module.css";
//ya preparo el objeto que va a venir desde el archivo css
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/action";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
//import { FaHeart } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCircleXmark,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState();

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image, onClose }); //si modifico la card tengo que modificar addFav tambien
    }
  };

  // esta recorriendo el estado global, si fav.id es igual a id, setea isFav a true,

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  //useEffect se dispara cada vez que myFavorites cambia en valor debido a cambios en su contenido. Al hacer esto, se busca si id se encuentra en la lista de favoritos (representada por myFavorites) y si es así, se establece el estado local del componente isFava true. En este caso, el efecto se ejecutará una vez que se monte el componente y luego se ejecutará cada vez que cambie myFavorites.
  //Si yo dejo vacio el array de dependencias el efecto se ejecutara en cada renderizado del componente

  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <Link to={`/detail/${id}`}>
          <img src={image} alt="" className={style.imagen} />
        </Link>
        <div className={style.statusContainer}>
          {status === "Dead" ? (
            <h2 className={style.statusDead}>{status}</h2>
          ) : status === "unknown" ? (
            <h2 className={style.statusUnknown}>{status}</h2>
          ) : (
            <h2 className={style.statusAlive}>{status}</h2>
          )}
        </div>
        <div className={style.head}>
          <h2 className={style.name}>{name}</h2>
        </div>
      </div>

      <div className={style.cardInfo}>
        {/* <div className={style.description}>
              <h2>Specie: {species}</h2>
              <h2>Gender: {gender}</h2>
            <h2>Origin: {origin}</h2> */}

        <div className={style.botones}>
          <span>
            {!isFav ? (
              <button className={style.closebutton} onClick={() => onClose(id)}>
                <FontAwesomeIcon icon={faCircleXmark} className={style.close} />
              </button>
            ) : null}

            <Link to={`/detail/${id}`}>
              <FontAwesomeIcon
                icon={faAddressCard}
                className={style.detailButton}
              />
            </Link>

            <button onClick={handleFavorite} className={style.heartButton}>
              {isFav ? (
                <FontAwesomeIcon className={style.heart1} icon={faHeart} />
              ) : (
                <FontAwesomeIcon icon={faHeart} className={style.heart2} />
              )}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    }, // el removeFav que despachamos es el removeFav que trajimos de la action
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
