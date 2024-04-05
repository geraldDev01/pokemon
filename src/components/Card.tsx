import { PokemonType } from "@/services/pokemon/type";
import Image from "next/image";
import { useRouter } from "next/router";


type CardProps = {
  pokemon: PokemonType;
};

export const Card: React.FC<CardProps> = ({ pokemon }) => {
  const router = useRouter();

  const handleDetailsClick = () => router.push(`/pokemon/${pokemon.id}`)

  return (
    <div className="Card-container">
      <div className="Card-content">
        <Image width={150} height={150} className="Card-image" src={pokemon.imageUrl} alt={pokemon.name} />
        <h2 className="Card-name">{pokemon.name}</h2>
      </div>
      <button className="Card-button" onClick={handleDetailsClick}>
        More Details
      </button>
    </div>
  );
};
