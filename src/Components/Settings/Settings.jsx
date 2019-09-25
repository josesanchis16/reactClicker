import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import style
import './Settings.css';

class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <menu style={{ display: this.props.settingsOpen ? 'flex' : 'none' }}>
                <div className="divPopupGeneral">
                    <p className="titleGeneral">Settings</p>
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