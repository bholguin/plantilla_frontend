import { USUARIO_TYPES } from '../../01_actions/types'


export const user = (state = {
    list: [],
    model: {
        id: '',
        nombre: '',
        apellido: '',
        username: '',
        id_publico: ''
    }
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
        case USUARIO_TYPES.FEATCH:
            return {
                ...state,
                model: action.payload
            }
        case USUARIO_TYPES.CLEAR:
            return {
                ...state,
                model: {
                    id: '',
                    nombre: '',
                    apellido: '',
                    username: '',
                    id_publico: ''
                }
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






