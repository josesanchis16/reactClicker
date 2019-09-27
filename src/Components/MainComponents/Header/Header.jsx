import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import store from '../../../store';

//Import Styles
import './Header.css';
import { throwStatement, thisExpression } from '@babel/types';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

let score = {};
const MAX_FRASES = 20;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frases: [],
            frase: '...getting new news...'
        }
        this.getFrase();
    }
    scoreState = 0;

    componentDidMount() {
        this.subscribe();
        setInterval(this.getFrase, 60000);
        setInterval(this.changeFrase, 10000);
    }

    changeFrase = () => {
        console.log(this.state.frase);
        this.setState({
            frase: this.state.frases[Math.round(Math.random() * this.state.frases.length - 1)],
        })
        console.log(this.state.frase);
    }

    getFrase = async () => {
        this.setState({
            frases: []
        });

        for (let i = 0; i < MAX_FRASES; i++) {
            await axios.get('https://sv443.net/jokeapi/category/any?blacklistFlags=nsfw').
                then(data => {
                    if (data.data.setup) {
                        const f = data.data.setup;
                        console.log(data.data.setup);
                        console.log('Se ha encontrado una frase simple');
                        this.setState({
                            frases: [...this.state.frases,
                                f]
                        });
                    }
                }).catch(e => {
                    console.log(e);
                });
        }

        const numRand = Math.round(Math.random() * this.state.frases.length - 1);

        this.setState({
            frase: this.state.frases[numRand]
        })
        console.log(this.state);
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
                        <img onPointerUp={this.clickInfo} className="roundButtonSmall" src="/image/fruits/info.png" alt="" />
                    </div>
                    <div className="externalButton">
                        <img onPointerUp={this.clickShare} className="roundButtonSmall" src="/image/fruits/share.png" alt="" />
                    </div>
                    <div className="infoField">
                        <img src="/image/coin.png" />
                        <p className="clicksField">{this.scoreState}</p>
                    </div>
                    <div className="externalButton">
                        <img onPointerUp={this.clickProfile} className="roundButtonSmall" src="/image/fruits/profile.png" alt="" />
                    </div>
                    <div className="externalButton">
                        <img onPointerUp={this.clickSettings} className="roundButtonSmall" src="/image/fruits/settings.png" alt="" />
                    </div>
                </div>
                <div className="divNews">
                    <div className="newsField scroll-left">
                        <img src="/image/banner.png" alt="" />
                        <p>{this.state.frase}</p>
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