import { personwithmobile } from "../assets";

const Value = ({
  title = "",
  description = "",
  imgSrc = personwithmobile,
  number = 1,
}) => {
  return (
    <div className="w-fit p-4">
      <div className="relative w-[250px] h-[250px]">
        <img src={imgSrc} className="rounded-full"></img>
        <div className="absolute -bottom-[40px] left-1/2 -translate-x-1/2 w-[80px] h-[80px] bg-yellow rounded-full grid place-items-center text-h4 text-darknavy">
          {number > 9 ? number : `0${number}`}
        </div>
      </div>
      <h4 className="text-h4 text-center mt-[50px] text-darknavy">{title}</h4>
      <p className="text-body text-center mt-[20px] text-dimgrey w-[250px]">
        {description}
      </p>
    </div>
  );
};

export default Value;
