import "./App.css";
import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards.jsx";
import style from "./App.module.css";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import AboutMe from "./components/About/AboutMe";
import Favorites from "./components/Favorites/Favorites";
import Login from "./components/Login/Login";
import ErrorPage from "./components/ErrorPage/ErrorPage";


function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
 // const EMAIL = "credential@gmail.com";
  //const PASSWORD = "credential2";
  const [characters, setCharacters] = useState([]);

  // const [loading, setLoading] = useState(false);

  // const cambiarEstado= ()=>{
  //   setLoading(true);
  //   setTimeout(()=>{
  //     setLoading(false);
  //   }, 5000)
  // }

  //Crea una función llamada "login" que reciba por parámetro "userData". Esta función tiene que preguntar si el email y password que declaraste más arriba son iguales a los que les está llegando por parámetro. En caso afirmativo, el estado local access ahora será true. Importa el hook "useNavigate" de react-router-dom y haremos que nos redirija a /home si la inuserDataación es correcta.

  // const login = (userData) => {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);

  //     navigate("/home");
  //   } else {
  //     alert("tu email o contraseña no son correctas");
  //   }
  // };

  const login = (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login';
    axios(URL + `?email=${email}&password=${password}`)
    .then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
    });
  }

  //el array de dependencia simula el UpDATE, que en este caso tiene q estar pendiente de access, si access no es true, no me va a llevar a otra ruta que no sea "/",si es true me va a llevar a home y me va a renderizar el resto de los componentes

  // useEffect(() => {
  //    !access && navigate('/');
  // }, [access]);

  // function onSearch(id) {
  //   axios(`https://rickandmortyapi.com/api/character/${id}`)
  //     .then(({ data }) => {
  //       if (data.name) {
  //         const characterExists = characters.some(
  //           (character) => character.id === data.id
  //         );
  //         if (characterExists) {
  //           window.alert("¡Este personaje ya está en pantalla!");
  //         } else {
  //           setCharacters((oldChars) => [...oldChars, data]);
  //         }
  //       } else {
  //         window.alert("¡No hay personajes con este ID!");
  //       }
  //     })
  //     .catch((error) => {
  //       if (error.response && error.response.status === 404) {
  //         window.alert("¡Solo hay 826 personajes!");
  //       } else {
  //         window.alert("¡Ocurrió un error al buscar el personaje!");
  //       }
  //     });
  // }

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          const characterExists = characters.some(
            (character) => character.id === data.id
          );
          if (characterExists) {
            window.alert("¡Este personaje ya está en pantalla!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.log(error.response);
          window.alert("¡Solo hay 826 personajes!");
        } else {
          window.alert("¡Ocurrió un error al buscar el personaje!");
        }
      });
  }

  // el catch captura cualquier error con la solicitud a axios

  const onClose = (id) => {
    const FilteredCharacter = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(FilteredCharacter);
  };
  
  //En el código actualizado, se utiliza el gancho useLocation de react-router-dom para obtener la ubicación actual. Luego, se utiliza location.pathname para determinar si la barra de navegación debe mostrarse o no. Si la ubicación es diferente a '/', se muestra la barra de navegación (<Nav />).

  //De esta manera, la barra de navegación se mostrará en todas las rutas excepto en la ruta de inicio de sesión ('/').

  const location = useLocation();
  const showNav = location.pathname !== "/";

  //Pasé la función login como una prop llamada login al componente Login en la ruta "/". Esto permitirá que el componente Login llame a la función login cuando el usuario intente iniciar sesión.



  return (
    <div className="App">

      {!access ? (
        <>
          <Routes>
            <Route path="/" element={<Login login={login} />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </>
      ) : (

        <>
          {showNav && (
            <Nav
              className={style.BarraAgregar}
              onSearch={onSearch}
              setAccess={setAccess}
            />
          )}

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<ErrorPage access={access} />} />
            <Route
              path="/characters"
              element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
