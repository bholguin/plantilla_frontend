import { createSelector } from "@reduxjs/toolkit";

export const appSelector = createSelector(
    state => state.auth,
    auth => auth,
);