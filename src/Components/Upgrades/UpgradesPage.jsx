import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import styles
import './UpgradesPage.css';

class UpgradesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <menu style={{ display: this.props.upgradesOpen ? "flex" : 'none' }}>
                <div className="divUpgrades">
                    <p className="upgradesTitle">Upgrades</p>
                    <hr />
                    <div className="manualUpgrades upgradesSections">
                        <p className="upgradesSubTitle">Manual Upgrades</p>
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
                        <p className="upgradesSubTitle">Automatic Upgrades</p>
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