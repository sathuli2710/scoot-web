import { DivChildrenType } from "./Layout";

type CircleCompProps = {
  width?: string;
  height?: string;
  className?: string;
} & DivChildrenType;

const CircleComp = ({ children, className = "" }: CircleCompProps) => {
  return (
    <div
      className={`bg-yellow rounded-full grid place-items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default CircleComp;
