import React from "react";

import './App.css';
import Bar from "./lib/components/Bar";

const App = () => (
  <div className="container">
    <h1>Meta Charts by Junior Alves</h1>
    <div className='card'>
    <h2 className='card__title'>Funil de conversão</h2>
      <Bar />
    </div>
  </div>
);
export default App;