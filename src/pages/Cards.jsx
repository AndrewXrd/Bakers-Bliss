import React, { useState } from "react";
import '../css/Cards.css'
import CardItem from "../components/CardItem";
import bread from '../assets/bread.jpg'
import brownbread from '../assets/brown-bread.jpg'
import chococookie from '../assets/cookie.webp'
import buttercookie from '../assets/butter-cookies.jpg'
import cake from '../assets/cake.jpg'
import fruitcake from '../assets/fruit-cake.webp'
import puff from '../assets/puffs.webp'
import eggpuff from '../assets/egg-puffs.jpg'
import coffee from '../assets/coffee.jpg'
import tea from '../assets/milk-tea.jpg'

const cardData = [
    {
        src: bread,
        text: "Freshly baked white bread, soft and perfect for your daily sandwiches.",
        label: "Bread",
        path: "/services"
    },
    {
        src: brownbread,
        text: "Healthy and hearty whole wheat brown bread for a nutritious diet.",
        label: "Bread",
        path: "/services"
    },
    {
        src: chococookie,
        text: "Rich double chocolate chip cookies that melt in your mouth.",
        label: "Cookie",
        path: "/services"
    },
    {
        src: buttercookie,
        text: "Classic Danish butter cookies, crisp and delightful with tea.",
        label: "Cookie",
        path: "/services"
    },
    {
        src: cake,
        text: "Soft and fluffy vanilla sponge cake topped with creamy frosting.",
        label: "Cake",
        path: "/services"
    },
    {
        src: fruitcake,
        text: "Traditional fruit cake loaded with berries, nuts, and dry fruits.",
        label: "Cake",
        path: "/services"
    },
    {
        src: puff,
        text: "Crispy and flaky vegetable puffs with a spicy potato filling.",
        label: "Puff",
        path: "/services"
    },
    {
        src: eggpuff,
        text: "Savory egg puffs, the perfect companion for your evening coffee.",
        label: "Puff",
        path: "/services"
    },
    {
        src: coffee,
        text: "Strong and aromatic brewed coffee to kickstart your day.",
        label: "Beverage",
        path: "/services"
    },
    {
        src: tea,
        text: "Refreshing milk tea infused with cardamom and ginger.",
        label: "Beverage",
        path: "/services"
    }
];

function Cards() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...new Set(cardData.map(item => item.label))];

    const filteredCards = activeCategory === "All"
        ? cardData
        : cardData.filter(item => item.label === activeCategory);

    return (
        <div className="card-container">
            <h2>Lets get Baking!</h2>

            <div className="category-filter">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="card-component">
                <ul className="card-items">
                    {filteredCards.map((item, index) => (
                        <CardItem
                            key={index}
                            src={item.src}
                            text={item.text}
                            label={item.label}
                            path={item.path}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Cards;