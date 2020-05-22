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
                        <FaFacebookSquare size={21}/>
                        <FaInstagram size={22}/>
                        <IoLogoYoutube size={23}/>
                    </div>
                </section>
            </nav>
        </div>
    );
}

export default Footer;