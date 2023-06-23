let myFavorites = [];
console.log(myFavorites);

const postFav = (req, res) => {

  const character = req.body;

   const exists= myFavorites.some( (fav) => fav.id === character.id)

   if(!exists) myFavorites.push(character);

  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  const myFavorites1 = myFavorites.filter((fav) => fav.id != +id);

  console.log(myFavorites);

  myFavorites = [...myFavorites1]

  return res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
