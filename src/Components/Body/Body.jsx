import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './../../store';

//Import Components
import Info from './../Info/Info';
import Share from './../Share/Share';
import Profile from './../Profile/Profile';
import Settings from './../Settings/Settings';

import Upgrades from './../Upgrades/UpgradesPage';

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
                        onMouseDown={this.clickDown}
                        onMouseUp={this.clickUp}
                        onMouseLeave={this.mouseOut}
                        src="/image/fruits/apple.png"
                        alt="floor"
                        style={{ width: this.clicked ? '350px' : '384px' }} />
                </div>
                <Info />
                <Share />
                <Profile />
                <Settings />
                <Upgrades />
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