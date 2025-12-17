import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* Contenido de relleno para probar el scroll */}
      <div style={{ height: '200vh', paddingTop: '100px', textAlign: 'center' }}>
        <h1>Haz scroll hacia abajo para ver la magia en la barra</h1>
        <p>Aquí irá el video de fondo...</p>
      </div>
    </div>
  );
}

export default App;