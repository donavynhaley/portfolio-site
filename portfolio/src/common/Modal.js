import React, { useRef } from 'react'
import ModalCloseIcon from '../assets/cancel.svg';
import { useSpring, animated } from 'react-spring';
import Divider from "./Divider"
import Button from './Button';
const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  // close svg
  const svgClose = () => {
    return (<svg class="button-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" data-fa-i2svg=""><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>)
  }

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
                <Button text="Close Window" svg={svgClose()} clickFunction={() => setShowModal(prev => !prev)} />
              </div>
              <img className="close-button" src={ModalCloseIcon} alt="close"
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