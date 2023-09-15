"use client";
import React, { useState } from "react";
import PersonalInfo from "./personal-info";
import ParentsInfo from "./parents-info";
import AcademicInfo from "./academic-info";
interface Step {
  step: number;
  name: string;
}

const OnboardingWrapper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps: Step[] = [
    { step: 1, name: "Personal Information" },
    { step: 2, name: "Parents Information" },
    { step: 3, name: "Academic Information" },
  ];
  function showNext() {
    setCurrentStep((state) => state + 1);
  }
  return (
    <section className="flex max-w-2xl mx-auto flex-col my-10 sm:my-28">
      <nav className="flex items-center justify-center" aria-label="Progress">
        <p className="text-sm font-medium">
          Step {currentStep} of {steps.length}
        </p>
        <ol role="list" className="ml-8 flex items-center space-x-5">
          {steps.map((step) => (
            <li key={step.step}>
              {currentStep > step.step ? (
                <a className="block h-2.5 w-2.5 rounded-full bg-pink-600 hover:bg-pink-900">
                  <span className="sr-only">{step.name}</span>
                </a>
              ) : currentStep === step.step ? (
                <a
                  className="relative flex items-center justify-center"
                  aria-current="step"
                >
                  <span
                    className="absolute flex h-5 w-5 p-px"
                    aria-hidden="true"
                  >
                    <span className="h-full w-full rounded-full bg-pink-200" />
                  </span>
                  <span
                    className="relative block h-2.5 w-2.5 rounded-full bg-pink-600"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </a>
              ) : (
                <a className="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400">
                  <span className="sr-only">{step.name}</span>
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <div className="h-5 sm:h-10"></div>
      <div className="px-4 sm:px-0">
        {currentStep === 1 && (
          <div>
            <PersonalInfo showNext={showNext} />
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <ParentsInfo showNext={showNext} />
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <AcademicInfo />
          </div>
        )}
      </div>
    </section>
  );
};

export default OnboardingWrapper;
