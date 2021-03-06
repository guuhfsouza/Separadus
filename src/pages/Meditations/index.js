import React from 'react'
import { useHistory } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';

import '../../global.css';
import './style.css'
import './styleMobile.css'

import Logo from '../../assets/Logo.png';
import Video from '../../videos/teste.mp4';

import Footer from '../Footer';

 function Meditation(){

        const history = useHistory();
//     const nav = document.getElementsByTagName('nav');
//     const imgNav = document.getElementsByClassName('fundo');

//     function removeImgMain(){
//         console.log(nav);
//         console.log(imgNav);
//        nav[0].removeChild(nav[0].lastChild)
//     }

//     removeImgMain();

    return(
        <div className="meditation-container">
                <nav id="nav">
                    <div className="logo">   
                        <img src={Logo} alt="Logo"/> 
                    </div>
                    <div className="options">   
                        <a onClick={e =>history.push('/')}><FaArrowLeft/>Voltar a tela pricipal</a> 
                    </div>
                </nav>
                <section className="meditation-mensage">
                    <h5>Vídeo da semana</h5>
                    {/* <iframe id="ytplayer" type="text/html" width="640" height="360"
                            src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                            frameborder="0"/> */}
                    <video controls autoPlay> 
                        <source src={Video} type="video/mp4" />
                    </video>
                    <div className="video-information">
                        <h1>Titulo</h1>
                        <span> Data: 27/05/2020 </span>
                        <span> Por: Thales </span>
                    </div>
                </section>
                <section className="meditation-list">
                    <h3>Ultimos vídeos</h3>
                    <ul>
                        <li>
                            <video  controls>
                                <source  src={Video} type="video/mp4" />
                            </video>
                            <div className="video-information">
                                <h4>Titulo</h4>
                                <span> Data: 27/05/2020 </span>
                                <span> Por: Thales </span>
                            </div>
                        </li>
                        <li>
                            <video  controls>
                                <source  src={Video} type="video/mp4" />
                            </video>
                            <div className="video-information">
                                <h4>Titulo</h4>
                                <span> Data: 27/05/2020 </span>
                                <span> Por: Thales </span>
                            </div>
                        </li>

                        <li>
                            <video  controls>
                                <source  src={Video} type="video/mp4" />
                            </video>
                            <div className="video-information">
                                <h4>Titulo</h4>
                                <span> Data: 27/05/2020 </span>
                                <span> Por: Thales </span>
                            </div>
                        </li>
                        <li>
                            <video  controls>
                                <source  src={Video} type="video/mp4" />
                            </video>
                            <div className="video-information">
                                <h4>Titulo</h4>
                                <span> Data: 27/05/2020 </span>
                                <span> Por: Thales </span>
                            </div>
                        </li>
                        <li>
                            <video  controls>
                                <source  src={Video} type="video/mp4" />
                            </video>
                            <div className="video-information">
                                <h4>Titulo</h4>
                                <span> Data: 27/05/2020 </span>
                                <span> Por: Thales </span>
                            </div>
                        </li>

                        <li>
                            <video  controls>
                                <source  src={Video} type="video/mp4" />
                            </video>
                            <div className="video-information">
                                <h4>Titulo</h4>
                                <span> Data: 27/05/2020 </span>
                                <span> Por: Thales </span>
                            </div>
                        </li>
                    </ul>
                </section>            
            <Footer/>
        </div>
    );
}


export default Meditation;