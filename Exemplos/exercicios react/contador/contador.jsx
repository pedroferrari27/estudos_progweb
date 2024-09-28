
import React,{ useState } from 'react';
import './App.css';


function Contador() {
      const [count, setCount] = useState(1000);

      return (
    <div>
      <p> Voce clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  )
}

export default Contador
