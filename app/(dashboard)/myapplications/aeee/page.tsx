import React from "react";
import BreadCrumbs from "../components/breadcrumbs";
import AeeeWrapper from "../components/AeeeWrapper";

const Page = () => {
  console.log("calld this");
  return (
    <div>
      <BreadCrumbs />
      <div className="h-6"></div>
      <AeeeWrapper />
    </div>
  );
};

export default Page;
