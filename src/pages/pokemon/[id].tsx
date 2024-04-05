import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PokemonType } from '@/services/pokemon/type';
import { getPokemonByIdOrName } from '@/services/pokemon';
import Image from 'next/image';
import pokemonIcon from "@/assets/images/pokemon.jpeg";

export default function PokemonDetail(): JSX.Element {
    const router = useRouter();
    const { id } = router.query;
    const [pokemon, setPokemon] = useState<PokemonType | null>(null);

    useEffect(() => {
        fetchPokemon();

    }, [id]);
    console.log(pokemon)
    const fetchPokemon = async () => {
        try {
            if (typeof id === 'string') {
                const fetchedPokemon = await getPokemonByIdOrName(id);
                setPokemon(fetchedPokemon);
            }
        } catch (error) {
            console.error('Error fetching pokemon:', error);
        }
    };

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='logo-container-detail'>
                <figure>
                    <Image
                        src={pokemonIcon}
                        alt="pokemon logo"
                        height={220}
                        priority
                    />
                </figure>
            </div>
            <section className="section_detail">
                <div className="card">
                    <div className="imgBx">
                        <figure>
                            <Image
                                width={400}
                                height={450}
                                className="img-fluid Character-image"
                                src={pokemon.imageUrl}
                                alt={pokemon.name}
                            />
                        </figure>
                    </div>
                </div>

                <div className="pokemon-info">
                    <h1 className="lg-text">My name is {pokemon.name}</h1>

                    <div className='line'></div>
                    <p className="md-text">Information</p>
                    <div className='info-content'>
                        <p>Expirience level: <strong>{pokemon.experience}</strong> </p>
                        <p>Height: <strong>{pokemon.height}</strong></p>
                        <p>Weight: <strong>{pokemon.weight}</strong> </p>
                    </div>
                    <div className='line'></div>
                    <p className="md-text">abilities</p>
                    <div className="abilities-container">
                        {pokemon.abilities.map((ability, index) => (
                            <div
                                key={index}
                                className={`ability ${ability.is_hidden ? 'hidden-ability' : ''}`}
                            >
                                {ability.ability.name}
                            </div>
                        ))}
                    </div>
                    <div className="line"></div>

                    <p className="md-text">Type</p>
                    <div className="types-container">
                        {pokemon.types.map((type, index) => (
                            <div key={index} className={`type ${type.type.name}`}>
                                {type.type.name}
                            </div>
                        ))}
                    </div>
                </div>

            </section>

        </div>
    );
}
