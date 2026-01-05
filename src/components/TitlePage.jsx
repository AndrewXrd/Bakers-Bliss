import React from "react";
import '../css/Titlepage.css';
import bg from '../assets/bg2.jpg'

function TitlePage() {

    return (
        <div className="main-container">
            <img className="bg-img" src={bg} alt="" />
            <div className="bg-overlay"></div>
            <div className="title-content">
                <h1>Where Every Bite Feels Like Home</h1>
                <p>Handcrafted bakery delights baked fresh to bring you comfort and joy</p>
            </div>
            <div className="title-button">Read More</div>

        </div>
    )

}

export default TitlePage;