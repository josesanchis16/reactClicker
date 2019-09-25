const initialState = {
    upgradesOpen: false,
    stickersOpen: false,
    staticsOpen: false,
    infoOpen: false,
    shareOpen: false,
    profileOpen: false,
    settingsOpen: false,
}

function openedWindows(state = initialState, action) {
    switch (action.type) {
        case 'toggleUpgrades':
            if (action.payload) {
                state = {
                    upgradesOpen: true,
                    stickersOpen: false,
                    staticsOpen: false,
                    infoOpen: false,
                    shareOpen: false,
                    profileOpen: false,
                    settingsOpen: false,
                }
            } else {
                state = {
                    upgradesOpen: false,
                    stickersOpen: false,
                    staticsOpen: false,
                    infoOpen: false,
                    shareOpen: false,
                    profileOpen: false,
                    settingsOpen: false,
                }
            }
            return state;

        case 'toggleStickers':
            if (action.payload) {
                state = {
                    upgradesOpen: false,
                    stickersOpen: true,
                    staticsOpen: false,
                    infoOpen: false,
                    shareOpen: false,
                    profileOpen: false,
                    settingsOpen: false,
                }
            } else {
                state = {
                    upgradesOpen: false,
                    stickersOpen: false,
                    staticsOpen: false,
                    infoOpen: false,
                    shareOpen: false,
                    profileOpen: false,
                    settingsOpen: false,
                }
            }
            return state;

        case 'toggleStatics':
            if (action.payload) {
                state = {
                    upgradesOpen: false,
                    stickersOpen: false,
                    staticsOpen: true,
                    infoOpen: false,
                    shareOpen: false,
                    profileOpen: false,
                    settingsOpen: false,
                }
            } else {
                state = {
                    upgradesOpen: false,
                    stickersOpen: false,
                    staticsOpen: false,
                    infoOpen: false,
                    shareOpen: false,
                    profileOpen: false,
                    settingsOpen: false,
                }
            }
            return state;

        case 'toggleInfo':
            if (action.payload) {
                state = {
                    upgradesOpen: false,
                    stickersOpen: false,
                    staticsOpen: false,
                    infoOpen: true,
                    shareOpen: false,
                    profileOpen: false,
                    settingsOpen: false,
                }
            } else {
                state = {
                    upgradesOpen: false,
                    stickersOpen: false,
                    staticsOpen: false,
                    infoOpen: false,
                    shareOpen: false,
                    profileOpen: false,
                    settingsOpen: false,
                }
            }
            return state;

        case 'toggleShare':
            if (action.payload) {
                state = {
                    upgradesOpen: false,
                    stickersOpen: false,
                    staticsOpen: false,
                    infoOpen: false,
                    shareOpen: true,
                    profileOpen: false,
                    settingsOpen: false,
                }
            } else {
                state = {
                    upgradesOpen: false,
                    stickersOpen: false,
                    staticsOpen: false,
                    infoOpen: false,
                    shareOpen: false,
                    profileOpen: false,
                    settingsOpen: false,
                }
            }
            return state;

        case 'toggleProfile':
            if (action.payload) {
                state = {
                    upgradesOpen: false,
                    stickersOpen: false,
                    staticsOpen: false,
                    infoOpen: false,
                    shareOpen: false,
                    profileOpen: true,
                    settingsOpen: false,
                }
            } else {
                state = {
                    upgradesOpen: false,
                    stickersOpen: false,
                    staticsOpen: false,
                    infoOpen: false,
                    shareOpen: false,
                    profileOpen: false,
                    settingsOpen: false,
                }
            }
            return state;

        case 'toggleSettings':
            if (action.payload) {
                state = {
                    upgradesOpen: false,
                    stickersOpen: false,
                    staticsOpen: false,
                    infoOpen: false,
                    shareOpen: false,
                    profileOpen: false,
                    settingsOpen: true,
                }
            } else {
                state = {
                    upgradesOpen: false,
                    stickersOpen: false,
                    staticsOpen: false,
                    infoOpen: false,
                    shareOpen: false,
                    profileOpen: false,
                    settingsOpen: false,
                }
            }
            return state;
        default: return state;
    }
}

export default openedWindows;