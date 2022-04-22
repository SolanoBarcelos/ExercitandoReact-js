import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Geral from './Componentes/Geral';
import Home from './Pages/Home';
import Cores from './Pages/Cores/Cores';
import PokeAPI from './Pages/PokeAPI/PokeAPI';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route element={<Geral/>}>

  <Route path="/" element={<Home />} />
  <Route path="/cores" element={<Cores />} />
  <Route path="/pokeApi" element={<PokeAPI />} />
  

  </Route>
</Routes> 

</BrowserRouter>
  );
}

export default App;
