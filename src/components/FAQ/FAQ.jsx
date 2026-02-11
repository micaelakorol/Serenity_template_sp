import { useState } from "react";
import './FAQ.css'

export default function FAQ() {
  {/* Puede modificar el texto si asi lo desea */}
  const faqs = [
    {
      question: "¿Cuánto dura la sesión?",
      answer: "Las sesiones suelen durar entre 45 y 50 minutos."
    },
    {
      question: "¿Trabajás con obras sociales?",
      answer: "Actualmente trabajo de manera particular, pero puedo emitir factura."
    },
    {
      question: "¿Atendés adolescentes?",
      answer: "Sí, trabajo con adolescentes desde los 13 años."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(i === openIndex ? null : i);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Preguntas frecuentes</h2>

      <div className="faq-container">
        {faqs.map((item, i) => (
          <div key={i} className="faq-item">
            <button className="faq-question" onClick={() => toggle(i)}>
              {item.question}
              <span className={`arrow ${openIndex === i ? "open" : ""}`}>▼</span>
            </button>

            {openIndex === i && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
