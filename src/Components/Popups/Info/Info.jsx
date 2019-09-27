import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Buttons Action
import buttonsAction from './../../../Actions/buttonsAction';

//Import style
import './Info.css';

class Info extends Component {
    constructor(props) {
        super(props);
    }

    close = () => {
        buttonsAction('closePopup');
        
    }

    render() {
        return (
            <menu style={{ display: this.props.infoOpen ? 'flex' : 'none' }}>
                <div className="divPopupGeneral">
                    <div className="headerPopup">
                        {/* <img src="" alt="" className="roundButtonSmall" onPointerUp={}/> */}
                        <p className="titleGeneral">Info</p>
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
        infoOpen: state.openedWindows.infoOpen,
    })
}

export default connect(mapStateToProps)(Info);