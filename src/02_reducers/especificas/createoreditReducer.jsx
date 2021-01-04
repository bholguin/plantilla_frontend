const initialState = {
    open: false
}

export default function createoredit(state = initialState, actions) {
    switch (actions.type) {
        case 'CLOSE_COE_MODAL':
            return { ...state, open: false};
        case 'OPEN_COE_MODAL':
            return {...state, open: true};
        default:
            return state;
    }
}