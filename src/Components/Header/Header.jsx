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

    clickInfo = async () => {
        const action = {
            type: "toggleInfo",
            payload: !this.props.infoOpen,
        }

        try {
            await store.dispatch(action);
        } catch (e) {
            console.log(e);
        }
    }

    clickShare = async () => {
        const action = {
            type: "toggleShare",
            payload: !this.props.shareOpen,
        }

        try {
            await store.dispatch(action);
        } catch (e) {
            console.log(e);
        }
    }

    clickProfile = async () => {
        const action = {
            type: "toggleProfile",
            payload: !this.props.profileOpen,
        }

        try {
            await store.dispatch(action);
        } catch (e) {
            console.log(e);
        }
    }

    clickSettings = async () => {
        const action = {
            type: "toggleSettings",
            payload: !this.props.settingsOpen,
        }

        try {
            await store.dispatch(action);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <header>
                <div className="headerGeneral">
                    <div className="externalButton">
                        <img onMouseUp={this.clickInfo} className="roundButtonSmall" src="/image/fruits/info.png" alt="" />
                    </div>
                    <div className="externalButton">
                        <img onMouseUp={this.clickShare} className="roundButtonSmall" src="/image/fruits/share.png" alt="" />
                    </div>
                    <div className="infoField">
                        <img src="/image/coin.png" />
                        <p className="clicksField">{this.scoreState}</p>
                    </div>
                    <div className="externalButton">
                        <img onMouseUp={this.clickProfile} className="roundButtonSmall" src="/image/fruits/profile.png" alt="" />
                    </div>
                    <div className="externalButton">
                        <img onMouseUp={this.clickSettings} className="roundButtonSmall" src="/image/fruits/settings.png" alt="" />
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
        infoOpen: state.openedWindows.infoOpen,
        shareOpen: state.openedWindows.shareOpen,
        profileOpen: state.openedWindows.profileOpen,
        settingsOpen: state.openedWindows.settingsOpen,
    });
}

export default connect(mapStateToProps)(Header);