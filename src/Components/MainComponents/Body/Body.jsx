import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './../../../store';

//Import Components
import Info from './../../Popups/Info/Info';
import Share from '../../Popups/Share/Share';
import Profile from '../../Popups/Profile/Profile';
import Settings from './../../Popups/Settings/Settings';

import Upgrades from '../../Popups/Upgrades/UpgradesPage';
import Stickers from '../../Popups/Stickers/Stickers';
import Statics from '../../Popups/Statics/Statics';

//Import styles
import './Body.css';

class Body extends Component {
    constructor(props) {
        super(props);
        this.clicked = false;
    }

    clickDown = () => {
        this.clicked = true;
        console.log(this.clicked);
        this.forceUpdate();
    }

    clickUp = () => {
        console.log('click');

        try {
            const action = {
                type: 'inc'
            }
            store.dispatch(action);
            this.clicked = false;
            this.forceUpdate();
        } catch (e) {
            console.log(e);
        }
    }

    mouseOut = () => {
        this.clicked = false;
        this.forceUpdate();
    }

    render() {
        return (
            <section>
                <div className="clicker">
                    <img className="fruit"
                        onPointerDown={this.clickDown}
                        onMouseLeave={this.mouseOut}
                        onPointerUp={this.clickUp}
                        src="/image/fruits/apple.png"
                        alt="floor"
                        style={{ size: this.clicked ? '10%' : '20%' }} />
                </div>
                <Info />
                <Share />
                <Profile />
                <Settings />
                <Upgrades />
                <Stickers />
                <Statics />
            </section >
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return ({
        score: state.score.score,
    })
}

export default connect(mapStateToProps)(Body);