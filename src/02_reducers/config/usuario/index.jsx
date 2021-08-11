import { USUARIO_TYPES } from '../../../01_actions/types'

export const user = (state = {
    usuarios: [],
}, action) => {
    switch (action.type) {
        case USUARIO_TYPES.SUCCESS:
            return {
                ...state,
                usuarios: action.payload
            }
        default:
            return {...state}
    }
};






