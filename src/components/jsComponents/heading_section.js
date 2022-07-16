import React from "react";
import '../cssComponents/headingSection.css';
import {cat_smile_icon} from '../../assests'


function HeadingSection() {
    return (
        <header className="header-app">
            <img 
            className="header-app__kittens-logo"
            alt="kittens-logo"
            src={cat_smile_icon} />
            <h1 className="header-app__kittens-h1">kittens</h1>
        </header>
        
    )
}

export {HeadingSection};