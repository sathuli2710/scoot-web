import { careerperson } from "../assets";
import { GridSectionComp } from "../components/GridSection";
import JobPost from "../components/JobPost";
import PageHeadingComp from "../components/PageHeadingComp";
import Value from "../components/Value";
import { valuesData } from "../data/aboutPageData";
import { jobs } from "../data/careersPageData";

const Careers: React.FC = () => {
  return (
    <main className="px-6">
      <PageHeadingComp title="Careers" bgImageClass="locationspagebg" />
      <GridSectionComp
        title="Care to join our mission?"
        description="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
        imgSrc={careerperson}
        btntext="Say Hello"
        buttonHandler={() =>
          window.alert("Sorry for the inconvenience. Please try again later.")
        }
      />
      <h3 className="text-h3 text-darknavy text-center my-5">Why join us?</h3>
      <div className="flex flex-col lg:flex-row items-center justify-around gap-4">
        {valuesData.map((valueData, idx) => (
          <Value
            key={valueData?.id}
            title={valueData?.title}
            description={valueData?.description}
            imgSrc={valueData?.imgSrc}
            number={idx}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-y-6">
        {jobs.map((jobData) => (
          <JobPost
            key={jobData?.id}
            title={jobData?.title}
            location={jobData?.location}
          />
        ))}
      </div>
    </main>
  );
};

export default Careers;
