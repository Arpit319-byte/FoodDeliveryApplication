import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import './App.css';




function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main-content">
        <Home />
      </main>
    </div>
  );
}

export default App;
