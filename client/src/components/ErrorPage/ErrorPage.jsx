import style from "./ErrorPage.module.css";
import errorImage from "../../assets/ErrorFondo.png";
import { NavLink , useNavigate} from "react-router-dom";

const ErrorPage = ({access}) => {

  const navigate = useNavigate();

  const handleBack=()=>{
    if(access) navigate('/home')
    if(!access) navigate('/')
    
  }

  return (
    <>
      
        <button className={style.buttonLogIn} onClick={handleBack}>Back to the garage</button>
      

      <div>
        <img src={errorImage} alt="ERROR 404" className={style.error}></img>
      </div>
    </>
  );
};

export default ErrorPage;
