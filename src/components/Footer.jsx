import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Моє SPA-Портфоліо. Створено з React.</p>
      <div className="social-links">
        <a href="https://github.com/Serhii471" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:your.email@example.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;