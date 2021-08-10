import { EMPRESA_TYPE } from '../../../01_actions/types'

export const empresa = (state = {
    empresas: []
}, action) => {
    switch (action.type) {
        case EMPRESA_TYPE.SUCCESS:
            return{
                ...state, 
                empresas: action.payload
            }
        default:
            return {...state}
    }
}