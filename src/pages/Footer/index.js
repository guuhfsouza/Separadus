import React from 'react';
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';

import '../../global.css';
import './style.css';

import Logo from '../../assets/Logo.png';

function Footer(){
    return (
        <div className="footer-container">
            <nav>   
                <section className="footer-logo">
                    <img src={Logo} alt="Logo"/>
                </section>
                <section className="footer-navigation">
                    <div className="footer-text">
                        <span> Todos os direitos reservado para a Separadu's Banda. </span>
                    </div>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/separadusbanda/" target='_black'><FaFacebookSquare size={21} /></a>
                        <a href="https://www.instagram.com/separadusbanda/?hl=pt-br" target='_black'> <FaInstagram size={22} /> </a>
                        <a href="https://www.youtube.com/channel/UCqOD8dLKTBJgYSAtBujyIaw" target='_black'><IoLogoYoutube size={23} /></a>
                    </div>
                </section>
            </nav>
        </div>
    );
}

export default Footer;