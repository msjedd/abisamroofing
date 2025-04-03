import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className="flex gap-4  ">
      <a
        href="https://wa.me/08145786932"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="text-3xl text-green-500 hover:text-green-700 transition"
        />
      </a>

      <a
        href="https://instagram.com/abisam_roofing_official"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-3xl text-pink-500 hover:text-pink-700 transition"
        />
      </a>
    </div>
  );
};

export default Socials;
