import Link from "next/link";

const OurEmployees = ({ openModal }) => {
  return (
    <section
      id="aboutUs"
      className="dark:bg-gray-800 DBlock py-10 sm:py-20 px-4 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:justify-items-start justify-items-center gap-6">
          <img
            className="w-auto sm:h-full h-44"
            src={`/assets/icons/whyFreespace/employees.png`}
            alt="our employee"
          />
          <div className="flex flex-col gap-6 sm:text-left text-center justify-center">
            <h3 className="max-w-6xl text-base sm:text-xl md:text-3xl text-black dark:text-gray-300 my-2 font-bold">
              <span className="text-blue-900 dark:text-blue-700">
                {" "}
                Why our developers{" "}
              </span>{" "}
              are always motivated?
            </h3>
            <h5 className="text-black dark:text-gray-300 text-sm sm:text-lg title font-bold">
              We provide our developers with the best facilities so that they
              bring the best outcome.
            </h5>
            <ul>
              <li className="text-black dark:text-gray-300 text-sm sm:text-md title font-medium">
                Office Space
              </li>
              <li className="text-black dark:text-gray-300 text-sm sm:text-md title font-medium">
                Office Equipment
              </li>
              <li className="text-black dark:text-gray-300 text-sm sm:text-md title font-medium">
                Health Insurance
              </li>
              <li className="text-black dark:text-gray-300 text-sm sm:text-md title font-medium">
                Training
              </li>
              <li className="text-black dark:text-gray-300 text-sm sm:text-md title font-medium">
                Gratuity Fund
              </li>
              <li className="text-black dark:text-gray-300 text-sm sm:text-md title font-medium">
                Internet Service
              </li>
              <li className="text-black dark:text-gray-300 text-sm sm:text-md title font-medium">
                Paid Annual Leave
              </li>
            </ul>

            <div>
              <button
                onClick={() => openModal(true)}
                className="rounded-md bg-indigo-600 px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Hire Developers
              </button>
            </div>
            <p className="text-black dark:text-gray-300 text-sm sm:text-md title font-medium">
              Looking for work?{" "}
              <button
                onClick={() => openModal(false)}
                className="ml-1 text-indigo-600 text-sm sm:text-md font-semibold hover:text-indigo-500"
              >
                Apply here
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurEmployees;
