export type PokemonType = {
    id: number;
    name: string;
    height: number;
    weight: number;
    imageUrl: string;
    types: Array<string>;
};

export type OptionsType = {
    limit?: number;
    offset?: number;
}
