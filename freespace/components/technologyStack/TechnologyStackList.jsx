import AllStackList from "./AllStackList";

const TechnologyStackList = () => {
  return (
    <section
      id="skills"
      className="technologyStackSec dark:bg-gray-800 DBlock py-10 sm:py-12 px-4 md:px-16"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="technologStackTitleDiv text-center relative">
          <h3 className="max-w-6xl mx-auto text-base sm:text-xl md:text-3xl text-black dark:text-gray-300 my-2 uppercase font-bold">
            <span className="text-blue-900 dark:text-blue-700">
              {" "}
              Tech Stacks
            </span>{" "}
            We Hire For
          </h3>
          <p className="text-black dark:text-gray-300 mb-3 text-sm sm:text-lg title font-medium">
            At Freespace we hire for a wide range of tech stacks.
          </p>
        </div>
        <AllStackList />
      </div>
    </section>
  );
};

export default TechnologyStackList;
