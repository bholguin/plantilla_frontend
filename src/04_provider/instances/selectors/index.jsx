import { createSelector } from "@reduxjs/toolkit";

export const authSelector = createSelector(
    state => state.auth,
    auth => auth,
);