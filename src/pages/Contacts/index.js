import React from 'react';
import {FaWhatsapp, FaPhone} from 'react-icons/fa'

import './style.css';


function Contacts(){
    return(
        <section className="contact-content">
            <h5>Nossos contatos</h5>
            <div className="contact-content-datas">
                <strong>
                    <FaPhone size={27}/> (18) 99797-9090 / 
                    <FaWhatsapp size={30}/>(18) 99797-9090</strong>
                <p>separadus@gmail.com</p>
                <p>ou nos envie um e-mail attravés do formlulário a seguir</p>
            </div>
            <form className="contact-form" onSubmit={""}>
                <div className="people">
                    <input placeholder="Seu Nome"/>
                    <input placeholder="Seu E-mail"/>
                    <input placeholder="Seu Celular"/>
                </div>
                <div className="localization">
                    <input placeholder="Sua cidade"/>
                    <input placeholder="Seu estado"/>
                </div>
                <div className="data-event">
                    <input placeholder="Data desejada"/>
                    <input placeholder="Tipo de evento"/>
                </div>
                <div className="textarea">
                    <textarea placeholder="Digite sua mensagem"/>
                </div>            
                <button type="submit"> Enviar </button>
            </form>

        </section>
    );
}

export default Contacts;