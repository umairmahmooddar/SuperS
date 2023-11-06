//import json data
import { fullStackList, shortStackList } from "@/helpers/helper";
import { useState } from "react";

const AllStackList = () => {
  const [stackList, setStackList] = useState(shortStackList);
  const [fullList, setFullList] = useState(false);
  const showMoreStacks = () => {
    let list = [...shortStackList, ...fullStackList];
    setStackList(list);
    setFullList(true);
  };
  const showLessStacks = () => {
    setStackList(shortStackList);
    setFullList(false);
  };
  return (
    <section className="allList DBlock mt-12 text-center">
      <div className="relative max-w-6xl mx-auto flex justify-center items-center flex-wrap">
        {stackList?.map((items, ind) => (
          <div
            className="xl:relative flex items-center justify-center flex-col mx-3 sm:mx-4 sm:ml-9 my-8"
            key={items.id}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-600 shadow-lg p-1">
              <span className="flex justify-center items-center">
                <img
                  className="w-10 h-10 object-contain"
                  src={`/assets/icons/stack/${items?.icon}.png`}
                  alt="techIcon"
                />
              </span>
            </div>
            <p className="text-sm font-normal capitalize text-center dark:text-gray-300 mt-3">
              {items?.title}
            </p>
          </div>
        ))}
      </div>
      <button
        type="button"
        className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
          fullList ? "hover:-translate-y-1" : "hover:translate-y-1"
        }`}
        onClick={() => (fullList ? showLessStacks() : showMoreStacks())}
      >
        {fullList ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}

        <span className="sr-only">Icon description</span>
      </button>
    </section>
  );
};

export default AllStackList;
