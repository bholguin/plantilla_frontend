
export const CloseDeleteItem = () => {
    return dispatch => {
        return dispatch({
            type: 'CLOSE_DELETE_ITEM'
        })
    }
}


export const OpenDeleteItem = (buttonProps = {}) => {
    return dispatch => {
        return dispatch({
            type: 'OPEN_DELETE_ITEM',
            //buttonProps: buttonProps
        })
    }
}