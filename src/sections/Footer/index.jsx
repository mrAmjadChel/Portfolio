import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="mb-9">
      <div className="flex justify-end">
        <span>
          Powered by React and Tailwind CSS
          <FontAwesomeIcon className = "ml-2" icon={faGithub}></FontAwesomeIcon>
        </span>
      </div>
    </div>
  );
};
export default Footer;
