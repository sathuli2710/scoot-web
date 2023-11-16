import { processesData } from "../data/topPageData";
import CircleComp from "./CircleComp";
import PhoneIcon from "./PhoneIcon";
import RiderIcon from "./RiderIcon";
import ScooterIcon from "./ScooterIcon";

export type ProcessProps = {
  title: string;
  description: string;
  iconComp?: "phone" | "scooter" | "rider";
};

const ProcessComp = ({
  title = "",
  description = "",
  iconComp = "phone",
}: ProcessProps) => {
  const getIconComp = (iconType: string = "") => {
    switch (iconType) {
      case "phone":
        return <PhoneIcon />;
      case "scooter":
        return <ScooterIcon />;
      case "rider":
        return <RiderIcon />;
      default:
        return <PhoneIcon />;
    }
  };
  return (
    <div className="flex flex-col md:flex-row lg:flex-col items-center lg:items-start gap-x-12 gap-y-4">
      <CircleComp className="w-[100px] h-[100px]">
        {getIconComp(iconComp)}
      </CircleComp>
      <div className="flex flex-col gap-y-4 flex-1 items-center md:items-start text-center md:text-start">
        <h4 className="text-h4 text-darknavy">{title}</h4>
        <p className="text-body xl:w-[21.875rem] lg:w-fit md:w-[25rem] w-[70%] text-dimgrey">
          {description}
        </p>
      </div>
    </div>
  );
};

const Process = () => {
  return (
    <div className="relative lg:mt-12 xl:w-max">
      <div className="flex flex-col lg:flex-row lg:gap-x-4 gap-y-10 md:ml-[6.25rem] mt-12">
        {processesData.map((processData: ProcessProps) => (
          <ProcessComp
            key={Symbol(processData.title).toString()}
            title={processData.title}
            description={processData.description}
            iconComp={processData.iconComp}
          />
        ))}
      </div>
      <div className="hidden md:block absolute lg:top-[3.125rem] -top-12 left-[9rem] lg:left-0 lg:h-3 lg:w-[75%] h-[87%] w-3 bg-lightgrey -z-10"></div>
    </div>
  );
};

export default Process;
