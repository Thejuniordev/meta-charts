import React from "react";

import './App.css';
import Bar from "./lib/components/Bar";

const Items = [
  {id: 1, caption: 'Novos Clientes', value: '200', percent: '100%'},
  {id: 2, caption: 'Visita', value: '168', percent: '80.8%'},
  {id: 3, caption: 'Proposta', value: '168', percent: '50.8%'},
  {id: 4, caption: 'Garantia', value: '168', percent: '30.8%'},
  {id: 5, caption: 'Formalização', value: '168', percent: '22.8%'},
  {id: 5, caption: 'Concluídos', value: '168', percent: '7.58%'},
];

const Lines = [
  {id: 1, value: '200'},
  {id: 2, value: '150'},
  {id: 3, value: '100'},
  {id: 4, value: '50'},
]
const App = () => (
  <div className="container">
    <h1>Meta Charts by Junior Alves</h1>
    <div className='card'>
    <h2 className='card__title'>Funil de conversão</h2>
      <Bar items={Items} lines={Lines}/>
    </div>
  </div>
);
export default App;