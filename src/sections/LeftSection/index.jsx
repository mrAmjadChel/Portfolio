import Header from "../Header";
import Navbar from "../Navbar";
import Contact from "../Contact";

const LeftSection = ({ navbarItems, currentSection }) => {
  return (
    <div className="px-5 mb-14 lg:mb-0">
      <div className="sticky top-10 px-2 grid gap-y-5 lg:grid-rows-[1fr_2fr_20%] lg:h-[85vh]">
        <Header />
        <Navbar navbarItems={navbarItems} currentSection={currentSection}/>
        <Contact />
      </div>
    </div>
  );
};
export default LeftSection;
