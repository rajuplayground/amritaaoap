import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/20/solid";
import ToggleSwitch from "./toggleswitch";
import FeeBreak from "./fee-breakup";
import FeeFailed from "./fee-failed";
import { useRouter } from "next/navigation";

export default function AeeeSubmit({ previousStep }) {
  const router = useRouter();
  return (
    <div className="mt-10 mx-auto max-w-md sm:max-w-4xl">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Preview your application
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Details once submitted cannot be edited. Please check carefully.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-200">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Entrance Exam
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              AEEE
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              City
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate">Kochi</span>
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate">Chennai</span>
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate ">Bangalore</span>
                    </div>
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
              Yes
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Selected Programs
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate">
                        B.Tech, Computer Science - Kochi
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate">
                        B.Tech, Computer Science - Amritapuri
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate">
                        B.Tech, Computer Science - Chennai
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
      <div className="mt-1 py-5 border-t border-gray-200 flex items-center justify-start gap-x-6">
        <button
          type="button"
          onClick={previousStep}
          className="inline-flex items-center gap-x-2 rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
        >
          <ArrowSmallLeftIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Previous
        </button>
      </div>
      <div className="px-4 sm:px-0 mt-5">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Fee Payment
        </h3>
        <p className="mt-1 text-sm leading-6 text-gray-500">
          A minimum of 3 working days is required to confirm the payment
          transaction. If the fee is paid through credit/debit
          card/Netbanking/NEFTand status is still pending, it means the
          transaction is cancelled and the amount will, automatically, be
          refunded to concerned credit/debit card/Net Banking/NEFT Account
          within 15 days. Therefore, such candidates have to pay the fee once
          again to complete the application.
        </p>
      </div>
      <div className="h-5"></div>
      <div>
        <FeeBreak />
        <div className="my-5 py-5 flex items-center justify-center gap-x-6">
          <button
            type="button"
            onClick={() => router.push("/myapplications")}
            className="inline-flex items-center gap-x-2 rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
          >
            Proceed to payment
            <ArrowSmallRightIcon
              className="-mr-0.5 h-5 w-5"
              aria-hidden="true"
            />
          </button>
        </div>
        <FeeFailed />
      </div>
    </div>
  );
}
