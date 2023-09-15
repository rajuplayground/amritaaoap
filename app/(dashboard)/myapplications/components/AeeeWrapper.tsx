"use client";
import React, { useState } from "react";
import ApplySteps from "./applysteps";
import AeeeSubmit from "./exam-submit";
import ProgramSelection from "./program-selection";
import CityJee from "./exam-cityjee";

const AeeeWrapper = () => {
  const [step, setStep] = useState(0);

  function nextStep() {
    setStep((state) => state + 1);
  }
  function previousStep() {
    console.log("clidked");

    setStep((state) => state - 1);
  }
  return (
    <div className="bg-white py-5 px-2 rounded shadow-sm border border-gray-100">
      <ApplySteps stepId={step} />
      <div className="h-6"></div>
      <section>
        {step === 0 && <ProgramSelection nextStep={nextStep} />}
        {step === 1 && (
          <CityJee previousStep={previousStep} nextStep={nextStep} />
        )}
        {step === 2 && <AeeeSubmit previousStep={previousStep} />}
      </section>
    </div>
  );
};

export default AeeeWrapper;
