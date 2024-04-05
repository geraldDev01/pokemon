"use client"
import { usePokemonContext } from "@/context/PokemonContext/PokemonContext";
import Scroll from "react-infinite-scroll-component";

export const CardList: React.FC = () => {
    const { pokemonCards, loadPokemons } = usePokemonContext();

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
                    loader={<div className="no-results-container"><h1>Loading...</h1></div>}
                >
                    <div className="cardList-container">{pokemonCards}</div>
                </Scroll>
            )}
        </div>
    );
};
