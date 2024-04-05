export type PokemonType = {
    id: number;
    name: string;
    height: number;
    weight: number;
    imageUrl: string;
    experience?: number;
    abilities: Array<PokemonAbility>;
    types: Array<PokemonTypeSlot>;
};

type PokemonAbility = {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
};

type PokemonTypeSlot = {
    slot: number;
    type: {
        name: string;
        url: string;
    };
};

export type OptionsType = {
    name?: string;
    limit?: number;
    offset?: number;
}
