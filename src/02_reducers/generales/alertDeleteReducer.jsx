const initialState = {
    open: false
}

export default function alertdelete(state = initialState, actions) {
    switch (actions.type) {
        case 'CLOSE_DELETE_ITEM':
            return {
                ...state,
                open: false
            };
        case 'OPEN_DELETE_ITEM':
            return {
                ...state,
                open: true
            };
        default:
            return state;
    }
}