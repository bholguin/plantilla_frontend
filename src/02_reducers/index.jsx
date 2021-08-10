import { combineReducers } from "@reduxjs/toolkit"
//new
import { user } from '../02_reducers/config'
import { empresa } from "../02_reducers/config/empresa";
import { createoredit, alertdelete } from "../02_reducers/common";
import { auth } from '../02_reducers/login'

export default combineReducers({
    auth,
    empresa,
    createoredit,
    alertdelete,
    user
});

