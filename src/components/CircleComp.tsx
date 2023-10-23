import { ChildrenType } from "../types/Layout";

type CircleCompProps = {
  width?: string;
  height?: string;
} & ChildrenType;

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
