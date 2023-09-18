import { LaunchPadInterface } from "@/interfaces/launchpad_interface";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: LaunchPadInterface = {
  project: {},
  artworks: {},
  team: {},
  sales: {},
};
export const usersSlice = createSlice({
  name: "userss",
  initialState,
  reducers: {
    setProject: (state, action) => {
      state.project = action.payload;
    },
    setTeam: (state, action) => {
      state.team = action.payload;
    },
    setSales: (state, action) => {
      state.sales = action.payload;
    },
    setArtworks: (state, action) => {
      state.artworks = action.payload;
    },
  },
});

export const getProject = (state: RootState) => state.users.project;
export const getSales = (state: RootState) => state.users.sales;
export const getArtworks = (state: RootState) => state.users.artworks;
export const getTeam = (state: RootState) => state.users.team;

export const { setProject, setTeam, setArtworks, setSales } =
  usersSlice.actions;
export default usersSlice.reducer;
