import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="flex items-end gap-2 text-2xl">
      <a href="https://github.com/mrAmjadChel" target="_blank">
        <FontAwesomeIcon
          className="hover:scale-125 hover:text-primaryTitle duration-300"
          icon={faGithub}
        />
      </a>

      <a href="https://www.linkedin.com/in/amjad-chelaeh-6b1b6a2b2/" target="_blank">
        <FontAwesomeIcon
          className="hover:scale-125 hover:text-primaryTitle duration-300"
          icon={faLinkedin}
        />
      </a>

      {/* <a href="">
        <FontAwesomeIcon
          className="hover:scale-125 hover:text-primaryTitle duration-300"
          icon={faInstagram}
        />
      </a> */}
    </div>
  );
};
export default Contact;
