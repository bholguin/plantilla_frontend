
export const CloseCOEModal = () => {
    return dispatch => {
        return dispatch({
            type: 'CLOSE_COE_MODAL'
        })
    }
}


export const OpenCOEModal = () => {
    return dispatch => {
        return dispatch({
            type: 'OPEN_COE_MODAL'
        })
    }
}