import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { add } from "../../features/nftsSlice";

// the interface for the NFT to be minted
interface NFTType {
  name: string;
  image_url: string;
  description: string;
  external: string;
}

// this renders an input field
export const Mint = () => {
  const dispatch = useDispatch();
  const [collection, setCollection] = useState("");

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
    <div>
      <input
        className="collectionInput"
        placeholder="Collection name"
        value={collection}
        onChange={(e) => {
          setCollection(e.target.value);
        }}
      />
      <button className="mintButton" onClick={() => handleRequest()}>
        Mint
      </button>
    </div>
  );
};
