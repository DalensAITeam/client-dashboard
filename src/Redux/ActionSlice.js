import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    openSideNav: false,
    threatState: '',
};

export const actionSlice = createSlice({
    name: "actions",
    initialState,
    reducers: {
        SideNavToggle: state => {
            state.openSideNav = !state.openSideNav;
        },
        setThreatState: (state, action) => {
            state.threatState = action.payload;
        },
        setAnimalNumber:(state, action)=>{
            state.animalNumber = action.payload;
        }
    }
});

export const { SideNavToggle, setThreatState, setAnimalNumber } = actionSlice.actions;
export default actionSlice.reducer;
