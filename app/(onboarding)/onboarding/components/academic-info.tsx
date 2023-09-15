"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AcademicInfo = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const router = useRouter();

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Academic Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Enter the state where you attended 12th Standard.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-full">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                12th Standard State <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6"
                  defaultValue="Canada"
                >
                  <option value="0">--Select--</option>
                  <option value="30">Andaman and Nicobar Islands</option>
                  <option value="1">Andhra Pradesh</option>
                  <option value="2">Arunachal Pradesh</option>
                  <option value="3">Assam</option>
                  <option value="4">Bihar</option>
                  <option value="31">Chandigarh</option>
                  <option value="5">Chhattisgarh</option>
                  <option value="32">Dadra and Nagar Haveli</option>
                  <option value="33">Daman and Diu</option>
                  <option value="34">Delhi</option>
                  <option value="6">Goa</option>
                  <option value="7">Gujarat</option>
                  <option value="8">Haryana</option>
                  <option value="9">Himachal Pradesh</option>
                  <option value="10">Jammu and Kashmir</option>
                  <option value="11">Jharkhand</option>
                  <option value="12">Karnataka</option>
                  <option value="13">Kerala &amp; Mahe</option>
                  <option value="35">Lakshadweep</option>
                  <option value="14">Madhya Pradesh</option>
                  <option value="15">Maharashtra</option>
                  <option value="16">Manipur</option>
                  <option value="17">Meghalaya</option>
                  <option value="18">Mizoram</option>
                  <option value="19">Nagaland</option>
                  <option value="20">Odisha</option>
                  <option value="21">Punjab</option>
                  <option value="22">Rajasthan</option>
                  <option value="23">Sikkim</option>
                  <option value="24">Tamil Nadu &amp; Puducherry (UT)</option>
                  <option value="25">Telangana</option>
                  <option value="26">Tripura</option>
                  <option value="27">Uttar Pradesh</option>
                  <option value="28">Uttarakhand</option>
                  <option value="29">West Bengal</option>
                  <option value="999">Others</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default AcademicInfo;
