import React from "react";
import TitlePage from "../components/TitlePage";
import Cards from "../pages/Cards";
import Footer from "../pages/Footer";
import Slogan from "../pages/Slogan";

function Home() {
    return (
        <div className="home-container">
            <TitlePage />
            <Slogan />
            <Cards />
            <Footer />
        </div>
    );
}

export default Home;