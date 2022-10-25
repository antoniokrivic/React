import React from 'react'
import './banner.css';

function Banner() {
    return (
        <div className="banner">
        <h1>Slika grada Osijeka</h1>
        
        <p>Prikaz centra grada</p>
        <a href="https://en.wikipedia.org/wiki/Osijek"> <button>Više o Osijeku</button></a>
    </div>
    );
}

export default Banner;