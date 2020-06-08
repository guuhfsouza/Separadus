import React, { useState } from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

import './style.css';
import './styleMobile.css';

import imagem0 from '../../assets/carousel/imagem1.jpg';
import imagem1 from '../../assets/carousel/imagem2.jpg';
import imagem2 from '../../assets/carousel/imagem3.jpg';
import imagem3 from '../../assets/carousel/imagem4.jpg';


function Carousel() {
    const [index, setIndex] = useState(0);


    function slideRight(e){
        //e.preventDefault();
        const countImg = document.getElementsByClassName('image');

        window.location ="#img" + index
        if(index === countImg.length-1){
            setIndex(0);
        }
    }

    function slideLeft(e){
        //e.preventDefault();
        const countImg = document.getElementsByClassName('image');
        console.log(countImg)

        if( index === 0){
            setIndex(countImg.length-1)
        }

        console.log(index);
        window.location ="#img" + index
    }


    return(
        <div className="carousel-container">
            <h5>Nossa Galeria</h5>
            <div className="carousel-content">
                <FaAngleLeft size={50} onClick={()=> {
                    setIndex(index - 1);
                    slideLeft()
                }}/>
                <div className="carousel-cont">
                    <img src={imagem0} className="image image0" id="img0" alt='img1'></img>
                    <img src={imagem1} className="image image1" id="img1" alt="img2"></img>
                    <img src={imagem2} className="image image2" id="img2" alt="img3"></img>
                    <img src={imagem3} className="image image3" id="img3" alt="img4"></img>
                </div>
                <FaAngleRight size={50} onClick={()=> {
                    setIndex(index + 1)
                    slideRight()
                }}/>
            </div>
        </div>
    );
}


export default Carousel;