import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    openSideNav:true
  };

export const ActionSlice = createSlice({
    name: "actions",
    initialState,
    reducers: {
        SideNavOpen:(state)=>{
            state.openSideNav = true
        },
        SideNavClose:(state)=>{
            state.openSideNav = false
        }
    }
})


export const { SideNavOpen, SideNavClose } = ActionSlice.actions;
export default ActionSlice.reducer;