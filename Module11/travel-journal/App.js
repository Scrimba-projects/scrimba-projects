import React from "react"
import Header from "./components/Header";
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
            <Header/>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}