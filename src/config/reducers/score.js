const initialScore = {
    score: 0,
    scoreMult: 1,
    scorePerSec: 0,
    scorePerClick : 1,
}

function score(state = initialScore, action) {
    switch (action.type) {
        case 'inc':
            state.score += state.scorePerClick * state.scoreMult;
            return state;

        default: return state;
    }
}

export default score;