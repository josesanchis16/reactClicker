import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import style
import './Share.css';

class Share extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <menu style={{ display: this.props.shareOpen ? 'flex' : 'none' }}>
                <div className="divPopupGeneral">
                    <p className="titleGeneral">Share</p>
                    <hr />
                </div>
            </menu>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        shareOpen: state.openedWindows.shareOpen,
    })
}

export default connect(mapStateToProps)(Share);