import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cores from './Pages/Cores/Cores';
import Geral from './Componentes/Geral'

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route element={<Geral/>}>

  <Route path="/" element={<Home />} />
  <Route path="/cores" element={<Cores />} />
  

  </Route>
</Routes> 

</BrowserRouter>
  );
}

export default App;
