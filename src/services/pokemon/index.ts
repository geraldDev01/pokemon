import { requestData } from "../axios/requestData";
import { PokemonType, OptionsType } from "./type";

export const getPokemons: () => Promise<Array<PokemonType>> = async (options: OptionsType = {}) => {
  const {
    limit = 20,
    offset = 0,
  } = options;

  const params = {
    limit,
    offset,
  };

  const url = '/pokemon';

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
      return pokemonData;

    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('Error fetching pokemons:', error);
    throw error;
  }
};