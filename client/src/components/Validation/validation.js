const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validation = (userData) => {
  let errors = {};

  //!userData.name ? errors.name = "Se requiere un nombre" : errors.name =""
  !userData.email
    ? (errors.email = "X Se requiere un correo electronico")
    : (errors.email = "");
  userData.email.length > 35
    ? (errors.email = "X No debe tener mas de 35 caracteres")
    : (errors.email = "");
  !regexEmail.test(userData.email)
    ? (errors.email = "X El email ingresado no es valido")
    : (errors.email = "");
  userData.password.length >= 6 && userData.password.length <= 10
    ? (errors.password =
        "X La contraseña debe tener una longitud entre 6 y 10 caracteres.")
    : (errors.password = "");
  !/\d/.test(userData.password)
    ? (errors.password = "X La contraseña debe tener al menos un número.")
    : (errors.password = "");

  return errors;
};

export default validation;

// import {Link} from 'react-router-dom';
// import { useState } from 'react';
// import validation from './validationForm';
// import style from './Form.module.css';

// const Form = ({login}) => {

//     const [userdata,setData] = useState({
//         email:'',
//         password:'',
//     });

//     const [errors,setErrors] = useState({});

//     const handleChange = (event) => {

//         const property = event.target.name;

//         const value = event.target.value;

//         setData({...userdata, [property]:value,});

//         setErrors(validation({...userdata,[property]:value,}));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         login(userdata);
//     };

//     return (
//         <div className={style.containForm}>

//             <form className={style.form}>

//                 <label htmlFor="email">Email: </label>
//                 <input className={errors.email ? style.warning : style.succes} type="text" placeholder='Debe colocar su email...' name='email' value={userdata.email} onChange={handleChange} />
//                 {errors.email && <span className={style.error}>{errors.email}</span>}

//                 <label htmlFor="password">Password: </label>
//                 <input className={errors.email ? style.warning : style.succes} type="text" placeholder='Debe colocar su contraseña...' name='password' value={userdata.password} onChange={handleChange} />
//                 {errors.password && <span className={style.error}>{errors.password}</span>}

//                 <button type="submit" onClick={handleSubmit}>Ingresar</button>

//             </form>

//             <Link to="/home">
//             <button>Volver</button>
//             </Link>

//         </div>
//     );
// }

// export default Form;
