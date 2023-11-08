import Button from "../components/Button";

const Locations: React.FC = () => {
  return (
    <main className="px-6">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-5 text-center lg:text-start">
        <h3 className="text-h3 text-darknavy">Your City Not Listed?</h3>
        <p className="text-body text-dimgrey xl:w-[400px] lg:w-[330px] md:w-[80%] w-full">
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
        <Button variant="filled" btnText="Message Us" />
      </div>
    </main>
  );
};

export default Locations;
