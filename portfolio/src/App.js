import React, { useState } from 'react';
import Navbar from './sections/Navbar';
import Home from './sections/Home'
import Portfolio from "./sections/Portfolio";
import Modal from './common/Modal'
import About from './sections/About'
function App() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(!showModal)
  }
  return (
    <>
      <div className="container">
        <Navbar />
        <Home />
        <Portfolio openModal={openModal} />
        <About />

        <div className="page-section contact"></div>

      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default App;
