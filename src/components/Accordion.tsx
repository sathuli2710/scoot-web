import { useState } from "react";

const Accordion = ({
  title = "How do I download the app?",
  description = "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  isOpen = false,
}) => {
  const [isAccordionOpen, setAccordionOpen] = useState(isOpen);
  return (
    <div
      className="w-full bg-snow dark:bg-dimgrey p-6"
      onClick={() => setAccordionOpen(!isAccordionOpen)}
    >
      <div className="overflow-hidden duration-500 ease-in-out">
        <div className="flex justify-between items-center cursor-pointer gap-3">
          <h4 className="text-h4 text-darknavy">{title}</h4>
          <svg
            width="18"
            height="13"
            viewBox="0 0 18 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`flex-shrink-0 ${
              isAccordionOpen ? "rotate-180" : "rotate-0"
            } duration-500 ease-in-out`}
          >
            <path d="M2 2L10 10L18 2" stroke="#FCB72B" stroke-width="3" />
          </svg>
        </div>
        {isAccordionOpen && (
          <p className="text-body mt-4 text-dimgrey dark:text-lightgrey">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
