import { useEffect, useState } from "react";
import LeftSection from "./sections/LeftSection";
import RightSection from "./sections/RightSection";

function App() {
  const [sectionIds, setSectionIds] = useState([]);
  const [navbarItems, setNavbarItems] = useState([]);
  const [currentSection, setCurrentSection] = useState("");

  const addSectionIds = (sectionId) => {
    console.log(sectionId);
    const elementId = document.getElementById(sectionId).id;
    setSectionIds((prev) => {
      if (!prev.includes(elementId)) {
        return [...prev, elementId];
      }
      return prev;
    });

    // setSectionIds((prev) => [...new Set([...prev, elementId])]);

    const elementTitle =
      document.getElementById(sectionId).childNodes[0].textContent;

    const obj = {
      title: elementTitle,
      sectionId: elementId,
    };

    setNavbarItems((prev) => {
      if (prev.findIndex((item) => item.title === obj.title) < 0) {
        return [...prev, obj];
      }
      return prev;
    });
  };

  const handleScroll = () => {
    for (let index = 0; index < sectionIds.length; index++) {
      const el = sectionIds[index];
      const elOffsetTop = document.getElementById(el).getClientRects()[0].y;
      const elHeight = document.getElementById(el).getClientRects()[0].height * 0.5;
      const viewportHeight = window.innerHeight * 0.3;

      if(elOffsetTop <= 0){
        if(elOffsetTop + elHeight >= viewportHeight){
          setCurrentSection(el);
        }
      }else if(elOffsetTop > 0 && elOffsetTop < viewportHeight){
        setCurrentSection(el);
      }
    }
  }

  useEffect(() => {
    if (sectionIds.length > 0) {
      setCurrentSection(sectionIds[0]);
    }
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [sectionIds]);

  return (
    <div className="mt-10 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]">
      <LeftSection navbarItems={navbarItems} currentSection={currentSection} />
      <RightSection onInitial={addSectionIds} />
    </div>
  );
}

export default App;
