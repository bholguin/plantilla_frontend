import {SIG_TYPE} from "../../01_actions/types"

export const sig = (state = {
    breadcrumb: []
}, action) => {
    switch (action.type) {
        case SIG_TYPE.ADD_BREADCRUMB:
            return {
                ...state,
                breadcrumb: [...state.breadcrumb, action.payload]
            }
        case SIG_TYPE.SET_BREADCRUMB:
            return {
                ...state,
                breadcrumb: action.payload
            }
        case SIG_TYPE.CLEAR_BREADCRUMB:
            return {
                ...state,
                breadcrumb: []
            }
        default:
            return state
    }
}