type Pokemon = {
  id: number;
  name: string;
  imageUrl: string;
  detailsUrl: string;
};

type CardProps = {
  pokemon: Pokemon;
  //   onDetailsClick: (detailsUrl: string) => void;
};

export const Card: React.FC<CardProps> = ({ pokemon }) => {
  const handleDetailsClick = () => {
    // onDetailsClick(pokemon.detailsUrl);
  };

  return (
    <div className="Card-container">
      <div className="Card-content">
        <img className="Card-image" src={pokemon.imageUrl} alt={pokemon.name} />
        <h2 className="Card-name">{pokemon.name}</h2>
      </div>
      <button className="Card-button" onClick={handleDetailsClick}>
        See Details
      </button>
    </div>
  );
};
