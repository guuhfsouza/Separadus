import React from 'react'
import {useHistory} from 'react-router-dom';
import {FaArrowLeft, FaArrowRight, FaPlayCircle} from 'react-icons/fa'


import '../../global.css';
import './style.css';

import Logo from '../../assets/Logo.png';
import Audio from '../../Audios/Separadus Banda - 01.Santidade.mp3'

import Footer from '../Footer';

function Music(){
    const history = useHistory();
    return(
        <div className="music-container">
            <nav id="nav">
                <div className="logo">   
                    <img src={Logo} alt="Logo"/> 
                </div>
                <div className="options">   
                    <a onClick={e =>history.push('/')}><FaArrowLeft/>Voltar a tela pricipal</a> 
                </div>
            </nav>
            <div className="music-content">
            <div className="music-lyrics">
                <section>
                    <h1>Santidade</h1>
                        <p>Sei que o Senhor me separou<br/>
                        Desde o princípio me escolheu<br/>
                        Para ser seu Ih Eh Ih Eh<br/>
                        E pela fé me deu poder<br/>
                        De ser chamado Filho de Deus<br/>
                        O sobrenatural, eu sou, Israel
                        </p><br/>
                        
                        <p>Separadu sei que sou<br/>
                        A diferença é uma vida em santidade<br/>
                        Meu compromisso com o Senhor uooo
                        </p><br/>
                        
                        <p>Separadu sei que sou<br/>
                        Pra levar a palavra do meu Senhor<br/>
                        Pra falar em nome do Pai, do Filho e do Espirito<br/>
                        Pra vivificar em nome do Pai, do Filho e do Espirito<br/>
                        Pra conscientizar e não viciar<br/>
                        Pra falar do amor de Cristo e não citar a violência<br/>
                        Pra fazer a diferença por onde eu passar<br/>
                        Pra falar em santidade<br/>
                        E que em br/eve Jesus vai voltar
                        </p><br/>
                                    
                        <p>Separadu sei que sou<br/>
                        A diferença é uma vida em santidade<br/>
                        Meu compromisso com o Senhor uooo
                        </p>
                </section>
            </div>
            <div className="music-mucis">
                <section>
                    <div className="music-audio">
                        <h1> Ouça:  </h1>
                        <audio  controls>
                            <source src={Audio} ></source> 
                            audio
                        </audio>
                    </div>
                    <ul>
                        <h2> Músicas </h2>
                        <li>
                            <a> Santidade <FaPlayCircle/> </a>
                        </li>
                        <li>
                            <a> Santidade <FaPlayCircle/> </a>
                        </li>
                        <li>
                            <a> Santidade <FaPlayCircle/> </a>
                        </li>
                        <li>
                            <a> Santidade <FaPlayCircle/> </a>
                        </li>
                        <li>
                            <a> Santidade <FaPlayCircle/> </a>
                        </li>
                        <li>
                            <a> Santidade <FaPlayCircle/> </a>
                        </li>
                        <li>
                            <a> Santidade <FaPlayCircle/> </a>
                        </li>
                        <li>
                            <a> Santidade <FaPlayCircle/> </a>
                        </li>
                        <li>
                            <a> Santidade <FaPlayCircle/> </a>
                        </li>
                        <li>
                            <a> Ouça todas as faixas < FaArrowRight /> </a>
                        </li>
                    </ul>
                </section>
            </div> 
            </div>
            <Footer/>          
        </div>
    )
}


export default Music;