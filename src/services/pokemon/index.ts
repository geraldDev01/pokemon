import { requestData } from "../axios/requestData";

type Pokemon = {
  id: number;
  name: string;
  imageUrl: string;
  detailsUrl: string;
};

export const getPokemons: () => Promise<Array<Pokemon>> = async () => {
  const url = `/pokemon`;

  try {
    const response = await requestData({
      method: "GET",
      url,
    });

    console.log(response);

    if (Array.isArray(response.data.results)) {
      console.log(response.data.results);
      return response.data.results
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    throw error;
  }
};
