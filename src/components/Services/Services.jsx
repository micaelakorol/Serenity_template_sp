import './Services.css';
const Services = () => {
  return (
    <section id="services">
      <h2 class="services-title">Servicios</h2>
      {/* Puede agregar/modificar items si así lo desea */}
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">🧠</div>
          <h3>Terapia individual</h3>
          <p>
            Espacios personalizados para trabajar tus emociones, conflictos y
            bienestar general.
          </p>
        </div>

        <div class="service-card">
          <div class="service-icon">🌿</div>
          <h3>Ansiedad y estrés</h3>
          <p>
            Técnicas y acompañamiento para gestionar situaciones de estrés y
            ansiedad.
          </p>
        </div>

        <div class="service-card">
          <div class="service-icon">✨</div>
          <h3>Desarrollo personal</h3>
          <p>
            Herramientas para potenciar tu crecimiento, autoestima y
            autoconocimiento.
          </p>
        </div>

        <div class="service-card">
          <div class="service-icon">💻</div>
          <h3>Terapia online</h3>
          <p>
            Acompañamiento profesional desde casa, con sesiones virtuales
            seguras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
