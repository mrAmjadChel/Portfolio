import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { data } from "../Content/header"
const Header = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-3xl text-primaryTitle text-semibold">
        {data.name}
      </div>
      <div className="text-primaryAccent text-semibold">
        {data.title}
      </div>
      <div className="text-sm w-5/6">
        {data.caption}
      </div>
      <div className="mt-4">
        <a href={data.resume} target="_blank">
          <span className="rounded-md bg-primaryTitle text-primaryContent px-4 py-2">
            {data.btntext}
            <span className="rotate-90 inline-block ml-2 text-sm">
              <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Header;
