import React from 'react';

//Import styles
import './UpgradesPage.css';

export default function UpgradePage() {
    return (
        <menu>
            <div className="divUpgrades">
                <p className="upgradesTitle">Upgrades</p>
                <hr />
                <div className="manualUpgrades">
                    <p className="upgradesSubTitle">Manual Upgrades</p>
                    <div className="scrollUpgrades">

                    </div>
                </div>
                <div className="autoUpgrades">
                    <p className="upgradesSubTitle">Automatic Upgrades</p>
                    <div className="scrollUpgrades">
                        
                    </div>
                </div>
            </div>
        </menu>
    )
}