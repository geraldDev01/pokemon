"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getPokemons } from "@/services/pokemon/index";
import { PokemonType } from "@/services/pokemon/type";
import { Card } from "@/components/Card";

type PokemonContextType = {
    pokemonCards: JSX.Element[];
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    loadPokemons: () => Promise<void>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setPokemonCards: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
}

type PokemonProviderProps = {
    children: React.ReactNode;
}
const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const usePokemonContext = () => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error("usePokemonContext must be used within a PokemonProvider");
    }
    return context;
};

export const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
    const [pokemonCards, setPokemonCards] = useState<JSX.Element[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [search, setSearch] = useState("")
    const itemsPerPage = 21;

    const loadPokemons = async () => {
        try {
            const options = {
                name: search,
                limit: itemsPerPage,
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
    }, [search]);

    return (
        <PokemonContext.Provider value={{ pokemonCards,setCurrentPage, setPokemonCards, currentPage, loadPokemons, search, setSearch }}>
            {children}
        </PokemonContext.Provider>
    );
};