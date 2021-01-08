const initialState = {
    open: false,
    initialValues: {
        nombre: '',
        apellido: '',
        username: ''
    },
    buttonProps: {
        tittle: '',
        submit: () => { }
    }
}

export default function createoredit(state = initialState, actions) {
    switch (actions.type) {
        case 'CLOSE_COE_MODAL':
            return {
                ...state,
                open: false,
                initialValues: initialState.initialValues,
                buttonProps: initialState.buttonProps
            };
        case 'OPEN_COE_MODAL':
            return {
                ...state,
                open: true,
                initialValues: actions.initialValues ? actions.initialValues : initialState.initialValues,
                buttonProps: actions.buttonProps
            };
        default:
            return state;
    }
}