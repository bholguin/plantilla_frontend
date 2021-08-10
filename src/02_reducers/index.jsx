import { combineReducers } from "@reduxjs/toolkit"
//new
import { user } from '../02_reducers/config/usuario'
import { empresa } from "../02_reducers/config/empresa";
import { auth } from '../02_reducers/login'

export default combineReducers({
    auth,
    empresa,
    user
});

