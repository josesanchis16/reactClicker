import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import style
import './Info.css';

class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <menu style={{ display: this.props.infoOpen ? 'flex' : 'none' }}>
                <div className="divPopupGeneral">
                    <p className="titleGeneral">Info</p>
                    <hr />
                </div>
            </menu>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        infoOpen: state.openedWindows.infoOpen,
    })
}

export default connect(mapStateToProps)(Info);