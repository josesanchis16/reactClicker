import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Styles
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div className="headerGeneral">
                    <div className="externalButton">
                        <a className="roundButtonSmall" href="https://www.google.com">
                            <img src="/image/fruits/share.png" alt="" />
                        </a>
                    </div>
                    <div className="infoField">
                        <img src="/image/coin.png" />
                        <p className="clicksField">{this.props.score}</p>
                    </div>
                    <div className="externalButton">
                        <a className="roundButtonSmall" href="https://www.google.com">
                            <img src="/image/fruits/info.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="divNews">
                    <div className="newsField scroll-left">
                        <img src="/image/banner.png" alt="" />
                        <p>Esto on las noticias</p>
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return ({
        score: state.score.score,
    });
}

export default connect(mapStateToProps)(Header);