import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { setMetadata } from "./features/nftsSlice";
import { useEffect } from "react";
import { RootState } from "./app/store";
import "./App.css";
import { Mint } from "./components/Mint";
import { NFT } from "./components/NTF";

// getting the provider to be able to work with the MetaMask wallet
let provider = new ethers.providers.Web3Provider(window.ethereum);

function App() {
  const dispatch = useDispatch();
  const nfts = useSelector((state: RootState) => state.nfts);

  // this useEffect has the purpose to initialize the nfts state in the store with the details of the network and wallet
  useEffect(() => {
    async function initializingMetadata() {
      let account = await provider.send("eth_requestAccounts", []);
      let network = await provider.getNetwork();
      dispatch(
        setMetadata({
          creator_wallet_id: account,
          creator_network: network,
        })
      );
    }
    initializingMetadata();
  }, []);

  // this useEffect will log the ntfs in the console every time the state changes to see all changes
  useEffect(() => {
    console.log(nfts);
  }, [nfts]);

  return (
    <div className="App">
      <Mint />

      {nfts.assets.map((nft, i) => {
        return <NFT i={i} nft={nft} key={i} />;
      })}
    </div>
  );
}

export default App;
