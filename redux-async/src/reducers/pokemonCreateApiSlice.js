// import { createApi } from "@reduxjs/toolkit";
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const fetchPokemon2 = createApi({
  reducerPath: "pokemon2",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: () => `/pokemon`,
    }),
    getPokemonById: builder.query({ query: (id) => `/pokemon/${id}` }),
  }),
});
console.log(fetchPokemon2);

export const { useGetPokemonQuery, useLazyGetPokemonQuery } = fetchPokemon2;

export default fetchPokemon2;
