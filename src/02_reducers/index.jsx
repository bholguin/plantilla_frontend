import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import auth from './generales/authenticationReducer';
import createoredit from './especificas/createoreditReducer';
import alertdelete from './generales/alertDeleteReducer';
import usuariosReducer from './especificas/usuarios/usuariosReducers';


const rootReducer = combineReducers({
    form: formReducer,
    auth,
    createoredit,
    alertdelete,
    usuarios: usuariosReducer
});

export default rootReducer;