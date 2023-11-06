import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function MyModal({ isOpen, closeModal, isHire }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-10 text-center align-middle shadow-xl transition-all">
                  <div className="mt-2 text-blue-900 dark:text-blue-600 text-lg">
                    Contact us at:{" "}
                    <a
                      href={`mailto:${
                        isHire === "true"
                          ? "info@freespace3d.com"
                          : isHire === "false"
                          ? "hr@freespace3d.com"
                          : ""
                      }`}
                      className="text-md text-blue-800 dark:text-blue-700"
                    >
                      {isHire === "true"
                        ? "info@freespace3d.com"
                        : isHire === "false"
                        ? "hr@freespace3d.com"
                        : ""}
                    </a>
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      className="rounded-md bg-indigo-600 px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
