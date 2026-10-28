import './Footer.css';
const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "https://res.cloudinary.com/dgqyqd2pa/image/upload/v1765820306/REDES-SOCIALES-ICON/instagram-svgrepo-com_g5dnnf.svg",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "https://res.cloudinary.com/dgqyqd2pa/image/upload/v1765820361/REDES-SOCIALES-ICON/facebook-svgrepo-com_umjpfs.svg",
  },
  {
    name: "WhatsApp",
    href: "https://whatsApp.com",
    icon: "https://res.cloudinary.com/dgqyqd2pa/image/upload/v1778261161/emeka.site/whatsapp-svgrepo-com_sasfwp.svg",
  },
  {
    name: "Email",
    href: "mailto:hello@example.com",
    icon: "https://res.cloudinary.com/dgqyqd2pa/image/upload/v1765820367/REDES-SOCIALES-ICON/email-8-svgrepo-com_lzqerg.svg",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        {socialLinks.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={name}
          >
            <img src={icon} alt={name} />
          </a>
        ))}
      </div>

      <p className="footer-copy">© 2025 Serenity — Template</p>
    </footer>
  );
}
