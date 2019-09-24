import React from 'react';

//Import Styles
import './Header.css';

export default function Header() {
    return (
        <header>
            <div className="headerGeneral">
                <div className="externalButton">
                    <a className="roundButtonSmall" href="https://www.google.com">
                        <img src="/image/fruits/share.png" alt=""/>
                    </a>
                </div>
                <div className="infoField">
                    <img src="/image/coin.png" />
                    <p className="clicksField">0</p>
                </div>
                <div className="externalButton">
                    <a className="roundButtonSmall" href="https://www.google.com">
                    <img src="/image/fruits/info.png" alt=""/>
                    </a>
                </div>
            </div>
            <div className="divNews">
                <div className="newsField scroll-left">
                    <img src="/image/banner.png" alt=""/>
                    <p>Esto on las noticias</p>
                </div>
            </div>
        </header>
    )
}