import { requestData } from "../axios/requestData";
import { PokemonType, OptionsType } from "./type";

export const getPokemons = async (options: OptionsType = {}) => {
  const {
    name = "",
    limit = 20,
    offset = 0,
    sortOrder = "asc", 
  } = options;

  const params: OptionsType = {
    limit,
    offset,
  };

  const url = '/pokemon';

  if (name) {
    params.name = name;
  }

  try {
    const response = await requestData({
      method: 'GET',
      url,
      params,
    });

    const data = response.data;

    if (Array.isArray(data.results)) {
      const promises = data.results.map(async (pokemon: { url: string }) => {
        const pokemonResponse = await requestData({
          method: 'GET',
          url: pokemon.url,
          params,
        });
        return pokemonResponse.data;
      });
      const pokemonData = await Promise.all(promises);

      // As the api does not support sorting, i sort the data here
      pokemonData.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (sortOrder === "asc") {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      });

      const pokemonRequiredData = pokemonData.map((pokemon: any) => {
        return {
          id: pokemon.id,
          name: pokemon.name,
          imageUrl: pokemon.sprites.other.dream_world.front_default,
          types: pokemon.types,
          height: pokemon.height,
          weight: pokemon.weight,
        };
      });
      return pokemonRequiredData;

    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('Error fetching pokemons:', error);
    throw error;
  }
};

export const getPokemonByIdOrName = async (idOrName: string) => {
  try {
    const response = await requestData({
      method: 'GET',
      url: `/pokemon/${idOrName}`,
    });

    const pokemonData = response.data;

    const pokemonRequiredData = {
      id: pokemonData.id,
      name: pokemonData.name,
      imageUrl: pokemonData.sprites.other.dream_world.front_default,
      types: pokemonData.types,
      height: pokemonData.height,
      weight: pokemonData.weight,
      abilities: pokemonData.abilities,
      experience: pokemonData.base_experience
    };

    return pokemonRequiredData;
  } catch (error) {
    console.error(`Error fetching pokemon with ID or name ${idOrName}:`, error);
    throw error;
  }
};