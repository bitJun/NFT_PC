// import Home from './pages/home/Home';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';

function App() {
  return (
    <div className="ichainfo-app">
      {useRoutes(routes)}
    </div>
  );
}

export default App;
