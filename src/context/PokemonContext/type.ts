export type PokemonContextType = {
    pokemonCards: JSX.Element[];
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    loadPokemons: () => Promise<void>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setPokemonCards: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
}

export type PokemonProviderProps = {
    children: React.ReactNode;
}