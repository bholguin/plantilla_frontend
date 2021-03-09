import { USUARIO_TYPES } from '../../01_actions/types'


export const user = (state = {
    list: []
}, action) => {
    switch (action.type) {
        case USUARIO_TYPES.LOAD:
            return {
                ...state,
            }
        case USUARIO_TYPES.FEATCH_ALL:
            return {
                ...state,
                list: action.payload
            }
        case USUARIO_TYPES.ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
};






