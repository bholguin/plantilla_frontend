import {USUARIO_TYPES as TYPES} from '../../../01_actions/types';
import baseReducer from '../../baseReducer';

export default function (state = [], actions){
    return baseReducer(TYPES, state, actions)
}