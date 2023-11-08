import CircleDesign from "./CircleDesign";

const PageHeadingComp = ({ bgSrc = "", title = "" }) => {
  return (
    <div
      className={`relative w-full h-[200px] overflow-hidden bg-[url('${bgSrc}')] bg-center bg-fill bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-60`}
    >
      <h3 className="w-full lg:w-max absolute top-[80px] lg:left-[50px] z-100 text-white text-h3 opacity-100 lg:text-start text-center">
        {title}
      </h3>
      <div className="hidden absolute bottom-6 -right-[35px] md:flex md:gap-x-5 md:items-center">
        <CircleDesign />
      </div>
    </div>
  );
};

export default PageHeadingComp;
