import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { add, setMetadata } from "./features/nftsSlice";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { RootState } from "./app/store";
import "./App.css";
import { Mint } from "./components/Mint";
import { NFT } from "./components/NTF";

// getting the provider to be able to work with the MetaMask wallet
let provider = new ethers.providers.Web3Provider(window.ethereum);

// the interface for the NFT to be minted
interface NFTType {
  name: string;
  image_url: string;
  description: string;
  external: string;
}

function App() {
  const dispatch = useDispatch();
  const [collection, setCollection] = useState("");
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

  // the handleRequest is used when clicking the Mint button, to mint a batch of NFT`s gathered from an API, in this case a mock API
  const handleRequest = async () => {
    fetch("https://teststars.free.beeceptor.com")
      .then((res) => res.json())
      .then((data) => {
        var date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
        data.payload.forEach((nft: NFTType): void => {
          dispatch(
            add({
              asset_id: uuid(),
              name: nft.name,
              picture: nft.image_url,
              external_link: nft.external,
              description: nft.description,
              collection: collection || "none",
              supply: data.payload.length,
              royalties: 200,
              date_of_creation: date,
            })
          );
        });
      });

    setCollection("");
  };

  return (
    <div className="App">
      <Mint
        collection={collection}
        setCollection={setCollection}
        handleRequest={handleRequest}
      />

      {nfts.assets.map((nft, i) => {
        return <NFT i={i} nft={nft} key={i} />;
      })}
    </div>
  );
}

export default App;
