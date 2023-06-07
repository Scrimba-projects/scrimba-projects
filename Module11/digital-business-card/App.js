import React from 'react';

import Interests from "./components/Interests";
import Info from "./components/Info";
import Footer from "./components/Footer";
import About from "./components/About";

export default function App() {
    return (
        <div className="container">
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}