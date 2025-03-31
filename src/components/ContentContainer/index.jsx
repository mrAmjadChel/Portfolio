import Description from "../Description";
import FormatedDate from "../FormatedDate";
import Material from "../Material";
import Picture from "../Picture";
import Tech from "../Tech";
import Title from "../Tiltle";
import { useEffect, useState } from "react";

const ContentContainer = ({
  onInitial,
  title: sectionTitle = "",
  data = [],
}) => {
  const [isMuoseHover, setIsMuoseHover] = useState({});

  const SECTION_ID = `${sectionTitle}-section`;

  useEffect(() => {
    onInitial(SECTION_ID);
  }, []);

  return (
    <div id={SECTION_ID} className="scroll-m-10">
      <div className="font-medium text-primaryAccent px-2">{sectionTitle}</div>
      {data.map(
        (
          {
            date = "",
            title = "",
            link = "",
            materials = [],
            descriptions = [],
            skills = [],
            picture = "",
          },
          index
        ) => (
          <div
            key={`${SECTION_ID}-${index}-${title.replaceAll(" ", "-")}`}
            className={`grid grid-cols-[25%_75%] px-2 py-6 rounded-md transition-all ${
              isMuoseHover[`${SECTION_ID}-${index}`] ? "bg-primaryBase" : " "
            }`}
            onMouseEnter={() =>
              setIsMuoseHover({ [`${SECTION_ID}-${index}`]: true })
            }
            onMouseLeave={() =>
              setIsMuoseHover({ [`${SECTION_ID}-${index}`]: false })
            }
          >
            <div>
              <FormatedDate
                isHighlight={isMuoseHover[`${SECTION_ID}-${index}`]}
              >
                {date}
              </FormatedDate>
              <Picture Picture={picture} alt={title} />
            </div>

            <div className="grid gap-y-4">
              <Title
                isHighlight={isMuoseHover[`${SECTION_ID}-${index}`]}
                link={link}
              >
                {title}
              </Title>

              {materials.length > 0 ? (
                <div className="flex gap-3 text-xl items-center">
                  {materials.map((e, i) => (
                    <Material
                      key={`${e.type}-${i}`}
                      icon={e.type}
                      link={e.link}
                    />
                  ))}
                </div>
              ) : null}

              {descriptions.map((e, i) => (
                <Description key={`description-${i}`}>{e}</Description>
              ))}

              {skills.map((e, i) => (
                <Tech
                  key={`skill-${i}`}
                  isHighlight={isMuoseHover[`${SECTION_ID}-${index}`]}
                  data={e}
                />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};
export default ContentContainer;
