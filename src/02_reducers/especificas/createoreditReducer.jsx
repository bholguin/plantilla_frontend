const initialState = {
    open: false,
    initialValues: {
        nombre: '',
        apellido: '',
        username: ''
    }
}

export default function createoredit(state = initialState, actions) {
    switch (actions.type) {
        case 'CLOSE_COE_MODAL':
            return { ...state, open: false, initialValues: initialState.initialValues };
        case 'OPEN_COE_MODAL':
            return {
                ...state,
                open: true,
                initialValues: actions.initialValues ? actions.initialValues : state.initialValues
            };
        default:
            return state;
    }
}