import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
  PaperClipIcon,
} from "@heroicons/react/20/solid";
import ToggleSwitch from "./toggleswitch";

export default function CityJee({ previousStep, nextStep }) {
  return (
    <div className="mt-10 mx-auto max-w-md sm:max-w-4xl">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          City and JEE
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Select a city to appear for exam and your preference to consider JEE.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-200">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              City Preferences ( only 3 )
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Kochi</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-pink-600 hover:text-pink-500"
                    >
                      Remove
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Chennai</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-pink-600 hover:text-pink-500"
                    >
                      Remove
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-pink-600 hover:text-pink-500"
                    >
                      + Add another city
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Do you want to consider based on the JEE CRL Rank?
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <ToggleSwitch />
            </dd>
          </div>
        </dl>
        <div className="mt-10 py-5 border-t border-gray-200 flex items-center justify-center gap-x-6">
          <button
            type="button"
            onClick={previousStep}
            className="inline-flex items-center gap-x-2 rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
          >
            <ArrowSmallLeftIcon
              className="-ml-0.5 h-5 w-5"
              aria-hidden="true"
            />
            Previous
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="inline-flex items-center gap-x-2 rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
          >
            Next
            <ArrowSmallRightIcon
              className="-mr-0.5 h-5 w-5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
