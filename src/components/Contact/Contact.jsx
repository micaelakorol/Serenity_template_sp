import './Contact.css'
export default function Agenda() {
  return (
    <section className="agenda-section" id="turnos">
      <div className="agenda-container">
        <h2>Agendá tu sesión fácilmente</h2>
        <p>Coordinemos tu próximo encuentro de forma rápida y cómoda.</p>

        <a 
          href="https://wa.me/5490000000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="agenda-btn"
        >
          <span className="whatsapp-icon">
            <img src="https://res.cloudinary.com/dgqyqd2pa/image/upload/v1707327277/landing_page_herreria/whatsapp_xpifnb.webp" alt="whatsApp image" />
          </span>
          Agendar por WhatsApp
        </a>
      </div>
    </section>
  );
}
