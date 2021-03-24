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
                buttonProps: {
                    tittle: actions.payload.tittle,
                    submit: (data) => actions.payload.submit(data)
                }
            };
        default:
            return state;
    }
}



export const alertdelete = (state = {
    open: false,
    submit: () => {},
    item: 0
}, actions) => {
    switch (actions.type) {
        case DELETE_MODAL_TYPE.CLOSE:
            return {
                ...state,
                open: false,
                submit: () => {}
            };
        case DELETE_MODAL_TYPE.OPEN:
            return {
                ...state,
                open: true,
                submit: (data) => actions.payload.submit(data),
                item: actions.payload.item
            };
        default:
            return state;
    }
}