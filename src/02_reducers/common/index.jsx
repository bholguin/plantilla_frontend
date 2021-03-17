import { 
    COE_MODAL_TYPE, 
    DELETE_MODAL_TYPE
} from "../../01_actions/types";

export const createoredit = (state = {
    open: false,
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
                buttonProps: {}
            };
        case COE_MODAL_TYPE.OPEN:
            return {
                ...state,
                open: true,
                buttonProps: actions.payload
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