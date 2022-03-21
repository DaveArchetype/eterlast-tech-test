interface Props {
  collection: string;
  setCollection: Function;
  handleRequest: Function;
}

export const Mint = ({ collection, setCollection, handleRequest }: Props) => {
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
