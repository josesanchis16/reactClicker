import React, { Component } from 'react';
import { connect } from 'react-redux';

import buttonAction from './../../../Actions/buttonsAction';

//Import style
import './Settings.css';

class Settings extends Component {
    constructor(props) {
        super(props);
    }

    close = () => {
        buttonAction('closePopup');
    }

    render() {
        return (
            <menu style={{ display: this.props.settingsOpen ? 'flex' : 'none' }}>
                <div className="divPopupGeneral">
                    <div className="headerPopup">
                        <p className="titleGeneral">Settings</p>
                        <img src="/image/fruits/cross.png" onPointerUp={this.close} alt="" className="roundButtonSmall buttonRed" />
                    </div>
                    <hr />
                </div>
            </menu>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        settingsOpen: state.openedWindows.settingsOpen,
    })
}

export default connect(mapStateToProps)(Settings);