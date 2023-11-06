import Link from "next/link";

const WhyFreespace = ({ openModal }) => {
  return (
    <section
      id="whyUs"
      className="dark:bg-gray-800 DBlock py-10 sm:py-12 px-4 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="technologStackTitleDiv text-center mb-3">
          <h3 className="max-w-6xl mx-auto text-base sm:text-xl md:text-3xl text-black dark:text-gray-300 my-2 uppercase font-bold">
            <span className="text-blue-900 dark:text-blue-700"> Why</span>{" "}
            Freespace
          </h3>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-12">
          <div className="flex flex-col gap-3 items-center text-center">
            <img
              className="w-auto h-20"
              src={`/assets/icons/whyFreespace/requirement.png`}
              alt="requirements"
            />
            <h5 className="text-blue-900 dark:text-blue-700 text-sm sm:text-lg title font-bold">
              Requirements
            </h5>
            <p className="text-black dark:text-gray-300 text-xs sm:text-md title font-medium">
              You provide us description for your technical resources.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center text-center">
            <img
              className="w-auto h-20"
              src={`/assets/icons/whyFreespace/talentPool.png`}
              alt="Talent Pool"
            />
            <h5 className="text-blue-900 dark:text-blue-700 text-sm sm:text-lg title font-bold">
              Talent Pool
            </h5>
            <p className="text-black dark:text-gray-300 text-xs sm:text-md title font-medium">
              FreeSpace presents candidates to the client.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center text-center">
            <img
              className="w-auto h-20"
              src={`/assets/icons/whyFreespace/selection.png`}
              alt="Selection"
            />
            <h5 className="text-blue-900 dark:text-blue-700 text-sm sm:text-lg title font-bold">
              Selection
            </h5>
            <p className="text-black dark:text-gray-300 text-xs sm:text-md title font-medium">
              Client authorizes the resource they select.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center text-center">
            <img
              className="w-auto h-20"
              src={`/assets/icons/whyFreespace/onBoarding.png`}
              alt="Onboarding"
            />
            <h5 className="text-blue-900 dark:text-blue-700 text-sm sm:text-lg title font-bold">
              Onboarding
            </h5>
            <p className="text-black dark:text-gray-300 text-xs sm:text-md title font-medium">
              FreeSpace provides management, HR, operations, payroll and
              training services.
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => openModal(true)}
            className="rounded-md bg-indigo-600 px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Hire Developers
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyFreespace;
