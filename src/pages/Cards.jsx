import React from "react";
import '../css/Cards.css'
import CardItem from "../components/CardItem";

function Cards() {

    return (
        <div className="card-container">
            <h2>Check out these EPIC destinations!</h2>
            <div className="card-component">
                <div className="card-items">
                    <CardItem
                        src='src\assets\venice.jpg'
                        text="Experience the ancient romance of gliding through Venice's labyrinthine canals on a traditional gondola."
                        label="Romance"
                        path="/services"
                    />
                    <CardItem
                        src='src\assets\amazon.jpg'
                        text="Navigate the world's largest rainforest to witness exotic wildlife, conquer hidden trails, and discover the raw, unbridled energy of nature's greatest wilderness."
                        label="Adventure"
                        path="/services"
                    />
                    <CardItem
                        src='src\assets\tokyo.jpg'
                        text="Dive into the electrifying Pulse of Tokyo, where neon-lit innovation and serene ancient tradition collide in one thrilling metropolis"
                        label="Urban"
                        path="/services"
                    />
                    <CardItem
                        src='src\assets\iceland.jpg'
                        text="Explore Iceland's dramatic landscape, where fire meets ice and breathtaking natural wonders unfold around every spectacular turn"
                        label="Scenery"
                        path="/services"
                    />
                    <CardItem
                        src='src\assets\lanka.webp'
                        text="Sri Lanka offers an island of serendipity, where ancient ruins meet tropical beaches and vibrant culture thrives"
                        label="Culture"
                        path="/services"
                    />
                </div>
            </div>
        </div>
    )
}

export default Cards;