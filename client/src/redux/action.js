import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER_GENDER,
  ORDER,
  FILTER_SPECIES,
  FILTER_STATUS,
} from "./action-types";
import axios from "axios";

// export const addFav = (character) => {
//   return {
//     type: ADD_FAV,
//     payload: character,
//   };
// };
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};

// export const removeFav = (id) => {
//   return {
//     type: REMOVE_FAV,
//     payload: id,
//   };
// };

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint)
    .then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
  };
};

export const filterCardsGender = (gender) => {
  return { type: FILTER_GENDER, payload: gender };
};

export const filterCardsSpecies = (species) => {
  return { type: FILTER_SPECIES, payload: species };
};

export const filterCardsStatus = (status) => {
  return { type: FILTER_STATUS, payload: status };
};

export const orderCrads = (order) => {
  return { type: ORDER, payload: order };
};
