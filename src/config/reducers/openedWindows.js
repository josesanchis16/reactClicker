const initialState = {
    upgradesOpen: false,
    stickersOpen: false,
    staticsOpen: false,
}

function openedWindows(state = initialState, action) {
    switch (action.type) {
        case 'toggleUpgrades':
            if (action.payload) {
                state = {
                    upgradesOpen: true,
                    stickersOpen: false,
                    staticsOpen: false,
                }
            } else {
                state = {
                    upgradesOpen: false,
                    stickersOpen: false,
                    staticsOpen: false,
                }
            }
            return state;

        case 'toggleStickers':
            if (action.payload) {
                state = {
                    upgradesOpen: false,
                    stickersOpen: true,
                    staticsOpen: false,
                }
            } else {
                state = {
                    upgradesOpen: false,
                    stickersOpen: false,
                    staticsOpen: false,
                }
            }
            return state;

        case 'toggleStatics':
            if (action.payload) {
                state = {
                    upgradesOpen: false,
                    stickersOpen: false,
                    staticsOpen: true,
                }
            } else {
                state = {
                    upgradesOpen: false,
                    stickersOpen: false,
                    staticsOpen: false,
                }
            }
            return state;
        default: return state;
    }
}

export default openedWindows;