import { ChildrenType } from "../types/Layout";

const CircleComp = ({ children, className = "" }: ChildrenType) => {
  return (
    <div
      className={`w-[100px] h-[100px] bg-yellow rounded-full grid place-items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default CircleComp;
