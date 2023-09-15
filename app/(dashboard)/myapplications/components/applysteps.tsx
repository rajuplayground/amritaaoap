"use client";
const steps = [
  { id: "Step 1", name: "Program Selection", status: "current" },
  { id: "Step 2", name: "City and JEE", status: "upcoming" },
  { id: "Step 3", name: "Preview and Submit", status: "upcoming" },
];

export default function ApplySteps({ stepId }) {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
        {steps.map((step, i) => (
          <li key={step.name} className="md:flex-1">
            {i < stepId ? (
              <div className="group flex flex-col border-l-4 border-pink-600 py-2 pl-4 hover:border-pink-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-pink-600 group-hover:text-pink-800">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            ) : i === stepId ? (
              <div
                className="flex flex-col border-l-4 border-pink-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                aria-current="step"
              >
                <span className="text-sm font-medium text-pink-600">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            ) : (
              <div className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
