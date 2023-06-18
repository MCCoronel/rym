const { getCharById } = require("../controllers/getCharById.js");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const { login } = require("../controllers/login");

const router = require("express").Router();

//router.get('/character/:id' , getCharById)
// todas las pegadas de aqui comienzan con rickandmorty
router.get("/character/:id", getCharById);

router.get('/login', login)
// router.get("/login", (req, res) => {
//   login(req, res);
// });

router.post('/fav' , postFav)
// router.post("/fav", (req, res) => {
//   postFav(req, res);
// });

router.delete('/fav/:id' , deleteFav)

// router.delete("/fav/:id", (req, res) => {
//   deleteFav(req, res);
// });

module.exports = router;
