import { createSelector } from "@reduxjs/toolkit";

export const empresasSelector = createSelector(
    state => state.empresa,
    empresa => empresa.empresas
);