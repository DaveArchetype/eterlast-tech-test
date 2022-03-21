interface NFTType {
  name: string;
  collection: string;
  description: string;
  asset_id: string;
  picture: string;
}

interface NFTProps {
  i: number;
  nft: NFTType;
}

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
