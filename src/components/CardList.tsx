"use client"
import { useEffect, useState } from "react";
import Scroll from "react-infinite-scroll-component";
import { Card } from "./Card";
import { getPokemons } from "@/services/pokemon/index";
import { PokemonType } from "@/services/pokemon/type";

export const CardList: React.FC = () => {
    const [pokemonCards, setPokemonCards] = useState<JSX.Element[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const itemsPerPage = 21;

    useEffect(() => {
        loadPokemons();
    }, []);

    const loadPokemons = async () => {
        try {
            const options = {
                limit: itemsPerPage,
                offset: itemsPerPage * currentPage,
            };
            const pokemons = await getPokemons(options);

            if (pokemons) {
                const newCards = pokemons.map((pokemon: PokemonType) => (
                    <Card
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
                ));

                setPokemonCards((prevData) => [...prevData, ...newCards]);
                setCurrentPage((prevPage) => prevPage + 1);
            }
        } catch (error) {
            console.error("Error loading pokemons:", error);
        }
    };


    const showNoItemsMessage = () => {
        return (
            <div className="no-results-container">
                <h1>No results for your search</h1>
            </div>
        );
    };

    return (
        <div>
            {!pokemonCards || pokemonCards.length === 0 ? (
                <div>{showNoItemsMessage()}</div>
            ) : (
                <Scroll
                    dataLength={pokemonCards.length}
                    next={loadPokemons}
                    hasMore={true}
                    loader={<h1>Loading...</h1>}
                >
                    <div className="cardList-container">{pokemonCards}</div>
                </Scroll>
            )}
        </div>
    );
};
