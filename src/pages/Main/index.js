import React  from 'react';
import { useHistory } from 'react-router-dom';
import {/*FaFacebookSquare, FaInstagram, FaMapSigns*/ FaAngleDown} from 'react-icons/fa';
//import {IoLogoYoutube} from 'react-icons/io';


import './style.css'
import './styleMobile.css';
import '../../global.css'
import smoothScrollTo from '../../Animations/smoothScrollTo'

import Logo from '../../assets/Logo.png';
import Fundo from '../../assets/bandaAssis.png'

function Main () {
    const history = useHistory();

    const main = document.getElementsByClassName('main-content');
    window.addEventListener("scroll", scrollMenu );

    const nav = document.getElementsByTagName('nav');    
    const contact = document.getElementsByClassName('contact-content');
    const about = document.getElementsByClassName('about-content');
    const photo = document.getElementsByClassName('carousel-container');
    const event = document.getElementsByClassName('events-content');
    const options = document.getElementsByClassName('options');

    function scrollMenu(){
        const myDocElement = document.documentElement.scrollTop;
        if(myDocElement >= (nav[0].clientHeight - main[0].clientHeight)){
            main[0].classList.add('scroll')
        }
         else{
            main[0].classList.remove('scroll')
        }
    }

    function scroolScreen(index = 0){
        //contatos
        if(index === 1)
            smoothScrollTo(0,
                (contact[0].offsetTop - (contact[0].clientHeight /14) ),
                1000)            
        //galeria
        else if(index === 2)
            smoothScrollTo(0, (photo[0].offsetTop - (photo[0].clientHeight /14 )), 1000)            
        //quem somos
        else if(index === 3)
            smoothScrollTo(0, (about[0].offsetTop - (about[0].clientHeight/ 6)), 1000)            
        //eventos
        else if(index === 4)
            smoothScrollTo(0, (event[0].offsetTop - (event[0].clientHeight / 13)), 1000)            
        //topo
        else if (index === 0)
            smoothScrollTo(0, 0, 1000)            

        openMainMobile();    

        //como é escondido o menu, tem ficado a medida dele completo e por isso esta ficando uma 
        //sobra de pagina entre  menu e a section desejada.
    }

    function openMainMobile(){
        //criar uma lista com os <a> do options e fazer um foreach e para cada elemento aplicar
        // o classList.toggle() para deixar a aparição da pagina mais customizada. 
        options[0].classList.toggle('options-all')
    }

//#region 
//criar =>
    // function carouselMain1(){
    //     document.getElementsByClassName('fundo').src = Logo;
    //     setTimeout(carouselMain2, 3000)
    // };

    // function carouselMain2(){
    //     document.getElementsByClassName('fundo').src = Fundo;
    //     setTimeout(carouselMain1, 3000);
    // };


    // carouselMain1();
//#endregion
    
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
                    <div className="options-mobile">
                        <FaAngleDown size={35} onClick={e => openMainMobile()}/>
                    </div>                  
                    <div className="options">
                        <a onClick={() => scroolScreen(1) }>CONTATOS</a>
                        <a onClick={() => scroolScreen(4) }>AGENDA</a>
                        {/* <a onClick={() => scroolScreen(2) }>GALERIA</a> */}
                        <a onClick={() => scroolScreen(3) }>QUEM SOMOS</a>
                        <a href="/meditation" >MEDITAÇÕES</a>
                        <a href="/music">MÚSICAS</a>
                    </div>
                </div>
    
                <img className="fundo" src={Fundo}/>
        </nav>
        </div>
 
    );
}

export default Main;