import React from 'react';
import htmlLogo from '../assets/html-5.png';
import Css from '../assets/css-3.png';
import javascript from '../assets/js.png';
import Bootstrap from '../assets/bootstrap.png';
import Node from '../assets/node-js.png';
import Chrome from '../assets/chrome.png';
import react from '../assets/physics.png';
import github from '../assets/github.png';
import Vscode from '../assets/icons8-vs-code-48.png';
import Redux from '../assets/icons8-redux-48.png';
import Tailwindcss from '../assets/icons8-vs-code-48.png';
import MaterialUi from '../assets/icons8-material-ui-48.png';
import { AvailableWork } from './MultiComp';

const skills = [
  { img: htmlLogo, label: 'HTML' },
  { img: Css, label: 'CSS' },
  { img: javascript, label: 'JavaScript' },
  { img: Bootstrap, label: 'Bootstrap' },
  { img: Node, label: 'Node.js' },
  { img: Chrome, label: 'Chrome DevTools' },
  { img: Redux, label: 'Redux' },
  { img: github, label: 'GitHub' },
  { img: Tailwindcss, label: 'TailwindCSS' },
  { img: react, label: 'React' },
  { img: Vscode, label: 'VS Code' },
  { img: MaterialUi, label: 'Material UI' }
];

function IconSlider() {
  const repeatedSkills = [...skills, ...skills]; // duplicate for infinite loop

  return (
    <div className="container-fluid bg-light py-3 overflow-hidden">
      <div className="slider-track d-flex align-items-center">
        {repeatedSkills.map((skill, index) => (
          <div
            className="d-flex align-items-center bg-white rounded-pill px-3 py-2 mx-3 icon-item shadow-sm"
            key={index}
          >
            <img
              src={skill.img}
              alt={skill.label}
              className="me-2"
              style={{ width: '20px', height: '20px' }}
            />
            <span className="mb-0 fw-medium">{skill.label}</span>
          </div>
        ))}
      </div>


    </div>
  );
}

export default IconSlider;
