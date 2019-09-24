import React from 'react';

//Import styles
import './Body.css';

const clickDown = () => {
}

const clickUp = () => {
    console.log('click');
    
}

export default function Body() {
    return (
        <section>
            <div className="clicker" onMouseUp={clickUp}>
                <img className="fruit" src="/image/fruits/apple.png" alt="floor" />
            </div>
        </section>
    )
}