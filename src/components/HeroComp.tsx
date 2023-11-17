import Button from "./Button";
import CircleDesign from "./CircleDesign";

const HeroComp = () => {
  return (
    <div className="relative">
      <div className="homepageherobg bg-bottom bg-fill bg-no-repeat md:px-[100px] px-[50px] py-[150px] before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-60">
        <div className="w-fit relative flex flex-col gap-y-5 items-center">
          <h1 className="text-h3 lg:text-h1 sm:text-h3 text-white lg:w-[500px] md:w-[400px] text-center lg:text-start self-start">
            Scooter sharing made simple
          </h1>
          <div className="lg:flex lg:items-center lg:gap-x-10 lg:ml-[-100px]">
            <div className="w-[150px] h-3 bg-yellow lg:block hidden"></div>
            <p className="lg:w-[400px] md:w-[300px] text-body text-white ml-0 text-center lg:text-start">
              Scoot takes the hassle out of urban mobility. Our bikes are placed
              in convenient locations in each of our cities. Use our app to
              locate the nearest bike, unlock it with a tap, and you’re away!
            </p>
            <div className="lg:flex lg:flex-col lg:items-end lg:mt-8 hidden">
              <div className="w-[150px] h-3 bg-yellow md:block hidden"></div>
              <div className="w-3 h-[40px] bg-yellow md:block hidden"></div>
              <div className="relative">
                <div className="relative w-[150px] h-3 bg-yellow translate-x-[calc(100%-12px)] rounded-ee-xl rounded-se-xl">
                  <div className="absolute -right-1.5 -top-3.5 w-[50px] h-3 bg-yellow rotate-45 rounded-ee-xl rounded-se-xl"></div>
                  <div className="absolute -right-1.5 -bottom-3.5 w-[50px] h-3 bg-yellow -rotate-45 rounded-ee-xl rounded-se-xl"></div>
                </div>
              </div>
            </div>
          </div>
          <Button
            btnText="Get Scootin"
            variant="filled"
            className="lg:ml-[90px] lg:self-start"
            onClick={() => window.open("/locations", "_self")}
          />
        </div>
      </div>
      <div className="hidden absolute bottom-6 -right-[35px] md:flex md:gap-x-5 md:items-center">
        <CircleDesign />
      </div>
      <div className="absolute bottom-16 md:left-0 left-[-150px] md:flex md:gap-x-5 md:items-center lg:hidden">
        <div className="flex flex-col items-end">
          <div className="w-[150px] h-3 bg-yellow md:block hidden"></div>
          <div className="w-3 h-[40px] bg-yellow md:block hidden"></div>
          <div className="relative">
            <div className="relative w-[150px] h-3 bg-yellow translate-x-[calc(100%-12px)] rounded-ee-xl rounded-se-xl">
              <div className="absolute -right-1.5 -top-3.5 w-[50px] h-3 bg-yellow rotate-45 rounded-ee-xl rounded-se-xl"></div>
              <div className="absolute -right-1.5 -bottom-3.5 w-[50px] h-3 bg-yellow -rotate-45 rounded-ee-xl rounded-se-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComp;
