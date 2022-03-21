import { render } from "@testing-library/react";
import { Mint } from "./components/Mint";
import { NFT } from "./components/NTF";

test("renders the Mint with the correct placeholder for the input", () => {
  const { getByPlaceholderText } = render(
    <Mint
      collection=""
      setCollection={() => {
        console.log("test");
      }}
      handleRequest={() => {
        console.log("test");
      }}
    />
  );

  expect(getByPlaceholderText(/Collection Name/i)).toBeInTheDocument();
});

test("renders the NFT component", () => {
  const { getByText } = render(
    <NFT
      i={2}
      nft={{
        name: "NFT",
        collection: "NFT Collection",
        description: "NFT Description",
        asset_id: "1a",
        picture: "urlhere",
      }}
    />
  );

  expect(getByText(/NFT Collection/i)).toBeInTheDocument();
});
