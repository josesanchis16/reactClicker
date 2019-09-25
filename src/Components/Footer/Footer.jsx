import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './../../store';

//Import style
import './Footer.css';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    upgradesClick = async () => {
        const action = {
            type: "toggleUpgrades",
            payload: !this.props.upgradesOpen,
        }

        try {
            await store.dispatch(action);
        } catch (e) {
            console.log(e);
        }
    }

    stickersClick = async () => {
        const action = {
            type: "toggleStickers",
            payload: !this.props.stickersOpen,
        }

        try {
            await store.dispatch(action);
        } catch (e) {
            console.log(e);
        }
    }

    staticsClick = async () => {
        const action = {
            type: "toggleStatics",
            payload: !this.props.staticsOpen,
        }

        try {
            await store.dispatch(action);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <footer>
                <div className="itemMenu">
                    <img src="/image/fruits/upgrades.png" alt="upgrades" onPointerUp={this.upgradesClick} />
                </div>
                <div className="itemMenu">
                    <img src="/image/fruits/stickers.png" alt="stickers" onPointerUp={this.stickersClick} />
                </div>
                <div className="itemMenu">
                    <img src="/image/fruits/statics.png" alt="statics" onPointerUp={this.staticsClick} />
                </div>
            </footer>
        );
    }
}

const mapStateToProps = state => {
    return ({
        upgradesOpen: state.openedWindows.upgradesOpen,
        stickersOpen: state.openedWindows.stickersOpen,
        staticsOpen: state.openedWindows.staticsOpen,
    })
};

export default connect(mapStateToProps)(Footer);