import { createSlice } from "@reduxjs/toolkit";

export const mainScreenSlice = createSlice({
    name: "mainScreenStates",
    initialState: {
        isOpen: false,
    },
    reducers: {
        changeMenuState: (state) => {
            state.isOpen = state.isOpen === true ? false : true;
        }
    },
});

export const { changeMenuState } = mainScreenSlice.actions;
export const getMenuState = (state) => state.mainScreenStates.isOpen;
export default mainScreenSlice.reducer;