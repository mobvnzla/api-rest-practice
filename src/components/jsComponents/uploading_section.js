import React from "react";
import '../cssComponents/upLoadingSection.css';
import {cat_smile_icon} from '../../assests';

function UploadSection() {
    return(
        <div className="upload-section">
            <div className="upload-header">
                <img 
                className="upload-header__img"
                src={cat_smile_icon}
                alt="upload-icon"
                />
                <h2 
                className="upload-header__h2"
                >Upload
                </h2>
            </div>

            <div className="upload-card">
                <div className="imagen">
                <img
                className="upload-card__img"
                ></img>
                </div>
                
                <div className="upload-card__spans">
                <span
                className="upload-card__span_accept upload-card__span"></span>
                <span
                className="upload-card__span_cancel upload-card__span"></span>
                </div>
            </div>
        </div>
    );
}

export {UploadSection};