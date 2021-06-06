import React from 'react';
import Navbar from './sections/Navbar';
function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="page-section home"></div>
      <div className="page-section portfolio"></div>
      <div className="page-section about"></div>
      <div className="page-section contact"></div>

    </div>
  );
}

export default App;
