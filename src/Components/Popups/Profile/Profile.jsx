import React, { Component } from 'react';
import { connect } from 'react-redux';

import buttonActions from './../../../Actions/buttonsAction';

//Import style
import './Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    close = () => {
        buttonActions('closePopup');
    }

    render() {
        return (
            <menu style={{ display: this.props.profileOpen ? 'flex' : 'none' }}>
                <div className="divPopupGeneral">
                    <div className="headerPopup">
                        <p className="titleGeneral">Profile</p>
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
        profileOpen: state.openedWindows.profileOpen,
    })
}

export default connect(mapStateToProps)(Profile);