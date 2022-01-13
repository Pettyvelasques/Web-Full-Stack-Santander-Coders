import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/01-Componentes-Simples';
import App2 from './components/02-Props';
import App3 from './components/03-Estado';
import App4 from './components/04-Renderização-Condicional';
import App5 from './components/05-Ciclo-de-Vida';
import Lista01 from './components/06-Renderização-de-Lista';
import Lista02 from './components/07-Renderização-de-Lista-2';
import {Lista03, Item} from './components/08-Componentes-Aninhados';
import Formulario from './components/09-Formularios';
import Hello from './components/10-Componentes-Funcionais';
import StateHook from './components/11-useState';
import EffectHook from './components/12-useEffect';
import Televisor from './components/13-Televisor';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Formulario />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
