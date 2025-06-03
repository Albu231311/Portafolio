import React from 'react';
import '../Projects.css';
import abeja from '../assets/images/abejacss.png';
import historia from '../assets/images/historia.jpg';
import memoria from '../assets/images/memoria.png';
import chat from '../assets/images/chat.png';
import calcu from '../assets/images/calcu.png';

export default function Projects() {
  return (
    <section className="projects-section font-dxsitrus">
      <h2 className="projects-title" style={ {color: "brown"}}>PROYECTOS</h2>

      {/* Fila 1 */}
      <div className="projects-row">
        <div className="project-card">
          <img src={abeja} alt="Proyecto 1" />
          <p>Abeja CSS</p>
          <a href="https://231311.dernait.my/Lab4/" target="_blank" rel="noopener noreferrer">INGRESAR</a>
        </div>
        <div className="project-card">
          <img src={historia} alt="Proyecto 2" />
          <p>Historia App</p>
          <a href="https://231311.dernait.my/Lab3-HTML/Lab3/" target="_blank" rel="noopener noreferrer">INGRESAR</a>
        </div>
        <div className="project-card">
          <img src={memoria} alt="Proyecto 3" />
          <p>Memoria</p>
          <a href="https://231311.dernait.my/Lab6/lab6.html" target="_blank" rel="noopener noreferrer">INGRESAR</a>
        </div>
      </div>

      {/* Fila 2 */}
      <div className="projects-row">
        <div className="project-card">
          <img src={chat} alt="Proyecto 4" />
          <p>Chat Online</p>
          <a href="https://231311.dernait.my/Lab5/3.html" target="_blank" rel="noopener noreferrer">INGRESAR</a>
        </div>
        <div className="project-card">
          <img src={calcu} alt="Proyecto 5" />
          <p>Calculadora</p>
          <a href="https://231311.dernait.my/Calculadora/" target="_blank" rel="noopener noreferrer">INGRESAR</a>
        </div>
      </div>
    </section>
  );
}
