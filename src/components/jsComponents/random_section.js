import React from 'react';
import '../cssComponents/randomSection.css';

function RandomSection() {
    
    return(
        <div className="random-section">
            <h2
            className="random-section__h2"
            >Kittens of the World</h2>

            <div className="random-card">
                <img className="random-card__img" />
                <span className="random-card__fav-btn"></span>
            </div>
        </div>
    );
}

export {RandomSection};