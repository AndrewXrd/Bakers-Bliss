import React from "react";
import '../css/Video.css';
import videoSource from '../assets/Sea-Island.mp4';

function Video() {

    return(
        <div className="video-container">
            <video autoPlay loop muted className="video">
                <source src={videoSource} type="video/mp4" />
            </video>
            <div className="video-content">
                <h1>Travel to create memories around the world</h1>
                <p>Choose your favourite destination</p>
            </div>
            <div className="video-button">Explore Now</div>
        </div>
    )

}

export default Video;