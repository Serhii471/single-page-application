import React from "react";

const AboutMe = () => {
  return (
    <div className="page fade-in">
      <h1>👋 Про мене</h1>
      
      <section className="bio-section">
        <h2>Хто я?</h2>
        <p>
          Футбольний м'ячик👌
        </p>
      </section>

      <section className="projects-section">
        <h2>Мої проєкти 🚀</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>🎨 HTML + CSS</h3>
            <p>Базові верстки, створення адаптивних лендінгів.</p>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn">Дивитись репо</a>
          </div>
          
          <div className="project-card">
            <h3>⚡ JavaScript</h3>
            <p>Спільна розробка e-commerce платформи в команді з трьох людей. Використання JS, Git та GitHub.</p>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn">Дивитись репо</a>
          </div>

          <div className="project-card">
            <h3>⚛️ React</h3>
            <p>Це SPA-портфоліо та галерея зображень з використанням API та React Router.</p>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn">Дивитись репо</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;