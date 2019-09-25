import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import style
import './Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <menu style={{ display: this.props.profileOpen ? 'flex' : 'none' }}>
                <div className="divPopupGeneral">
                    <p className="titleGeneral">Profile</p>
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