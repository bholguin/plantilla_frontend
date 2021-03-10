import { combineReducers } from "@reduxjs/toolkit"
import auth from './generales/authenticationReducer';
import usuariosReducer from './especificas/usuarios/usuariosReducers';


//new
import {user} from '../02_reducers/config'
import { createoredit, alertdelete } from "../02_reducers/common";

export default combineReducers({
    auth,
    createoredit,
    alertdelete,
    usuarios: usuariosReducer,
    user
});

