import CircleDesign from "./CircleDesign";

const PageHeadingComp = ({ bgImageClass = "", title = "" }) => {
  return (
    <div
      className={`relative w-screen h-[200px] overflow-hidden opacity-100 before:bg-image-opacity before:bg-[50% 0] ${bgImageClass} -ml-6 -mr-6`}
    >
      <h3 className="w-full lg:w-max absolute top-[80px] lg:left-[50px] z-100 text-white text-h3 lg:text-start text-center opacity-100 z-100">
        {title}
      </h3>
      <div className="hidden absolute bottom-6 -right-[35px] md:flex md:gap-x-5 md:items-center">
        <CircleDesign />
      </div>
    </div>
  );
};

export default PageHeadingComp;
