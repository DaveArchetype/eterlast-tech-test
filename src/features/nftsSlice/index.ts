import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
interface NFTState {
  creator_wallet_id: string;
  creator_network: string;
  assets: NFT[];
}

interface Metadata {
  creator_wallet_id: any;
  creator_network: any;
}

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
