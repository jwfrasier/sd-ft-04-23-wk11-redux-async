import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./reducers/counterSlice";
import { fetchPokemon } from "./reducers/pokemonSlice";
import fetchPokemon2, {
  useGetPokemonQuery,
  useLazyGetPokemonQuery,
} from "./reducers/pokemonCreateApiSlice";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  // const { data, error, isLoading } = useGetPokemonQuery();
  const [trigger, { data: pokemonData, isLoading, error }] =
    useLazyGetPokemonQuery();

  const handleClick = () => {
    trigger();
  };

  return (
    <>
      <h1>Redux Async</h1>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(fetchPokemon())}>Fetch Pokemon</button>
      <button onClick={handleClick}>Get Pokémon</button>
      {pokemonData &&
        pokemonData?.results.map((pokemon) => {
          return <p key={pokemon.name}>{pokemon.name}</p>;
        })}
    </>
  );
}

export default App;
