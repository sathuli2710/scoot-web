import { ChildrenType } from "../types/Layout";

type CircleCompProps = {
  width?: string;
  height?: string;
} & ChildrenType;

const CircleComp = ({
  children,
  className = "",
  width = "100px",
  height = "100px",
}: CircleCompProps) => {
  return (
    <div
      className={`w-[${width}] h-[${height}] bg-yellow rounded-full grid place-items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default CircleComp;
