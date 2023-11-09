import Button from "./Button";
import CircleComp from "./CircleComp";
import personwithmobile from "../assets/personwithmobile.png";
import { topGridSectionData } from "../constants/gridSectionData";

type GridSectionCompProps = {
  title: string;
  description: string;
  btntext?: string;
  imgSrc: string;
  isInverse?: boolean;
  isButton?: boolean;
};

export const GridSectionComp = ({
  title = "",
  description = "",
  btntext = "",
  imgSrc = "",
  isInverse = false,
  isButton = true,
}: GridSectionCompProps) => {
  return (
    <div
      className={`relative w-full flex flex-col ${
        isInverse ? "lg:flex-row" : "lg:flex-row-reverse"
      } justify-center items-center gap-y-4 xl:gap-x-[400px] gap-x-[200px] mt-8 px-3`}
    >
      <CircleComp className="overflow-hidden lg:w-[220px] lg:h-[220px] w-[250px] h-[250px] shrink-0">
        <img src={imgSrc} alt="Person" />
      </CircleComp>
      <div
        className={`hidden lg:block absolute ${
          isInverse
            ? "lg:-left-[125px] -left-[100px]"
            : "lg:-right-[125px] -right-[100px]"
        } lg:w-[200px] lg:h-[200px] w-[200px] h-[200px] rounded-full bg-lightgrey dark:bg-dimgrey`}
      ></div>
      <div
        className={`absolute ${
          isInverse
            ? "lg:left-[30px] lg:bottom-24 lg:top-[unset] top-20 md:-left-[100px] -left-[120px] rotate-180"
            : "lg:right-[30px] lg:bottom-12 lg:top-[unset] top-6 md:-right-[100px] -right-[120px]"
        }`}
      >
        <div className="lg:w-[250px] md:w-[200px] w-[100px] h-3 bg-yellow"></div>
        <div className="w-3 lg:h-[80px] md:h-[150px] h-[120px] bg-yellow"></div>
        <div className="relative">
          <div className="relative lg:w-[150px] md:w-[300px] w-[200px] h-3 bg-yellow -translate-x-[calc(100%-12px)] rounded-ss-xl rounded-es-xl">
            <div className="absolute -left-1.5 -top-3.5 w-[50px] h-3 bg-yellow -rotate-45 rounded-ee-xl rounded-se-xl"></div>
            <div className="absolute -left-1.5 -bottom-3.5 w-[50px] h-3 bg-yellow rotate-45 rounded-ee-xl rounded-se-xl"></div>
          </div>
        </div>
      </div>
      <div className="lg:w-[445px] w-[250px] flex flex-col gap-y-3 lg:items-start items-center text-center lg:text-start">
        <h3 className="text-h3 w-full text-darknavy">{title}</h3>
        <p className="text-body w-full text-dimgrey">{description}</p>
        {isButton && <Button btnText={btntext} variant="filled" />}
      </div>
    </div>
  );
};

const GridSection = () => {
  return (
    <div>
      {topGridSectionData.map((grid, idx) => (
        <GridSectionComp
          key={grid.id}
          {...grid}
          isInverse={idx % 2 === 1 ? true : false}
        />
      ))}
    </div>
  );
};

export default GridSection;
