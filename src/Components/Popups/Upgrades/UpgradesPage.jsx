import React, { Component } from 'react';
import { connect } from 'react-redux';

import buttonAction from '../../../Actions/buttonsAction';

//Import styles
import './UpgradesPage.css';

class UpgradesPage extends Component {
    constructor(props) {
        super(props);
    }

    close = () => {
        buttonAction('closePopup');
    }

    render() {
        return (
            <menu style={{ display: this.props.upgradesOpen ? "flex" : 'none' }}>
                <div className="divPopupGeneral">
                    <div className='headerPopup'>
                        <p className="titleGeneral">Upgrades</p>
                        <img src="/image/fruits/cross.png" onPointerUp={this.close} alt="" className="roundButtonSmall buttonRed" />
                    </div>
                    <hr />
                    <div className="generalSections">
                        <div className="manualUpgrades upgradesSections">
                            <p className="generalSubtitles">Manual Upgrades</p>
                            <hr />
                            <div className="scrollUpgrades">
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                            </div>
                        </div>
                        <div className="autoUpgrades upgradesSections">
                            <p className="generalSubtitles">Automatic Upgrades</p>
                            <hr />
                            <div className="scrollUpgrades">
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
                                <img src="/image/upgrades/upgrade-template.png" alt="" />
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
        upgradesOpen: state.openedWindows.upgradesOpen,
    })
};

export default connect(mapStateToProps)(UpgradesPage);