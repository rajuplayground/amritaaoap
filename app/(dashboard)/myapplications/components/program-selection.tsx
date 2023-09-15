import ProgramsList from "./programs-list";
import ProgramsSelected from "./programs-selected";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";

export default function ProgramSelection({ nextStep }) {
  return (
    <div className="mx-auto max-w-md sm:max-w-4xl">
      <div>
        <div className="text-center">
          <h2 className="mt-2 text-base font-semibold leading-6 text-gray-900">
            Select Programs
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Programs can be selected and rearranged based on your preference.
          </p>
        </div>
        <form className="mt-6 sm:flex sm:items-center" action="#">
          <label htmlFor="emails" className="sr-only">
            Programs
          </label>
          <div className="grid grid-cols-1 sm:flex-auto">
            <input
              type="text"
              name="emails"
              id="emails"
              className="peer relative col-start-1 row-start-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Select a program"
            />
            <div
              className="col-start-1 col-end-3 row-start-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 peer-focus:ring-2 peer-focus:ring-pink-600"
              aria-hidden="true"
            />
            <div className="col-start-2 row-start-1 flex items-center">
              <span
                className="h-4 w-px flex-none bg-gray-200"
                aria-hidden="true"
              />
              <label htmlFor="role" className="sr-only">
                City
              </label>
              <select
                id="city"
                name="city"
                className="rounded-md border-0 bg-transparent py-1.5 pl-4 pr-7 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              >
                <option value="0">--All--</option>
                <option value="1">Amritapuri</option>
                <option value="2">Coimbatore</option>
                <option value="3">Bengaluru</option>
                <option value="4">Chennai</option>
                <option value="5"> Amaravati</option>
                <option value="6">Kochi</option>
                <option value="7">Mysuru</option>
                <option value="8">Faridabad</option>
              </select>
            </div>
          </div>
          <div className="mt-3 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
            <button
              type="submit"
              className="block w-full rounded-md bg-pink-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6">
        <div className="md:col-span-4">
          <ProgramsList />
        </div>
        <div className="md:col-span-2">
          <ProgramsSelected />
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button
          type="button"
          onClick={nextStep}
          className="inline-flex items-center gap-x-2 rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
        >
          Next
          <ArrowSmallRightIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
