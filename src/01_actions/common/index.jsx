import {
    COE_MODAL_TYPE,
    DELETE_MODAL_TYPE
} from "../types";


export const actCloseCOEModal = () => dispatch => {
    dispatch({
        type: COE_MODAL_TYPE.CLOSE
    })
}

export const actOpenCOEModal = (data) => dispatch => {
    dispatch({
        type: COE_MODAL_TYPE.OPEN,
        payload: data
    })
}

export const actCloseDeleteItem = () => dispatch => {
    dispatch({
        type: DELETE_MODAL_TYPE.CLOSE
    })
}

export const actOpenDeleteItem = (data) => dispatch => {
    dispatch({
        type: DELETE_MODAL_TYPE.OPEN,
        payload: data
    })
}