import React from "react";
import '../cssComponents/favoriteSection.css'
import { cat_eyesHeart_icon } from '../../assests/index';

function FavoriteSection() {
    return(
        <div className="favorite-section">
            <div className="favorite-header">
                <img 
                alt="favorite-img"
                className="favorite-header__img"
                src={cat_eyesHeart_icon}
                />
                <h2 className="favorite-header__h2">Favorites</h2>
            </div>

            <div className="favorite-card">
                <img className="favorite-card__img"></img>
                <span className="favorite-card__span_remove"></span>
            </div>
        </div>
    );
}

export {FavoriteSection};