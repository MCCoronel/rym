import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER_GENDER,
  ORDER,
  FILTER_SPECIES,
  FILTER_STATUS,
} from "./action-types";


const initialState = {
  myFavorites: [],
  allFavCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case ADD_FAV:
    //   const exists = state.myFavorites?.find(
    //     (character) => character.id === payload.id
    //   );
    //   if (exists) {
    //     // La carta ya está marcada como favorita, no hacemos nada
    //     return state;
    //   }

    //   const allFavSet = new Set(
    //     state.allFavCharacters?.map((character) => character.id)
    //   );
    //   if (allFavSet.has(payload.id)) {
    //     // El personaje ya está en la lista allFavCharacters, no hacemos nada
    //     return state;
    //   }

    //   return {
    //     ...state,
    //     myFavorites: [...state.myFavorites, payload],
    //     allFavCharacters: [...state.allFavCharacters, payload],
    //   };

    case ADD_FAV:
      return { ...state, myFavorites: payload, allFavCharacters: payload };

    // case REMOVE_FAV:
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter((fav) => fav.id !== payload),
    //   };
    
    case REMOVE_FAV:
      return { ...state, myFavorites: payload };

    case FILTER_GENDER:
      const allFavGenderFiltered = state.allFavCharacters.filter((character) => {
        return character.gender === payload
      })
      return {
        ...state,
        myFavorites:
          payload === "allCharacters"
            ? [...state.allFavCharacters]
            : allFavGenderFiltered,
      };
    case FILTER_SPECIES:
      const allFavSpeciesFiltered = state.allFavCharacters.filter(
        (character) => character.species === payload
      );
      return {
        ...state,
        myFavorites:
          payload === "allCharacters"
            ? [...state.allFavCharacters]
            : allFavSpeciesFiltered,
      };
    case FILTER_STATUS:
      const allFavStatusFiltered = state.allFavCharacters.filter(
        (character) => character.status === payload
      );
      return {
        ...state,
        myFavorites:
          payload === "allCharacters"
            ? [...state.allFavCharacters]
            : allFavStatusFiltered,
      };
    case ORDER:
      const allFavCharactersCopy = [...state.allFavCharacters];
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? allFavCharactersCopy.sort((a, b) => a.id - b.id) // el ID del primero tiene q mer menor al ID del segunmdo
            : allFavCharactersCopy.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default reducer;

/*ADD_ FAV:espués de verificar si el personaje ya existe en myFavorites, creamos un conjunto allFavSet que contiene los identificadores únicos de los personajes en allFavCharacters. Luego, verificamos si el identificador del personaje que se va a agregar (payload.id) ya está presente en allFavSet utilizando allFavSet.has(payload.id).

Si el personaje ya está en allFavCharacters, no hacemos nada y simplemente devolvemos el estado actual sin realizar cambios. Esto evita que se agreguen personajes duplicados a allFavCharacters.

Si el personaje no está duplicado en allFavCharacters, procedemos a agregarlo tanto a myFavorites como a allFavCharacters como lo hacíamos anteriormente.*/
