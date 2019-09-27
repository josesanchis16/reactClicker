import React, { Component } from 'react';
import { connect } from 'react-redux';

import buttonAction from './../../../Actions/buttonsAction';

//Import styles
import './Stickers.css';

class Stickers extends Component {
    constructor(props) {
        super(props);
    }

    close = () => {
        buttonAction('closePopup');
    }

    render() {
        return (
            <menu style={{ display: this.props.stickersOpen ? "flex" : 'none' }}>
                <div className="divPopupGeneral">
                    <div className='headerPopup'>
                        <p className="titleGeneral">Stickers</p>
                        <img src="/image/fruits/cross.png" onPointerUp={this.close} alt="" className="roundButtonSmall buttonRed" />
                    </div>
                    <hr />
                    <div className="stickersSection">
                        <div className="divUnlocked">
                            <p className="generalSubtitles">Unlocked 15/120</p>
                        </div>
                        <div className="stickersList">
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                            <div>
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </menu >
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return ({
        stickersOpen: state.openedWindows.stickersOpen,
    })
};

export default connect(mapStateToProps)(Stickers);