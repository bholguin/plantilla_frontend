import { 
    COE_MODAL_TYPE, 
    DELETE_MODAL_TYPE
} from "../../01_actions/types";

export const createoredit = (state = {
    open: false,
    initialValues: {},
    buttonProps: {
        tittle: '',
        submit: () => { }
    }
}, actions) => {
    switch (actions.type) {
        case COE_MODAL_TYPE.CLOSE:
            return {
                ...state,
                open: false,
                initialValues: state.initialValues,
                buttonProps: state.buttonProps
            };
        case COE_MODAL_TYPE.OPEN:
            return {
                ...state,
                open: true,
                initialValues: actions.initialValues ? actions.initialValues : state.initialValues,
                buttonProps: actions.buttonProps
            };
        default:
            return state;
    }
}



export const alertdelete = (state = {
    open: false
}, actions) => {
    switch (actions.type) {
        case DELETE_MODAL_TYPE.CLOSE:
            return {
                ...state,
                open: false
            };
        case DELETE_MODAL_TYPE.OPEN:
            return {
                ...state,
                open: true
            };
        default:
            return state;
    }
}