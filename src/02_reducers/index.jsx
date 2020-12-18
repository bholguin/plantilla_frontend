import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import auth from './generales/authenticationReducer';
import createoredit from './especificas/createoreditReducer';
import usuariosReducer from './especificas/usuarios/usuariosReducers';

const rootReducer = combineReducers({
    form: formReducer,
    auth,
    createoredit,
    usuarios: usuariosReducer
});

export default rootReducer;