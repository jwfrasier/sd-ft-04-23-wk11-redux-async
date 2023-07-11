import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./reducers/counterSlice";
import { fetchPokemon } from "./reducers/pokemonSlice";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const loading = useSelector((state) => state.pokemon.loading);
  const pokemon = useSelector((state) => state.pokemon.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux Async</h1>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(fetchPokemon())}>Fetch Pokemon</button>
      {loading && <p>Loading....</p>}
      {!loading && pokemon.map((poke) => <p key={poke.id}>{poke.name}</p>)}
    </>
  );
}

export default App;
