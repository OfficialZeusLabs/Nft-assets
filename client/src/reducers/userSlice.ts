import { UserInterface } from "@/interfaces/user_interface";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: UserInterface = {
  title: null,
  description: null,
  whitepaper: null,
  goal: null,
  discordLink: null,
  website: null,
  email: null,
  discordId: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setWhitepaper: (state, action) => {
      state.whitepaper = action.payload;
    },
    setGoalText: (state, action) => {
      state.goal = action.payload;
    },
    setDiscordLink: (state, action) => {
      state.discordLink = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setDiscordId: (state, action) => {
      state.discordId = action.payload;
    },
    setWebsite: (state, action) => {
      state.website = action.payload;
    },
  },
});

export const getTitle = (state: RootState) => state.user.title;
export const getDescription = (state: RootState) => state.user.description;
export const getWhitepaper = (state: RootState) => state.user.whitepaper;
export const getGoalText = (state: RootState) => state.user.goal;
export const getEmail = (state: RootState) => state.user.email;
export const getWebsite = (state: RootState) => state.user.website;
export const getDiscordId = (state: RootState) => state.user.discordId;
export const getDiscordLink = (state: RootState) => state.user.discordLink;

export const {
  setTitle,
  setDescription,
  setWhitepaper,
  setEmail,
  setDiscordId,
  setWebsite,
  setGoalText,
  setDiscordLink,
} = userSlice.actions;
export default userSlice.reducer;
