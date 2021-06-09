import React, { useRef } from 'react'
import closeSVG from '../assets/close.svg'
import { useSpring, animated } from 'react-spring';
import Divider from "./Divider"
import Button from './Button';
import chessScreen from '../assets/projects/chessScreen.png'
import githubSVG from '../assets/socials/github.svg'
import globeSVG from '../assets/globe.svg'
import devSVG from '../assets/socials/dev.svg'
const Modal = ({ showModal, setShowModal, modalType }) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const modals = [
    {
      title: "Chess AI",
      desc: "This is a solo project that I undertook to test my skills and learn more about artificial intelligence(A.I.). I was inspired after watching Google's AlphaZero A.I. beat Stockfish 8 after playing by itself for only four hours. I also wanted to give the user a visualization of what decisions the bot is making.",
      bullets: ["Set out to visualize chess game logic using Chessboardjsx and Chessjs this web application allows the user to play against a chess bot and see the bot's decisions. ", "Implemented Chess Bot using the same methodology as Stockfish, enabling the user to play against it. ", "Integrated a tracking system using a node backend, so players can see their completed games."],
      img: chessScreen,
      technologies: [{
        name: "React",
        link: "https://reactjs.org",
      },
      {
        name: "Node",
        link: "https://nodejs.org/en/",
      },
      {
        name: "Chessboard.jsx",
        link: "https://chessboardjsx.com",
      },
      {
        name: "Chess.js",
        link: "https://github.com/jhlywa/chess.js",
      },
      {
        name: "Stockfish.js",
        link: "https://github.com/nmrugg/stockfish.js/",
      }],
      github: "https://github.com/donavynhaley/chess-ai",
      live: null,
      devto: null
    }
  ]
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
  });

  const blurBackground = () => {
    const container = document.querySelector("container")
    container.style.className = "blur"
  }
  const { title, desc, bullets, img, technologies, github, live, devto } = modals[modalType]
  return (
    <>
      {showModal ? (
        <div className="modal-background" onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <div className="modal-container" showModal={showModal}>
              <div className="modal-content">
                <div className="top-modal">
                  <h3 className="section-heading top-modal">{title}</h3>
                  <Divider isDark={true} />
                </div>
                <div className="modal-body">
                  <div className="modal-text">
                    <p>{desc} </p>
                    <ul className="bullet-points">
                      {bullets.map((item) => {
                        return <li className="bullets">{item}</li>
                      })}
                    </ul>
                  </div>
                  <div className="img-border">
                    <img className="howard" alt="old man" src={img} />
                    <h5>Technologies</h5>
                    {technologies.map((item, i) => {
                      if (technologies.length !== i + 1)
                        return <><a href={item.link} target="_blank" rel="noreferrer">{item.name} </a>| </>
                      else
                        return <a href={item.link} target="_blank" rel="noreferrer">{item.name}</a>
                    })}
                  </div>
                </div>
                <div className="modal-footer">
                  <a className="link" href={github} target="_blank" rel="noreferrer">
                    <img src={githubSVG} alt="github" />
                  </a>
                  {live !== null ?
                    <a className="link" href={live} target="_blank" rel="noreferrer">
                      <img src={globeSVG} alt="demo" />
                    </a> : null}

                  {devto !== null ?
                    <a className="link" href={devto} target="_blank" rel="noreferrer">
                      <img src={devSVG} alt="dev.to" />
                    </a> : null}

                </div>
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