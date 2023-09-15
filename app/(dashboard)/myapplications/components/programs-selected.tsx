import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
const people = [
  {
    name: "B.Tech, Computer Science - Kochi",
  },
  {
    name: "B.Tech, Computer Science - Amritapuri",
  },
];

export default function ProgramsSelected() {
  return (
    <div>
      <h3 className="text-base font-semibold leading-7 text-gray-900">
        Selected Programs
      </h3>
      <ul role="list" className="divide-y divide-gray-200">
        {people.map((person) => (
          <li
            key={person.name}
            className="flex items-center justify-between gap-x-6 py-5"
          >
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-600">
                  {person.name}
                </p>
              </div>
            </div>
            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </div>
  );
}
