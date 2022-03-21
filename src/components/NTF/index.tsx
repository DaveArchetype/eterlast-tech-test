// the interface for the NFTType
interface NFTType {
  name: string;
  collection: string;
  description: string;
  asset_id: string;
  picture: string;
}

// the interface for the NFTProps containing the i, being the index of the rendered component, to be added as a key and the nft object
interface NFTProps {
  i: number;
  nft: NFTType;
}

// rendering a basic NFT consisting of 1 div containing 1 h4 element for the name, 3 p tags for different details of the nft and the image of the nft
export const NFT = ({ i, nft }: NFTProps) => {
  return (
    <div key={i}>
      <h4>NTF Name: {nft.name}</h4>
      <p>Collection: {nft.collection}</p>
      <p>Description: {nft.description}</p>
      <p>Asset ID: {nft.asset_id}</p>
      <img src={nft.picture} style={{ width: 400 }} alt={nft.description} />
    </div>
  );
};
