import React from 'react';
import { MainComp } from './components/MainNav';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';

export function url() {
  return "http://127.0.0.1:8000/api/"
}

function App() {
  return (
    <BrowserRouter>
      <MainComp />
    </BrowserRouter>
  )
}
export default App;
