import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="flex items-end gap-2 text-2xl">
      <FontAwesomeIcon
        className="hover:scale-125 hover:text-primaryTitle duration-300"
        icon={faGithub}
      />
      <FontAwesomeIcon
        className="hover:scale-125 hover:text-primaryTitle duration-300"
        icon={faLinkedin}
      />
      <FontAwesomeIcon
        className="hover:scale-125 hover:text-primaryTitle duration-300"
        icon={faInstagram}
      />
    </div>
  );
};
export default Contact;
