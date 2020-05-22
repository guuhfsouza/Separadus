import React from 'react';

import './style.css';
import '../../global.css';

import Main from '../Main';
import Footer from '../Footer';
import Carousel from '../Carousel';
import Contacts from '../Contacts';
import Events from '../Events';

import BandaAbout from '../../assets/bandaAssis.jpg';


// import Gustavo from '../../assets/members/banner guh.jpg';
// import Thales from '../../assets/members/banner thales.jpg';
// import Marcelo from '../../assets/members/banner marcelo.jpg';
// import Leandro from '../../assets/members/banner leh.jpg';

function Home() {
    return(
        <div className="home-container">
            <Main/>
            <div className="home-content">
                <Contacts/>
                <Carousel/>
                <section className="about-content" id="about">
                    <h5>Quem somos</h5>
                    <div className="about-content-datas">
                        <img src={BandaAbout} alt="Banda"/>
                        <p>Somos uma banda da cidade de Assis que está em atividade a mais de 10 anos.
                           Nossa formação é composta por membros da 4º Igreja do Evangelho Quadrrangular que hoje,
                           é pastoreada pelo pastor Expedito e pastora Giselda.
                           Etc ....
                        </p>
                    </div>
                </section>
                <Events/>
                <section className="members-content" id="members">
                <div className="members-content-data">
                    <h5>Membros</h5>
                    <ul>
                            <li>    
                                <div className="img">
                                <img src="https://scontent.fmii3-1.fna.fbcdn.net/v/t1.0-9/64239982_1842197792547339_693571320620777472_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=Ox3hPvL3TWAAX-0H7Ds&_nc_ht=scontent.fmii3-1.fna&oh=bbbefbbee4702b980059c14af9956346&oe=5ED85A9C" alt="Banda"/>
                                </div> 
                                <span> Gustavo </span>
                                <p>Baixista</p>
                                <p>Teve seu inicio na música como baterista e por 3 anos, tocou tal instrumento 
                                no ministério de louvor local.
                                Na banda começou como violonista e passou a ser baixista.
                                </p>
                            </li>
                            <li>    
                                <div className="img">
                                <img src="https://scontent.fmii3-1.fna.fbcdn.net/v/t1.0-9/47421425_2615667031806693_17680554996531200_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=J7kB52AShQIAX90ZFg4&_nc_ht=scontent.fmii3-1.fna&oh=210f8bd9e6104683992e7857bd49ae37&oe=5EDBA5DA" alt="Banda"/>
                                </div> 
                                <span> Leandro </span>
                                <p>Guitarrista</p>
                                <p>Teve seu inicio na música como baterista e por 3 anos, tocou tal instrumento 
                                no ministério de louvor local.
                                Na banda começou como violonista e passou a ser baixista.
                                </p>
                            </li>
                            <li>    
                                <div className="img">
                                <img src="https://scontent.fmii3-1.fna.fbcdn.net/v/t1.0-9/90333503_2829983733787109_3514757620206403584_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=8Cy2Ni-KZnIAX-usplu&_nc_ht=scontent.fmii3-1.fna&oh=a6e87db7814b0a80b66d8ad2d118f66c&oe=5ED9CBC9" alt="Banda"/>
                                </div> 
                                <span> Thales </span>
                                <p>Baterista</p>
                                <p>Teve seu inicio na música como baterista e por 3 anos, tocou tal instrumento 
                                no ministério de louvor local.
                                Na banda começou como violonista e passou a ser baixista.
                                </p>
                            </li><li>    
                                <div className="img">
                                <img src="https://scontent.fmii3-1.fna.fbcdn.net/v/t1.0-9/13435514_1109314699126581_7281060759528098004_n.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_ohc=EcvfC4ffHlcAX-8rhME&_nc_ht=scontent.fmii3-1.fna&oh=97829809f7df4b557c991d4284941921&oe=5EDCC36D" alt="Banda"/>
                                </div> 
                                <span> Fabio</span>
                                <p>Vocal</p>
                                <p>Teve seu inicio na música como baterista e por 3 anos, tocou tal instrumento 
                                no ministério de louvor local.
                                Na banda começou como violonista e passou a ser baixista.
                                </p>
                            </li><li>    
                                <div className="img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1zbUMDkBUSWaIASyBIdWUMdDVa_bA8DrJ7Vi_0fHcxFPnDbaP&usqp=CAU" alt="Banda"/>
                                </div> 
                                <span> Marcelo </span>
                                <p>Violonista</p>
                                <p>Teve seu inicio na música como baterista e por 3 anos, tocou tal instrumento 
                                no ministério de louvor local.
                                Na banda começou como violonista e passou a ser baixista.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>

            </div>
            <Footer/>
        </div>
    );  
}

export default Home;