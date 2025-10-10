import React from "react";
import Video from "../components/Video";
import Cards from "../pages/Cards";
import Footer from "../pages/Footer";

function Home() {
    return(
        <div className="home-container">
            <Video />
            <Cards />
            <Footer />
        </div>
    );
}

export default Home;