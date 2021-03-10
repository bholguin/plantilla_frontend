import { createSelector } from "@reduxjs/toolkit";

export const deleteModalSelector = createSelector(
    state => state.alertdelete,
    alertdelete => alertdelete,
);