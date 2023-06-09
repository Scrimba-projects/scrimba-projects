import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import dataArray from './data';

export default function App() {
    const cards = dataArray.map(l =>{
        return  <Card
            key={l.id}
            item={l}
        />
    });

    return (
        <div className="container">
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}