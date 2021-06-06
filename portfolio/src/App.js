import React from 'react';
import Navbar from './sections/Navbar';
import Home from './sections/Home'
function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <div className="page-section portfolio"></div>
      <div className="page-section about"></div>
      <div className="page-section contact"></div>

    </div>
  );
}

export default App;
