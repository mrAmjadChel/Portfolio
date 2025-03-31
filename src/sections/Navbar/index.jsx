import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const navs = [
  { title: "About", sectionId: "About-section" },
  { title: "Experience", sectionId: "Experience-section" },
  { title: "Projects", sectionId: "Projects-section" },
];
const Navbar = ({ navbarItems, currentSection }) => {
  const [isMuoseHover, setIsMuoseHover] = useState({});

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="hidden lg:flex flex-col font-semibold">
      {navbarItems.map((e, i) => (
        <div
          key={`${e.sectionId}-${i}`}
          onClick={() => handleScroll(e.sectionId)}
          onMouseEnter={() => setIsMuoseHover({ [e.title]: true })}
          onMouseLeave={() => setIsMuoseHover({ [e.title]: false })}
          className="cursor-pointer flex py-2"
        >
          <div>
            <FontAwesomeIcon
              className={`new-arrow ${currentSection === e.sectionId ? "text-primaryTitle" : isMuoseHover[e.title] ? "" : "hidden" }`} icon={faArrowRight}
            />
          </div>

          <div
            className={`${
              currentSection === e.sectionId || isMuoseHover[e.title] ? "translate-x-3" : ""
            } duration-500 ease-out`}
          >
            {e.title}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Navbar;
