import { createSelector } from "@reduxjs/toolkit";

export const tokenSelector = createSelector(
    state => state.auth,
    (auth) => {
       return{
           apiToken: auth.token,
           microsoftToken: auth.microsoftToken.access_token
       } 
    }
);