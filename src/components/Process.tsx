import CircleComp from "./CircleComp";
import PhoneIcon from "./PhoneIcon";
import RiderIcon from "./RiderIcon";
import ScooterIcon from "./ScooterIcon";

type ProcessProps = {
  title: string;
  description: string;
  iconComp: React.ReactElement;
};

const ProcessComp = ({
  title = "",
  description = "",
  iconComp = <></>,
}: ProcessProps) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col items-center lg:items-start gap-x-12 gap-y-4">
      <CircleComp className="w-[100px] h-[100px]">{iconComp}</CircleComp>
      <div className="flex flex-col gap-y-4 flex-1 items-center md:items-start text-center md:text-start">
        <h4 className="text-h4">{title}</h4>
        <p className="text-body xl:w-[21.875rem] lg:w-fit md:w-[25rem] w-[70%] text-dimgrey">
          {description}
        </p>
      </div>
    </div>
  );
};

const data: ProcessProps[] = [
  {
    title: "Locate with app",
    description:
      "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. ",
    iconComp: <PhoneIcon />,
  },
  {
    title: "Pick your scooter",
    description:
      "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
    iconComp: <ScooterIcon />,
  },
  {
    title: "Enjoy the ride",
    description:
      "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
    iconComp: <RiderIcon />,
  },
];

const Process = () => {
  return (
    <div className="relative lg:mt-12 xl:w-max">
      <div className="flex flex-col lg:flex-row lg:gap-x-4 gap-y-10 md:ml-[6.25rem] mt-12">
        {data.map((processData: ProcessProps) => (
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
