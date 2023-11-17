import { map, mapsmall } from "../assets";
import Button from "../components/Button";
import PageHeadingComp from "../components/PageHeadingComp";

const cities: string[] = ["New York", "London", "Jakarta", "Yokohama"];

const Locations: React.FC = () => {
  return (
    <main className="px-6">
      <PageHeadingComp title="Locations" bgImageClass="locationspagebg" />
      <img
        src={map}
        alt="map"
        className="my-12 w-[70%] mx-auto hidden md:block"
      />
      <img
        src={mapsmall}
        alt="map"
        className="my-12 w-[100%] mx-auto md:hidden"
      />
      <div className="flex flex-col justify-center items-center gap-y-5 md:hidden">
        {cities.map((city) => (
          <div className="w-full py-5 bg-yellow dark:bg-opacity-100 bg-opacity-20 text-center text-h4">
            {city}
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-5 text-center lg:text-start mt-5">
        <h3 className="text-h3 text-darknavy">Your City Not Listed?</h3>
        <p className="text-body text-dimgrey xl:w-[400px] lg:w-[330px] md:w-[80%] w-full">
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
        <Button
          variant="filled"
          btnText="Message Us"
          onClick={() =>
            window.alert("Sorry for the inconvenience. Please try again later.")
          }
        />
      </div>
    </main>
  );
};

export default Locations;
