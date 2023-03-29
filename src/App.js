import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PokemonsPage from "./pages/PokemonsPage/PokemonsPage"
import GamePage from "./pages/GamePage/GamePage";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}> </Route>
          <Route path="/pokemons" element={<PokemonsPage></PokemonsPage>}> </Route>
          <Route path="/pokemons/:pokemonId"> </Route>
          {/* <Route path="/location/:locationName" element={<LocationDetailPage></LocationDetailPage>}> </Route> */}
          <Route path="/game" element={<GamePage></GamePage>}> </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
