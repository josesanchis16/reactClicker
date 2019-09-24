import openedWindows from './openedWindows';
import score from './score';

import { combineReducers } from 'redux';

export default combineReducers(
    {
        openedWindows,
        score
    }
)