import { aboutGridSectionData } from "../constants/gridSectionData";
import { GridSectionComp } from "../components/GridSection";
import Value from "../components/Value";
import {
  howItWorksAccordionData,
  safeDrivingAccordionData,
  valuesData,
} from "../constants/aboutPageData";
import Accordion from "../components/Accordion";
import PageHeadingComp from "../components/PageHeadingComp";

const About: React.FC = () => {
  return (
    <main className="px-6">
      <PageHeadingComp title="About" bgImageClass="aboutpagebg" />
      <div>
        {aboutGridSectionData.map((grid, idx) => (
          <GridSectionComp
            key={grid.id}
            {...grid}
            isInverse={idx % 2 === 1 ? true : false}
          />
        ))}
      </div>
      <h3 className="text-h3 text-darknavy text-center my-5">Our Values</h3>
      <div className="flex flex-col lg:flex-row items-center justify-around gap-4">
        {valuesData.map((valueData, idx) => (
          <Value
            key={valueData?.id}
            title={valueData?.title}
            description={valueData?.description}
            imgSrc={valueData?.imgSrc}
            number={idx}
          />
        ))}
      </div>
      <h3 className="text-h3 text-darknavy text-center my-5">FAQs</h3>
      <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-6">
        <h4 className="text-h4 text-darknavy">How it Works</h4>
        <div className="flex flex-col gap-4 w-full lg:w-[730px]">
          {howItWorksAccordionData.map((accordionData, idx) => (
            <Accordion
              title={accordionData?.title}
              description={accordionData?.description}
              isOpen={idx === 0 ? true : false}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-6 my-12">
        <h4 className="text-h4 text-darknavy">Safe Driving</h4>
        <div className="flex flex-col gap-4 w-full lg:w-[730px]">
          {safeDrivingAccordionData.map((accordionData, idx) => (
            <Accordion
              title={accordionData?.title}
              description={accordionData?.description}
              isOpen={idx === 0 ? true : false}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
