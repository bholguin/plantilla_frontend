import { createSelector } from "@reduxjs/toolkit";

export const userSelector = createSelector(
    state => state.user,
    state => state.createoredit,
    (user, createoredit) => {
        return{
            user,
            createoredit
        }
    }
);