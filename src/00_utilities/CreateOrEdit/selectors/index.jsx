import { createSelector } from "@reduxjs/toolkit";

export const coeSelector = createSelector(
    state => state.createoredit,
    createoredit => createoredit,
);