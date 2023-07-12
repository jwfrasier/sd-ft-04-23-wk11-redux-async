// import { createApi } from "@reduxjs/toolkit";
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const fetchPokemon2 = createApi({
  reducerPath: "fetchPokemon2",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: () => `/pokemon`,
    }),
  }),
});

export const { useGetPokemonQuery, useLazyGetPokemonQuery } = fetchPokemon2;

export default fetchPokemon2;
