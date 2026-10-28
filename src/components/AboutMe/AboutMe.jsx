import './AboutMe.css'
import image from '../../assets/psicologa.webp'
import { siteConfig } from '../../config/siteConfig';
const AboutMe = () => {
  return (
    <section id="about">
      <div class="about-container">
        <div class="about-img-box">
          <img
            src={image}
            alt="Psicóloga profesional"
            class="about-img"
          />
        </div>

        <div class="about-content">
          <h2 class="about-title">Hola, soy {siteConfig.professionalName}</h2>

          <p class="about-text">
            Soy {siteConfig.specialty} especializada en bienestar emocional, ansiedad y
            desarrollo personal. Acompaño a personas en su proceso terapéutico,
            ayudándolas a construir una vida más consciente, equilibrada y
            plena. Desde un enfoque humano y cercano, trabajo con herramientas
            prácticas que se adaptan a cada necesidad.
          </p>

          <a href="LINK" class="btn-outline">
            Ver credenciales
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
