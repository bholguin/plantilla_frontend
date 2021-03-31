import { USUARIO_TYPES } from '../../01_actions/types'
import { remove } from "lodash";

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
        case USUARIO_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case USUARIO_TYPES.UPDATE:
            return {
                ...state,
                list: state.list.map(item => item.id === action.payload.id ? item = action.payload : item)
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
        case USUARIO_TYPES.DELETE:
            return {
                ...state,
                list: remove([...state.list], (item) => item.id !== action.payload)
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






