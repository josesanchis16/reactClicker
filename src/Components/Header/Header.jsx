import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './../../store';

//Import Styles
import './Header.css';
import { thisExpression } from '@babel/types';

let score = {};

class Header extends Component {
    constructor(props) {
        super(props);
    }

    scoreState = 0;

    componentDidMount() {
        this.subscribe();
    }
    handleChange = () => {
        score = mapStateToProps(store.getState());
        this.scoreState = score.score;
        this.forceUpdate();
    }

    subscribe = () => store.subscribe(this.handleChange);

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
                        <p className="clicksField">{this.scoreState}</p>
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