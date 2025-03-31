import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = ({icon, link}) => {
  return (
    <div>
      <a
        href={link}
        target="_blank"
      >
        <FontAwesomeIcon icon={icon} className="hover:scale-125" />
      </a>
    </div>
  );
};
export default Material;
