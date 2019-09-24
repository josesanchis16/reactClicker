import React from 'react';

//Import style
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="itemMenu">
                <img src="/image/fruits/upgrades.png" alt="upgrades" />
            </div>
            <div className="itemMenu">
                <img src="/image/fruits/stickers.png" />
            </div>
            <div className="itemMenu">
                <img src="/image/fruits/statics.png" />
            </div>
        </footer>
    ); 
}