import { createSelector } from "@reduxjs/toolkit";

export const sigSelector = createSelector(
    state => state.sig,
    sig => sig,
);