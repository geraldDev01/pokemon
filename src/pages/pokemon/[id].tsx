import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PokemonType } from '@/services/pokemon/type';
import { getPokemonByIdOrName } from '@/services/pokemon';
import Image from 'next/image';

export default function PokemonDetail(): JSX.Element {
    const router = useRouter();
    const { id } = router.query;
    const [pokemon, setPokemon] = useState<PokemonType | null>(null);

    useEffect(() => {
        fetchPokemon();
    }, [id]);

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

            <div className="Character-info">
                <h1 className="x-large title-text">{pokemon.name}</h1>

                <div className='line'></div>
                <p className="large">Information</p>
                <div>
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                </div>
                <div className="line"></div>

            </div>

        </section>

    );
}
