import React from 'react';
import {FaAngleDown, FaArrowDown} from  'react-icons/fa';

import './style.css';


function Contacts(){
    const myEventElement = document.getElementsByClassName('events-content');

    window.addEventListener("scroll", function() {
        if(window.pageYOffset > 
            myEventElement[0].offsetTop - (myEventElement[0].offsetTop/10))
        eventAnimate()
    });

    function eventAnimate(){
        const moreDetailsEvent = document.querySelectorAll('.event-details');
        const myDocElement = document.documentElement.scrollTop;

        moreDetailsEvent.forEach(function(element){
            // verificar a forma correta de alterar a classe ao invés de
            //alterar o stylo via JS
            if(myDocElement + (myDocElement/15) >= 
                myEventElement[0].offsetTop /*+ (element.offsetTop -200 )*/)
                //parte do if comentada cria o efeito um por um dos eventos listados. Nesse caso ele soma o topo da pagina + o topo do elemento a ser apresentado.
            {
                //element.classList.add('event-animate')
                element.style.opacity = 1;
                element.style.transform = 'translate3d(0,0,0)';
                element.style.transition = '0.5s';
            }              
            else{
                element.style.transform = 'translate3d(-50px,0,0)';
                element.style.transition = '0.2s';
                element.style.opacity = 0;
            }
        })

    }
    
    function moreDetails(id){
        const moreDetails = document.getElementsByClassName('event-more-details')
        const originalClass = 'event-more-details';
        const newClass = 'event-more-details-on';
        const actualClass = moreDetails[id].classList.value;

        if(actualClass === originalClass){
            moreDetails[id].classList.add(newClass)
        }
        else{
            moreDetails[id].classList.remove(newClass)
        }
    }

    return(
        <section className="events-content">
        <div className="events-content-internal">
            <h5>Eventos</h5>
                <ul>
                    {/* <span> <FaArrowDown className="arroDown"/> 
                        Role para ver a agenda dos proximos dias.
                    </span> */}
                    <li>   
                        <div className="event">                     
                            <div className="event-details">
                                <div>
                                    <span>
                                        10/09/2020
                                    </span>
                                    <span>
                                         - Santa Cruz do Rio Pardo
                                    </span>
                                </div>
                                <div className="more">
                                    <FaAngleDown className="arroDown" size={25}
                                    onClick={() => moreDetails(0)}
                                    />
                                </div>
                                <div className='event-more-details'>
                                    <span>
                                        Local: <a> 3º IEQ Ourinhos</a>
                                    </span>
                                    <span>
                                        Valor: Gratuito.
                                    </span>
                                </div>                                
                            </div>
                        </div>
                    </li>

                    <li>   
                        <div className="event">                     
                            <div className="event-details">
                                <div>
                                    <span>
                                        10/09/2020
                                    </span>
                                    <span>
                                         - Santa Cruz do Rio Pardo
                                    </span>
                                </div>
                                <div className="more">
                                    <FaAngleDown className="arroDown" 
                                    onClick={() => moreDetails(1)} size={25} /> 
                                </div>
                                <div className='event-more-details'>
                                    <span>
                                        Local: <a> 3º IEQ Ourinhos</a>
                                    </span>
                                    <span>
                                        Valor: Gratuito.
                                    </span>
                                </div>                                
                            </div>
                        </div>
                    </li>

                    <li>   
                        <div className="event">                     
                            <div className="event-details">
                                <div>
                                    <span>
                                        10/09/2020
                                    </span>
                                    <span>
                                         - Santa Cruz do Rio Pardo
                                    </span>
                                </div>
                                <div className="more">
                                    <FaAngleDown className="arroDown" 
                                    onClick={() => moreDetails(2)} size={25} /> 
                                </div>
                                <div className='event-more-details'>
                                    <span>
                                        Local: <a> 3º IEQ Ourinhos</a>
                                    </span>
                                    <span>
                                        Valor: Gratuito.
                                    </span>
                                </div>                                
                            </div>
                        </div>
                    </li>

                    <li>   
                        <div className="event">                     
                            <div className="event-details">
                                <div>
                                    <span>
                                        10/09/2020
                                    </span>
                                    <span>
                                         - Santa Cruz do Rio Pardo
                                    </span>
                                </div>
                                <div className="more">
                                    <FaAngleDown className="arroDown" 
                                    onClick={() => moreDetails(3)} size={25} /> 
                                </div>
                                <div className='event-more-details'>
                                    <span>
                                        Local: <a> 3º IEQ Ourinhos</a>
                                    </span>
                                    <span>
                                        Valor: Gratuito.
                                    </span>
                                </div>                                
                            </div>
                        </div>
                    </li>

                    <li>   
                        <div className="event">                     
                            <div className="event-details">
                                <div>
                                    <span>
                                        10/09/2020
                                    </span>
                                    <span>
                                         - Santa Cruz do Rio Pardo
                                    </span>
                                </div>
                                <div className="more">
                                    <FaAngleDown className="arroDown" 
                                    onClick={() => moreDetails(4)} size={25} /> 
                                </div>
                                <div className='event-more-details'>
                                    <span>
                                        Local: <a> 3º IEQ Ourinhos</a>
                                    </span>
                                    <span>
                                        Valor: Gratuito.
                                    </span>
                                </div>                                
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Contacts;