import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// the interface for the object passed in the add method
interface NFT {
  asset_id: string;
  name: string;
  picture: string;
  external_link: string;
  description: string;
  collection: string;
  supply: number;
  royalties: number;
  date_of_creation: string;
}

//the interface for the NFT state containing the creator wallet id, network and the assets in the form of an array of NFT objects
interface NFTState {
  creator_wallet_id: string;
  creator_network: string;
  assets: NFT[];
}

// the interface for the object passed in the setMetadata method
interface Metadata {
  creator_wallet_id: any;
  creator_network: any;
}

// the initial state
const initialState: NFTState = {
  creator_wallet_id: "",
  creator_network: "",
  assets: [],
};

export const nftsSlice = createSlice({
  name: "nfts",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<NFT>) => {
      state.assets.push(action.payload);
    },
    setMetadata: (state, action: PayloadAction<Metadata>) => {
      state.creator_wallet_id = action.payload.creator_wallet_id[0];
      state.creator_network = action.payload.creator_network.name;
    },
  },
});

export const { add, setMetadata } = nftsSlice.actions;

export default nftsSlice.reducer;
