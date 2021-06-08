import React, { useRef } from 'react'
import ModalCloseIcon from '../assets/cancel.svg';
import closeSVG from '../assets/close.svg'
import { useSpring, animated } from 'react-spring';
import Divider from "./Divider"
import Button from './Button';
const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const blurBackground = () => {
    const container = document.querySelector("container")
    container.style.className = "blur"
  }
  return (
    <>
      {showModal ? (
        <div className="modal-background" onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <div className="modal-container" showModal={showModal}>
              <div className="modal-content">
                <div className="top-modal">
                  <h3 className="section-heading top-modal">Chess AI</h3>
                  <Divider isDark={true} />
                </div>
                <img className="howard" alt="old man" src="https://bloximages.chicago2.vip.townnews.com/dbrnews.com/content/tncms/assets/v3/editorial/6/74/674771da-d4cc-11e4-9b29-3fad60dd67f1/5515d340914f9.image.jpg" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <Button text="Close Window" svg={true} clickFunction={() => setShowModal(prev => !prev)} />
              </div>
              <img className="close-button" src={closeSVG} alt="close"
                onClick={() => setShowModal(prev => !prev)}
              />
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;