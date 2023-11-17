import Button from "./Button";

type JobPostProps = {
  title: string;
  location: string;
};

const JobPost = ({ title = "", location = "" }: JobPostProps) => {
  return (
    <div className="w-full bg-snow dark:bg-dimgrey p-6 flex flex-col md:flex-row justify-between items-center gap-y-3">
      <div className="text-center md:text-start">
        <h4 className="text-h4 text-darknavy">{title}</h4>
        <p className="text-body text-dimgrey dark:text-lightgrey">{location}</p>
      </div>
      <Button
        variant="filled"
        btnText="Apply"
        className="w-full md:w-auto"
        onClick={() =>
          window.alert(
            "Sorry this position is on hold. Please try with another position"
          )
        }
      />
    </div>
  );
};

export default JobPost;
