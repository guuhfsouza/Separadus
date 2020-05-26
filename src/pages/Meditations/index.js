import React from 'react'

import '../../global.css';
import './style.css'

import Video from '../../videos/teste.mp4';

function Meditation(){
    return(
        <div className="meditation-container">
            <section className="meditation-mensage">
                <video  controls>
                    <source  src="https://www.youtube.com/watch?v=6cY5Ywlx2ao" type="video/mp4" />
                </video>
            </section>
        </div>
    );
}


export default Meditation;