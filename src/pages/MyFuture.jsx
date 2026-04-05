import React from "react";

const MyFuture = () => {
  return (
    <div className="page fade-in">
      <h1>🌱 Мій розвиток</h1>
      
      <blockquote className="quote">
        "Найкращий спосіб передбачити майбутнє — створити його."
      </blockquote>

      <section className="steps-section">
        <h2>3 кроки в майбутнє:</h2>
        <ol className="timeline">
          <li>
            <strong>Опанування Web-технологій:</strong> Поглибити знання React, вивчити бекенд (Node.js), щоб створювати повноцінні Fullstack-додатки.
          </li>
          <li>
            <strong>Інтеграція 3D у Web:</strong> Використати свої навички роботи в Blender для створення інтерактивних 3D-сайтів за допомогою Three.js.
          </li>
          <li>
            <strong>Геймдев:</strong> Перенести знання програмування та 3D-дизайну у розробку власних ігор.
          </li>
        </ol>
      </section>

      <section className="dream-job">
        <h2>💼 Робота мрії</h2>
        <p>
          Я бачу себе розробником, який стирає межі між звичайними сайтами та інтерактивними ігровими світами. 
          Це робота в креативній команді, де можна створювати 3D-веб-додатки або працювати над інноваційними ігровими проєктами.
        </p>
      </section>
    </div>
  );
};

export default MyFuture;