import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openSideNav:false
  };

export const ActionSlice = createSlice({
    name: "actions",
    initialState,
    reducers: {
        SideNavToggle:(state)=>{
            state.openSideNav = !state.openSideNav;
        },
        
    }
})


export const { SideNavToggle } = ActionSlice.actions;
export default ActionSlice.reducer;