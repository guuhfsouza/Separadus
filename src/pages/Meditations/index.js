import React from 'react'
import { useHistory } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';

import '../../global.css';
import './style.css'

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
                    <video controls> 
                        <source src={Video} type="video/mp4" />
                    </video>
                </section>
                <section className="meditation-list">
                    <h3>Ultimos vídeos</h3>
                    <ul>
                        <li>
                            <video  controls>
                                <source  src={Video} type="video/mp4" />
                            </video>
                        </li>
                        <li>
                            <video  controls>
                                <source  src={Video} type="video/mp4" />
                            </video>
                        </li>

                        <li>
                            <video  controls>
                                <source  src={Video} type="video/mp4" />
                            </video>
                        </li>
                        <li>
                            <video  controls>
                                <source  src={Video} type="video/mp4" />
                            </video>
                        </li>
                        <li>
                            <video  controls>
                                <source  src={Video} type="video/mp4" />
                            </video>
                        </li>

                        <li>
                            <video  controls>
                                <source  src={Video} type="video/mp4" />
                            </video>
                        </li>
                    </ul>
                </section>            
            <Footer/>
        </div>
    );
}


export default Meditation;