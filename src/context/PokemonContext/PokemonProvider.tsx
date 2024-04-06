"use client";
import React, { useEffect, useState } from "react";
import { getPokemons } from "@/services/pokemon/index";
import { PokemonType } from "@/services/pokemon/type";
import { Card } from "@/components/Card";
import { PokemonProviderProps } from "./type";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
    const [pokemonCards, setPokemonCards] = useState<JSX.Element[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [search, setSearch] = useState("")
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const itemsPerPage = 21;


    const toggleSortOrder = () =>
        setSortOrder(prevSortOrder => (prevSortOrder === 'asc' ? 'desc' : 'asc'));

    const loadPokemons = async () => {
        try {
            const options = {
                name: search,
                limit: itemsPerPage,
                sortOrder,
                offset: itemsPerPage * currentPage,
            };
            const pokemons = await getPokemons(options);

            if (pokemons) {
                const newCards = pokemons.map((pokemon: PokemonType) => (
                    <Card
                        key={`${pokemon.id}-${pokemon.name}-${Math.random()}`}
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

    useEffect(() => {
        loadPokemons();
    }, [search, sortOrder]);
    return (
        <PokemonContext.Provider value={{
            pokemonCards, setCurrentPage, setPokemonCards, currentPage, loadPokemons, search, setSearch, sortOrder,
            toggleSortOrder
        }}>
            {children}
        </PokemonContext.Provider>
    );
};