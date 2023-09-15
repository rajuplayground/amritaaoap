import {
  UserCircleIcon,
  AcademicCapIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/outline";
import BreadCrumbs from "../myapplications/components/breadcrumbs";
import Image from "next/image";
import GeneralCrumbs from "./components/generalcrumbs";

const secondaryNavigation = [
  { name: "General", href: "/profile", icon: UserCircleIcon, current: true },
  {
    name: "Academic",
    href: "/profile/academic",
    icon: AcademicCapIcon,
    current: false,
  },
  {
    name: "Payments",
    href: "/profile/payments",
    icon: CurrencyRupeeIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  return (
    <>
      <div className="pb-6">
        <GeneralCrumbs />
      </div>
      <div className="lg:flex lg:gap-x-16 lg:px-8 bg-white shadow-sm border border-gray-100">
        <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
          <nav className="flex-none px-4 sm:px-6 lg:px-0">
            <ul
              role="list"
              className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col"
            >
              {secondaryNavigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-50 text-pink-600"
                        : "text-gray-700 hover:text-pink-600 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-pink-600"
                          : "text-gray-400 group-hover:text-pink-600",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
          <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Profile
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                This information will be displayed publicly so be careful what
                you share.
              </p>
              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    <p className="mb-2">Photo</p>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
                    />
                  </dt>
                  <dd className="mt-1 gap-x-6 sm:mt-0 sm:flex-auto">
                    <p className="font-medium text-gray-900 mb-2">Signature</p>
                    <img
                      src="https://static.cdn.wisestamp.com/wp-content/uploads/2020/08/Oprah-Winfrey-Signature-1.png"
                      alt=""
                      className="h-24 w-48 flex-none rounded-lg object-contain border border-gray-200"
                    />
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Full name
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Tom Cook</div>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Full name
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Tom Cook</div>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Date of Birth
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">11/08/2004</div>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Gender
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Male</div>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Social Status
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">General</div>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Email
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">av@gmail.com</div>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Phone
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">+91 9933333333</div>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Aadhaar
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">8967 5567 4456 3456</div>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    How did you come to know about Amrita?
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Website</div>
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Address
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                Contact Address
              </p>
              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    State
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Kerala</div>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    District
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Thiruvananthapuram</div>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    City
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Thiruvananthapuram</div>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Address Line 1
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Lorem Street</div>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Address Line 2
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-400 italic">Empty</div>
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Parent’s / Guardian’s Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                Details of Parent / Guardian
              </p>
              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Parent’s / Guardian’s Name
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Cook</div>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Parent’s / Guardian’s Email address
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">cook@gmail.com</div>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Parent’s / Guardian’s Phone
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">+91 9447588585</div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
