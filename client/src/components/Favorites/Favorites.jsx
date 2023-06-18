import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import style from "./Favorites.module.css";
import { filterCardsGender , orderCrads , filterCardsSpecies , filterCardsStatus } from "../../redux/action";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {

   console.log(myFavorites);

  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCrads(event.target.value));
    setAux(true);
  };

  const handleFilterGender = (event) => {
    dispatch(filterCardsGender(event.target.value));
  };

  const handleFilterSpecies = (event) => {
    dispatch(filterCardsSpecies(event.target.value));
  };

  const handleFilterStatus = (event) => {
    dispatch(filterCardsStatus(event.target.value));
  };



  return (
    
    <div className={style.Container}>
      <div className={style.ContainerSelectores}>
        <select onChange={handleOrder} className={style.select}>
          <option value="A" className={style.options}>
            Ascendente
          </option>
          <option value="D" className={style.options}>
            Descendente
          </option>
        </select>

        <select onChange={handleFilterGender} className={style.select}>
          <option value="Male" className={style.options}>
            Male
          </option>
          <option value="Female" className={style.options}>
            Female
          </option>
          <option value="Genderless" className={style.options}>
            Genderless
          </option>
          <option value="unknown" className={style.options}>
            unknown
          </option>
          <option value="allCharacters" className={style.options}>
            All Characters
          </option>
        </select>

        <select onChange={handleFilterStatus} className={style.select}>
          <option value="Alive" className={style.options}>
            Alive
          </option>
          <option value="Dead" className={style.options}>
            Dead
          </option>
          <option value="unknown" className={style.options}>
            Unknown
          </option>   
          <option value="allCharacters" className={style.options}>
            All Characters
          </option>       
        </select>

        <select onChange={handleFilterSpecies} className={style.select}>
          <option value="Human" className={style.options}>
            Human
          </option>
          <option value="Animal" className={style.options}>
            Animal
          </option>
          <option value="Alien" className={style.options}>
            Alien
          </option>      
          <option value="Robot" className={style.options}>
            Robot
          </option>     
          <option value="Humanoid" className={style.options}>
            Humanoid
          </option>  
          <option value="Mythological Creature" className={style.options}>
          Mythological Creature
          </option>  
          <option value="Cronenberg" className={style.options}>
          Cronenberg
          </option> 
          <option value="allCharacters" className={style.options}>
            All Characters
          </option>          
        </select>

      </div>

      <div className={style.CardsContainer}>
       
        {
          //siempre preguntar si hay algo, si no se rompe todo
          myFavorites?.map((fav) => {
            return (
              <Card
                key={fav.id}
                id={fav.id}
                name={fav.name}
                status={fav.status}
                species={fav.species}
                gender={fav.gender}
                origin={fav.origin.name}
                image={fav.image}
                
              />
            );
          })
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, null)(Favorites);
