import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './../../store';

//Import Components
import Upgrades from './../Upgrades/UpgradesPage';

//Import styles
import './Body.css';
import { lookupService } from 'dns';
import { thisExpression } from '@babel/types';

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

    render() {
        return (
            <section>
                <div className="clicker">
                    <img className="fruit" 
                    onMouseDown={this.clickDown} 
                    onMouseUp={this.clickUp}
                    src="/image/fruits/apple.png" 
                    alt="floor" 
                    style={{ width: this.clicked ? '350px' : '384px' }} />
                </div>
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