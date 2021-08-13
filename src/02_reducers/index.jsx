import {combineReducers} from "@reduxjs/toolkit"
//new
import {user} from './config/usuario'
import {empresa} from "./config/empresa";
import {auth} from './login'
import {sig} from "./sig"

export default combineReducers({
    auth,
    empresa,
    user,
    sig
});

