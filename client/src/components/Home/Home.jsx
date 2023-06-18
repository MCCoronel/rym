
import style from "./Home.module.css";
import video from "../../assets/Rick Sanchez comp for editing.mp4";
import { Link } from 'react-router-dom';
import image from '../../assets/Rick-And-Morty-Background-PNG.png';
// import image from '../../assets/cardd.jpg';



const Home = () => {
    return (
        <div className={style.Home}>

            <div className={style.ContainerHome}>


                <div className={style.ContainerIntro}>

                    <div>
                        <h5 className={style.cardGame}>CARD GAME</h5>
                    </div>

                    <div>
                        <p className={style.intro}>
                            Muy bien, Morty, déjame explicarte cómo funcionaría ese juego de
                            cartas que has imaginado. Prepárate para una aventura
                            interdimensional de estrategia y diversión. En este juego,
                            llamémoslo "Interdimensional Clash", los jugadores tendrán la
                            oportunidad de elegir sus personajes favoritos de una selección de
                            826 opciones. Estos personajes podrían ser desde superhéroes y
                            villanos hasta criaturas mágicas y seres de otros mundos. ¡Las
                            posibilidades son infinitas, Morty!
                        </p>
                    </div>

                    {/* <Link to='/characters'>
                            <img src={image} alt="" className={style.imagen} />
                        </Link> */}

                </div>

               
                <div className={style.cardContainer}>
                    
                    
                        <div className={style.ContainerVideo}>
                        <video
                            src={video}
                            autoPlay
                            muted
                            controls
                            loop
                            className={style.videoHome}
                        ></video>
                  
                       
                    </div>

                </div>

           
            </div>
        </div>
    );
};

export default Home;
