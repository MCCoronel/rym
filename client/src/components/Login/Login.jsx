import { useState } from "react";
import style from "./Login.module.css";
import validation from "../Validation/validation";
import game from "../../assets/game4.png";
//import Loading from "../Loading/Loading";

const Login = ({ login }) => {
  console.log({ login });

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [show, setShow] = useState({
    credential: true,
  });

  const toggle = () => {
    setShow((prevState) => ({
      ...prevState,
      credential: !prevState.credential,
    }));
  };

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    console.log(event.target.value);
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  // La función event.preventDefault() se utiliza en JavaScript para detener el comportamiento predeterminado de un evento. Cuando se llama a event.preventDefault(), se cancela la acción predeterminada que normalmente se llevaría a cabo en respuesta a ese evento.

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.fondo}>
      <div className={style.imgForm}>
        <img src={game} alt="Rick and Morty Card Game" className={style.game} />

        <div className={style.container}>
          <div className={style.container2}>
            <form className={style.containForm} onSubmit={handleSubmit}>
              <h1 className={style.welcome}>Welcome,sign up to continue</h1>

              <div className={style.user}>
                {/* <label htmlFor="email" className={style.labelEmail}>Email:</label> */}
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={userData.email}
                  onChange={handleChange}
                  className={style.inputEmail}
                ></input>
              </div>
              <p className={style.danger}>{errors.email}</p>

              <div className={style.password}>
                {/* <label htmlFor="password" className={style.labelPassword}>Password:</label> */}
                <input
                  className={style.inputPassword}
                  type="text"
                  name="password"
                  placeholder="Enter your Password"
                  value={userData.password}
                  onChange={handleChange}
                ></input>
              </div>
              <p className={style.danger}>{errors.password}</p>

              <div className={style.btn}>
                <button type="submit" className={style.button}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SUBMIT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </button>
              </div>
              <button
                onClick={toggle}
                type="button"
                className={style.credential}
                name="credential"
              >
                Credential
              </button>
              {!show.credential && (
                <p className={style.datos}>
                  Email: credential@gmail.com <p>Password: credential2</p>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
