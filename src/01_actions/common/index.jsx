import {
    COE_MODAL_TYPE,
    DELETE_MODAL_TYPE
} from "../types";


export const actCloseCOEModal = () => dispatch => {
    dispatch({
        type: COE_MODAL_TYPE.CLOSE
    })
}

export const actOpenCOEModal = (buttonProps = {}) => dispatch => {
    dispatch({
        type: COE_MODAL_TYPE.OPEN,
        buttonProps: buttonProps
    })
}

export const actCloseDeleteItem = () => dispatch => {
    dispatch({
        type: DELETE_MODAL_TYPE.CLOSE
    })
}

export const actOpenDeleteItem = () => dispatch => {
    dispatch({
        type: DELETE_MODAL_TYPE.OPEN
    })
}