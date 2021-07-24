import React, { useRef } from 'react'
import closeSVG from '../assets/close.svg'
import { useSpring, animated } from 'react-spring';
import Divider from "./Divider"
import chessScreen from '../assets/projects/chessScreen.png'
import waterScreen from '../assets/projects/waterScreen.png'
import emotionScreen from '../assets/projects/emotionScreen.png'
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
      live: "https://chess-ai-visualizer.netlify.app",
      devto: null
    },
    {
      title: "Water My Plants",
      desc: "This was a group project I did while at Lambda School to create an app from the ground up. We were given a notion document with our MVP features and stretch goals. In this project, I was the lead front-end developer. The app allows a user to log in and add their plants and the app will remind the user when to water them.",
      bullets: ["Implemented redux throughout the app to handle state management.", "I Created a dashboard that displayed the logged-in user's plants.", "Designed and implemented a system in which users can easily add, delete, update their plants all integrated with our backend.", "Created a profile for the user to which they can make changes."],
      img: waterScreen,
      technologies: [{
        name: "React",
        link: "https://reactjs.org",
      },
      {
        name: "Node",
        link: "https://nodejs.org/en/",
      },
      {
        name: "Redux",
        link: "https://redux.js.org",
      },
      {
        name: "Axios",
        link: "https://www.npmjs.com/package/axios",
      },
      {
        name: "Reactstrap",
        link: "https://reactstrap.github.io",
      },
      {
        name: "Styled-Components",
        link: "https://styled-components.com",
      },
      {
        name: "Yup",
        link: "https://www.npmjs.com/package/yup",
      },
      {
        name: "Bootstrap",
        link: "https://getbootstrap.com",
      },
      {
        name: "Material-UI",
        link: "https://material-ui.com",
      },
      ],
      github: "https://github.com/BW-Water-My-Plants-1-Cori/front-end",
      live: "https://water-my-plants-ten.vercel.app/login",
      devto: null
    },
    {
      title: "Boys & Girls Club",
      desc: "This project was created with a team of eight developers over two months. Every week we met with the stakeholder to check in on project development and integrate their suggestions. The app allows staff at Boys & Girls Club to log in and adds their member's sentiment data into the app. Then an admin can log in and view that data.",
      bullets: ["Implemented importing members functionality so admins can add new members to track.", "Created a checking function in javascript so that admins can view the uploaded members before submitting.", "Collaborated with a team of six to create pages in the application that allowed the user to collect sentiment data from members."],
      img: emotionScreen,
      technologies: [{
        name: "React",
        link: "https://reactjs.org",
      },
      {
        name: "Redux",
        link: "https://redux.js.org",
      },
      {
        name: "Axios",
        link: "https://www.npmjs.com/package/axios",
      },
      {
        name: "Ant Design",
        link: "https://ant.design",
      },
      {
        name: "Styled-Components",
        link: "https://styled-components.com",
      },
      ],
      github: "https://github.com/donavynhaley/bg-emotion-tracker-fe-b",
      live: "https://b.bgexperiencetracker.dev/login",
      devto: "https://dev.to/donavynhaley/my-first-lambda-labs-project-40ec"
    },

  ]
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
  });

  const { title, desc, bullets, img, technologies, github, live, devto } = modals[modalType]
  return (
    <>
      {showModal ? (
        <div className="modal-background" onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <div className="modal-container">
              <div className="modal-content">
                <div className="top-modal">
                  <h3 className="section-heading top-modal">{title}</h3>
                  <Divider isDark={true} />
                </div>
                <div className="modal-body">
                  <div className="split">
                    <div className="modal-text">
                      <p>{desc} </p>
                      <ul className="bullet-points">
                        {bullets.map((item, i) => {
                          return <li key={i} className="bullets">{item}</li>
                        })}
                      </ul>
                    </div>
                    <div className="img-border">
                      <img alt="project" src={img} />
                      <div className="techs">
                        <h5>Technologies</h5>
                        {technologies.map((item, i) => {
                          if (technologies.length !== i + 1)
                            return <><a key={i} href={item.link} target="_blank" rel="noreferrer">{item.name} </a>| </>
                          else
                            return <a key={i} href={item.link} target="_blank" rel="noreferrer">{item.name}</a>
                        })}
                      </div>
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