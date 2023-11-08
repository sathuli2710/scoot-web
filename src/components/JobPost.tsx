import Button from "./Button";

type JobPostProps = {
  title: string;
  location: string;
};

const JobPost = ({ title = "", location = "" }: JobPostProps) => {
  return (
    <div className="w-full bg-snow p-6 text-darknavy flex flex-col md:flex-row justify-between items-center gap-y-3">
      <div className="text-center md:text-start">
        <h4 className="text-h4">{title}</h4>
        <p className="text-body">{location}</p>
      </div>
      <Button variant="filled" btnText="Apply" className="w-full md:w-auto" />
    </div>
  );
};

export default JobPost;
