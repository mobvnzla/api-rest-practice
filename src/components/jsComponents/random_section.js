import React from 'react';
import '../cssComponents/randomSection.css';

function RandomSection({url, loadRandomcat}) {
   /*  console.log(url) */
    return(
        <div className="random-section">
            <h2
            className="random-section__h2"
            >Kittens of the World</h2>

            <div className="random-card">
                <img className="random-card__img"
                src={url}
                alt='random img' />
                <span className="random-card__fav-btn"></span>
            </div>
            <button className='reload'
            onClick={() => loadRandomcat()}>Reload</button>
        </div>
    );
}

export {RandomSection};