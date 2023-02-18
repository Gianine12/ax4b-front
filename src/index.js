import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './styles/global';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import NotFound from './pages/NotFound';
import Restaurantes from './pages/Restaurante';
import Ranking from './pages/Ranking';
import Vencedor from './pages/Vencedor';
import Votacao from './pages/Votacao';
import Home from './pages/Home';
import Usuario from './pages/Usuario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
      <Routes element={<App/>}>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/restaurante' element={<Restaurantes/>}/>
        <Route path='/votacao' element={<Votacao/>}/>
        <Route path='/ranking' element={<Ranking/>}/>
        <Route path='/vencedor' element={<Vencedor/>}/>
        <Route path='/usuario' element={<Usuario/>}/>
        <Route element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
