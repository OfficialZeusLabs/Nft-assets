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
  members: null,
  twitter: null,
  linkedin: null,
  nft_type: null,
  mint_date: null,
  mint_price: 0,
  mint_supply: 0,
  marketing_plan: null,
  presale: null,
  more_info: null,
};

export const usersSlice = createSlice({
  name: "userss",
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
    setMembers: (state, action) => {
      state.members = action.payload;
    },
    setTwitter: (state, action) => {
      state.twitter = action.payload;
    },
    setLinkedin: (state, action) => {
      state.linkedin = action.payload;
    },
    setNftType: (state, action) => {
      state.nft_type = action.payload;
    },
    setMintPrice: (state, action) => {
      state.mint_price = action.payload;
    },
    setMintSupply: (state, action) => {
      state.mint_supply = action.payload;
    },
    setMintDate: (state, action) => {
      state.mint_date = action.payload;
    },
    setMarketingPlan: (state, action) => {
      state.marketing_plan = action.payload;
    },
    setPresale: (state, action) => {
      state.presale = action.payload;
    },
    setMoreInfo: (state, action) => {
      state.more_info = action.payload;
    },
  },
});

export const getTitle = (state: RootState) => state.users.title;
export const getDescription = (state: RootState) => state.users.description;
export const getWhitepaper = (state: RootState) => state.users.whitepaper;
export const getGoalText = (state: RootState) => state.users.goal;
export const getEmail = (state: RootState) => state.users.email;
export const getWebsite = (state: RootState) => state.users.website;
export const getDiscordId = (state: RootState) => state.users.discordId;
export const getDiscordLink = (state: RootState) => state.users.discordLink;

export const {
  setTitle,
  setDescription,
  setWhitepaper,
  setEmail,
  setDiscordId,
  setWebsite,
  setGoalText,
  setDiscordLink,
  setLinkedin,
  setMarketingPlan,
  setMembers,
  setMintDate,
  setMintPrice,
  setMintSupply,
  setMoreInfo,
  setNftType,
  setPresale,
  setTwitter,
} = usersSlice.actions;
export default usersSlice.reducer;
