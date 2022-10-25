import React from 'react'
import './navbar.css';

function Navbar() {
    return (
      <div className="container">
        <nav class="navbar">
       <ul>
           <li><a class="blue" href="">Početna stranica</a></li>
           <li><a href="https://en.wikipedia.org/wiki/Osijek">Više</a></li>
           <li><a href="info.txt">Info</a></li>
       </ul> 
        </nav>
      </div>
    )
}

export default Navbar;

