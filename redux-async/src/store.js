import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import pokemonReducer from "./reducers/pokemonSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
