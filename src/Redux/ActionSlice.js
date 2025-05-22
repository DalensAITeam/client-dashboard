import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openSideNav: false,
    ipAddress: [],
    streamStats: {
        total_animals: 0,
        animal_count: 0,
        attack_count: 0,
        healthy_count: 0,
        feeding_count: 0,
        health: 95,
        feeding: 60,
        activity: 75,
        threat_state: 'good',
        states: {
            feeding: 0,
            active: 0
        }
    }
};

export const actionSlice = createSlice({
    name: "actions",
    initialState,
    reducers: {
        SideNavToggle: state => {
            state.openSideNav = !state.openSideNav;
        },
        setIpAddress: (state, action) => {
            state.ipAddress = action.payload;
        },
        updateStreamStats: (state, action) => {
            state.streamStats = {
                ...state.streamStats,
                ...action.payload,
                states: {
                    ...state.streamStats.states,
                    ...(action.payload.states || {})
                }
            };
        }
    }
});

export const { SideNavToggle, setIpAddress, updateStreamStats } = actionSlice.actions;
export default actionSlice.reducer;
