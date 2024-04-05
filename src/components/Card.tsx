import { PokemonType } from "@/services/pokemon/type";
import Image from "next/image";


type CardProps = {
  pokemon: PokemonType;
};

export const Card: React.FC<CardProps> = ({ pokemon }) => {
  const handleDetailsClick = () => {
    //TODO
    // send to the details page
  };

  return (
    <div className="Card-container">
      <div className="Card-content">
        <Image width={150} height={150} className="Card-image" src={pokemon.imageUrl} alt={pokemon.name} />
        <h2 className="Card-name">{pokemon.name}</h2>
        <h2 className="Card-name">{pokemon.id}</h2>

      </div>
      <button className="Card-button" onClick={handleDetailsClick}>
        More Details
      </button>
    </div>
  );
};
