import React from 'react';
import {FaWhatsapp, FaPhone} from 'react-icons/fa'

import './style.css';
import './styleMobile.css';

function Contacts(){
    return(
        <section className="contact-content">
            <h5>Contatos</h5>
            <div className="contact-content-datas">
                <strong>
                    <FaPhone size={27}/> (18) 99797-9090 / 
                    <FaWhatsapp size={30}/>(18) 99797-9090</strong>
                <p>separadus@gmail.com</p>
                <p>ou nos envie um e-mail através do formlulário a seguir</p>
            </div>
            <form className="contact-form">
                <div className="people">
                    <input placeholder="Seu Nome" required type="text"/>
                    <input placeholder="Seu E-mail" required type="email"/>
                    <input placeholder="Seu Celular" required type="phone"/>
                </div>
                <div className="localization">
                    <input placeholder="Sua cidade" required type="text"/>
                    <input placeholder="Seu estado" required type="text"/>
                </div>
                <div className="data-event">
                    <input placeholder="Data desejada" required type="date"/>
                    <input placeholder="Tipo de evento" required type="text"/>
                </div>
                <div className="textarea" required>
                    <textarea placeholder="Digite sua mensagem"/>
                </div>            
                <button type="submit"> Enviar </button>
            </form>

        </section>
    );
}

export default Contacts;