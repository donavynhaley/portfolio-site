import React, { useState } from 'react';
import Navbar from './sections/Navbar';
import Home from './sections/Home'
import Portfolio from "./sections/Portfolio";
import Modal from './common/Modal'
import About from './sections/About'
import Contact from './sections/Contact'
import Toast from './common/Toast'
import Footer from './sections/Footer'

function App() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(!showModal)
  }
  const [toastList, setToastList] = useState([]);
  const [toastCount, setToastCount] = useState(0)
  return (
    <>
      <div className="container">
        <Navbar />
        <Home />
        <Portfolio openModal={openModal} />
        <About />
        <Contact toastList={toastList} setToastList={setToastList} toastCount={toastCount} setToastCount={setToastCount} />
        <Footer />
      </div>
      <Toast toastList={toastList} setToastList={setToastList} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default App;
