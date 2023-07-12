import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import pokemonReducer from "./reducers/pokemonSlice";
import fetchPokemon2 from "./reducers/pokemonCreateApiSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,
    [fetchPokemon2.reducerPath]: fetchPokemon2.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(fetchPokemon2.middleware),
});
