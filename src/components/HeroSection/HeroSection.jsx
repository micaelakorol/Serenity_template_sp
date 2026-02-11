import React from 'react';
import './HeroSection.css';
import person from '../../assets/persona.webp';

const HeroSection = () => {
  return (
    <section class="hero">
      <div class="hero-container">
        <div class="hero-left">
          <h1 class="hero-title">
            Te acompaño a construir una vida más equilibrada
          </h1>

          <p class="hero-text">
            Espacio terapéutico para ayudarte a gestionar tus emociones,
            recuperar tu bienestar y construir hábitos más saludables.
          </p>

          <div class="hero-buttons">
            <a href="#agenda" class="btn-primary">
              Agendar sesión
            </a>
            <a href="#about" class="btn-secondary">
              Conocer más
            </a>
          </div>
        </div>
        {/* SU IMAGEN */}
        <div class="hero-right">
          <img src={person} alt="Terapia y bienestar" class="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
