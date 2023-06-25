
import style from "./Home.module.css";
import video from "../../assets/Rick Sanchez comp for editing.mp4";
import { Link } from 'react-router-dom';
import imgSection1 from "../../assets/section1.jpeg";
import imgSection2 from "../../assets/section21.webp";
import imgSection3 from "../../assets/section31.jpg";
import imgSection4 from "../../assets/section41.jpg";
import imgSection5 from "../../assets/section51.png";
import imgFooter from "../../assets/Rick-And-Morty-Background-PNG.png"




const Home = () => {
    return (
        <div className={style.Home}>

            <div className={style.flexColumn}>
                <div className={style.ContainerHome}>

                    <div className={style.ContainerIntro}>
                        <div>
                            <h5 className={style.cardGame}>CARD GAME</h5>
                        </div>

                        <div>
                            <p className={style.intro}>
                                All right, Morty, let me explain to you how that card game you’ve imagined would work. Get ready for an interdimensional adventure of strategy and fun. In this game, let’s call it "Interdimensional Clash", players will have the opportunity to choose their favorite characters from a selection of 826 options. These characters could range from superheroes and villains to magical creatures and otherworldly beings. The possibilities are endless, Morty!
                            </p>
                        </div>

                        {/* <Link to='/characters'>
                            <img src={image} alt="" className={style.imagen} />
                        </Link> */}

                    </div>


                    <div className={style.cardContainer}>


                        {/* <div className={style.ContainerVideo}>
                        <video
                            src={video}
                            autoPlay
                            muted
                            controls
                            loop
                            className={style.videoHome}
                        ></video>
                  
                       
                    </div> */}

                        <section className={style.section}>

                            <img src={imgSection1} alt='img' className={style.imgSection} />
                            <img src={imgSection2} alt='img' className={style.imgSection} />
                            <img src={imgSection3} alt='img' className={style.imgSection} />
                            <img src={imgSection4} alt='img' className={style.imgSection} />
                            <img src={imgSection5} alt='img' className={style.imgSection} />

                        </section>

                    </div>



                </div>
                <Link to="/characters">
                <button data-text="Awesome" className={style.button}>
                    <span className={style.actualText}>&nbsp;PLAY&nbsp;</span>
                    <span className={style.hoverText} aria-hidden="true">&nbsp;PLAY&nbsp;</span>
                </button>
                </Link>
                <div className={style.footer}>
                    <span className={style.span}>
                        <img src={imgFooter} alt='imgFooter' className={style.imgFooter} />
                        <p>© 2023 MCCoronel. Todos los derechos reservados.</p>
                    </span>
                </div>


            </div>
        </div>
    );
};

export default Home;
