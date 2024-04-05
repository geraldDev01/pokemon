import { createContext, useContext } from "react";
import { PokemonContextType } from "./type";

export const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const usePokemonContext = () => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error("usePokemonContext must be used within a PokemonProvider");
    }
    return context;
};