const people = [
  {
    name: "B.Tech, Computer Science - Kochi",
    status: "applied",
  },
  {
    name: "B.Tech, Electronice - Kochi",
    status: "not",
  },
  {
    name: "B.Tech, Artificial Intelligence - Kochi",
    status: "not",
  },
  {
    name: "B.Tech, Mechanical Engineering - Kochi",
    status: "applied",
  },
  {
    name: "B.Tech, Aeronautical Engineering - Kochi",
    status: "not",
  },
];

export default function ProgramsList() {
  return (
    <div>
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-visible sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.name}
                      </td>

                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        {person.status === "applied" ? (
                          <p className="text-green-600">Applied</p>
                        ) : (
                          <a
                            href="#"
                            className="text-pink-600 hover:text-pink-900"
                          >
                            Select
                            <span className="sr-only">, {person.name}</span>
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
