import React, { useState, useEffect } from 'react';
import '../styles/Home.scss'; 

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  }, [count]);

  return (
    <div className="home-container">
      <h1 className="home-titulo">Home Page</h1>
      <p className="home-texto">Você clicou {count} vezes</p>
      <button className="home-button" onClick={() => setCount(count + 1)}>
        Clique aqui para testar queridinho
      </button>
    </div>
  );
};

export default Home;
