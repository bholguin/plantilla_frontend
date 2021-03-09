import { combineReducers } from "@reduxjs/toolkit"
import auth from './generales/authenticationReducer';
import createoredit from './especificas/createoreditReducer';
import alertdelete from './generales/alertDeleteReducer';
import usuariosReducer from './especificas/usuarios/usuariosReducers';


//new
import {user} from '../02_reducers/config'


console.log(user, 'config reducer')
export default combineReducers({
    auth,
    createoredit,
    alertdelete,
    usuarios: usuariosReducer,
    user
});

