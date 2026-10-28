import { siteConfig } from '../../config/siteConfig';
import './BookingButton.css'
const BookingButton = () => {

  return (
    <a
      href={siteConfig.booking.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bookingButton"
    >
      Reservar turno
    </a>
  );
};

export default BookingButton;