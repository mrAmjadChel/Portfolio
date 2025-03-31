import ContentContainer from "../../components/ContentContainer";
import About from "../About/index";
import { data as experienceData } from "../Content/experience";
import { data as projectData} from "../Content/project";
import Footer from "../Footer";
const RightSection = ({ onInitial }) => {
  return (
    <div className="px-5 grid gap-y-14 lg:gap-y-40">

      <About 
        onInitial={onInitial}
        title="About"
      />
   
      <ContentContainer 
        onInitial={onInitial}
        title="Experience"
        data={experienceData}
      />

      <ContentContainer
        onInitial={onInitial}
        title="Projects"
        data={projectData}
      />

      <Footer />
      
    </div>
  );
};
export default RightSection;
