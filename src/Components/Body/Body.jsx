import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './../../store';

//Import Components
import Upgrades from './../Upgrades/UpgradesPage';

//Import styles
import './Body.css';

class Body extends Component {
    constructor(props) {
        super(props);
    }

    clickUp = () => {
        console.log('click');

        try {
            const action = {
                type: 'inc'
            }

            store.dispatch(action);
            console.log('dipatch lanzado');
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <section>
                <div className="clicker" onMouseUp={this.clickUp}>
                    <img className="fruit" src="/image/fruits/apple.png" alt="floor" />
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