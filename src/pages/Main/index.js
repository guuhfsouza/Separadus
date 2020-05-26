import React from 'react';
//import {FaFacebookSquare, FaInstagram, FaMapSigns} from 'react-icons/fa';
//import {IoLogoYoutube} from 'react-icons/io';


import './style.css'
import '../../global.css'
import smoothScrollTo from '../Animations/smoothScrollTo'

import Logo from '../../assets/Logo.png';
import Fundo from '../../assets/bandaAssis.png'

function Main () {
    const main = document.getElementsByClassName('main-content');
    window.addEventListener("scroll", scrollMenu );

    const nav = document.getElementsByTagName('nav');    
    const contact = document.getElementsByClassName('contact-content');
    const about = document.getElementsByClassName('about-content');
    const photo = document.getElementsByClassName('carousel-container');
    const event = document.getElementsByClassName('events-content');
    
    function scrollMenu(){
        const myDocElement = document.documentElement.scrollTop;
        if(myDocElement >= (nav[0].clientHeight - main[0].clientHeight)){
            main[0].style.backgroundColor = 'rgba(34, 34, 34, 0.8)';
            main[0].style.margin = '0';
            main[0].style.transition = '1s';
            //verificar uma forma de alterar a classe do componente o inves de alterar via
        }
        else{
            main[0].style.backgroundColor = "transparent";
            main[0].style.margin = '0 28px 0 28px'
            main[0].style.transition = '0.5s';
        }
    }

    function scroolScreen(index = 0){
        //contatos
        if(index === 1)
            smoothScrollTo(0, (contact[0].offsetTop - main[0].clientHeight), 1000)            
        //galeria
        else if(index === 2)
            smoothScrollTo(0, (photo[0].offsetTop - main[0].clientHeight), 1000)            
        //quem somos
        else if(index === 3)
            smoothScrollTo(0, (about[0].offsetTop - main[0].clientHeight), 1000)            
        //eventos
        else if(index === 4)
            smoothScrollTo(0, (event[0].offsetTop - main[0].clientHeight), 1000)            
        //topo
        else if (index === 0)
            smoothScrollTo(0, 0, 1000)            
    }


    return(
        <div className="main-container">
            {/* <div className="main-logo">
                <span>Nos encontre nas redes sociais: </span>
                <FaFacebookSquare size={19}/>
                <FaInstagram size={20}/>
                <IoLogoYoutube size={22}/>
            </div> */}
            <nav>
                <div id="menu" className="main-content">
                    <div className="logo">   
                        <img src={Logo} onClick={() => scroolScreen()} alt="Logo"/> 
                    </div>                
                    <div className="options">
                        <a onClick={() => scroolScreen(1) }>CONTATOS</a>
                        <a onClick={() => scroolScreen(4) }>EVENTOS</a>
                        <a onClick={() => scroolScreen(2) }>GALERIA</a>
                        <a onClick={() => scroolScreen(3) }>QUEM SOMOS</a>
                        <a /*onClick={() => scroolScreen(3) }*/ >MEDITAÇÕES</a>
                        <a /*onClick={() => scroolScreen(3) }*/ >NOSSO DIA</a>
                    </div>
                </div>
                <img className="fundo" src={Fundo}/>
        </nav>
        </div>
 
    );
}

export default Main;