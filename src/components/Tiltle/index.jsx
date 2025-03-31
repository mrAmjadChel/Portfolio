import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Title = ({ isHighlight, children: title, link }) => {
  if (!link) {
    return (
      <div
        className={`text-primaryAccent ${
          isHighlight ? "text-primaryTitle" : " "
        }`}
      >
        {title}
      </div>
    );
  }

  return (
    <div
      className={`text-primaryAccent ${
        isHighlight ? "text-primaryTitle" : " "
      }`}
    >
      <a href={link} target="_blank">
        {title}
      </a>
      <FontAwesomeIcon
        icon={faArrowRight}
        className={`text-xs -rotate-45 duration-300 ${
          isHighlight ? "translate-x-1 -translate-y-1" : " "
        }`}
      />
    </div>
  );
};
export default Title;
