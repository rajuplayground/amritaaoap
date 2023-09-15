"use client";
import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { PiSignatureBold } from "react-icons/pi";
import DatepickerComponent from "./DatepickerComponent";

const PersonalInfo = ({ showNext }) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Enter your address if you wish to get the brochure and career
            guidance kit.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                DOB
              </label>
              <div className="mt-2">
                <DatepickerComponent />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6"
                  defaultValue="Canada"
                >
                  <option value="0">--Select--</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Transgender</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Social Status
              </label>
              <div className="mt-2">
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6"
                  defaultValue="Canada"
                >
                  <option value="0">--Select--</option>
                  <option value="4">General</option>
                  <option value="3">OBC(BC&amp;MBC)</option>
                  <option value="5">Others</option>
                  <option value="1">SC</option>
                  <option value="2">ST</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                How did you come to know about Amrita?
              </label>
              <div className="mt-2">
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6"
                  defaultValue="Canada"
                >
                  <option value="0">--Select--</option>
                  <option value="1">News paper</option>
                  <option value="2">Facebook</option>
                  <option value="3">Found through Google Search</option>
                  <option value="4">Online News</option>
                  <option value="5">Alumni</option>
                  <option value="6">My School Teachers</option>
                  <option value="7">Relatives</option>
                  <option value="8">Hoardings</option>
                  <option value="9">Magazines</option>
                  <option value="10">Career Fair</option>
                  <option value="11">Other</option>
                  <option value="12">Online Session conducted by Amrita</option>
                  <option value="13">Instagram</option>
                  <option value="20">Mobile Application</option>
                  <option value="24">Found through Google Ads</option>
                  <option value="25">Student of Amrita Vidyalayam</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Aadhaar Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State
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
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                District
              </label>
              <div className="mt-2">
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6"
                  defaultValue="Canada"
                >
                  <option value="0">--Select--</option>
                  <option value="289">Alappuzha</option>
                  <option value="290">Ernakulam</option>
                  <option value="291">Idukki</option>
                  <option value="292">Kannur</option>
                  <option value="293">Kasaragod</option>
                  <option value="294">Kollam</option>
                  <option value="295">Kottayam</option>
                  <option value="296">Kozhikode</option>
                  <option value="297">Malappuram</option>
                  <option value="298">Palakkad</option>
                  <option value="299">Pathanamthitta</option>
                  <option value="300">Thiruvananthapuram</option>
                  <option value="301">Thrissur</option>
                  <option value="302">Wayanad</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-pink-600 sm:text-sm sm:leading-6"
                  defaultValue="Canada"
                >
                  <option value="0">--Select--</option>
                  <option value="8953">Ambalamukku</option>
                  <option value="9403">AMBALATHARA</option>
                  <option value="7212">Anayara</option>
                  <option value="8381">ANDOORKONAM</option>
                  <option value="9045">Aryanad</option>
                  <option value="1493">Attingal</option>
                  <option value="6895">Balaramapuram</option>
                  <option value="8759">Chalai</option>
                  <option value="7114">Chempazhanthy</option>
                  <option value="6960">Chirayinkeezhu</option>
                  <option value="89">Edava</option>
                  <option value="8105">Jagathy</option>
                  <option value="9154">KADINAMKULAM</option>
                  <option value="7148">KALLAMBALAM</option>
                  <option value="8231">KALLARA</option>
                  <option value="9078">Kanjiramkulam</option>
                  <option value="8746">kanjirampara</option>
                  <option value="6922">KARAKULAM</option>
                  <option value="7416">Karamana</option>
                  <option value="7953">Karikkakom</option>
                  <option value="8403">KARUMOM</option>
                  <option value="6588">KATTAKADA</option>
                  <option value="5987">Kazhakuttom</option>
                  <option value="6691">Kilimanoor</option>
                  <option value="7281">Killipalam</option>
                  <option value="6790">Kochuveli</option>
                  <option value="7985">Kovalam</option>
                  <option value="7271">KOWDIAR</option>
                  <option value="7214">Kudappanakkunnu</option>
                  <option value="8223">Kumarapuram</option>
                  <option value="6796">MADAVOOR</option>
                  <option value="8025">Malayinkeezh</option>
                  <option value="7499">MANACAUD</option>
                  <option value="5995">Mangalapurum </option>
                  <option value="9103">MANNANTHALA</option>
                  <option value="7117">Mukkolakkal</option>
                  <option value="6623">Nalanchira</option>
                  <option value="8547">NANNIYODE</option>
                  <option value="1581">Nedumangad</option>
                  <option value="7209">Nemom</option>
                  <option value="6953">NETTAYAM</option>
                  <option value="1584">Neyyattinkara</option>
                  <option value="9279">PALLIPPURAM</option>
                  <option value="6795">Pammamcode</option>
                  <option value="6412">Pangode</option>
                  <option value="6507">Pappanamcode</option>
                  <option value="6779">Parassala</option>
                  <option value="7675">Parippally</option>
                  <option value="8273">PATHANAMTHITTA</option>
                  <option value="6923">Pattom</option>
                  <option value="7234">Peroorkada</option>
                  <option value="8240">Perukavu</option>
                  <option value="6984">PETTAH</option>
                  <option value="7615">Peyad</option>
                  <option value="7274">Poojappura</option>
                  <option value="8780">POOVAR</option>
                  <option value="6625">POTHENCODE</option>
                  <option value="8407">PTP NAGAR</option>
                  <option value="8078">Pulluvila</option>
                  <option value="6546">Sreekariyam</option>
                  <option value="6765">Thachottukavu</option>
                  <option value="7379">Thirumala</option>
                  <option value="8822">Thiruvallom</option>
                  <option value="7968">Thiruvanandhapuram</option>
                  <option value="33">Thiruvananthapuram</option>
                  <option value="7249">THYCAUD</option>
                  <option value="7126">Trivandrum</option>
                  <option value="6956">Ulloor</option>
                  <option value="8795">VAKKOM PO</option>
                  <option value="6860">Vamanapuram</option>
                  <option value="7952">Vanchiyoor</option>
                  <option value="76">Varkala</option>
                  <option value="7639">Vattapara</option>
                  <option value="6616">Vattiyoorkavu </option>
                  <option value="6503">Vazhuthacaud</option>
                  <option value="8863">Vedivachankoli</option>
                  <option value="7142">Vellanad </option>
                  <option value="9470">VELLARADA</option>
                  <option value="7521">Vellayambalam</option>
                  <option value="6729">Vellayani</option>
                  <option value="6429">VEMBAYAM</option>
                  <option value="7033">venganoor</option>
                  <option value="6459">VENJARAMOODU</option>
                  <option value="8566">Vettucaud</option>
                  <option value="9397">Vilappilsala</option>
                  <option value="99999">Others</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address Line 1
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address Line 2
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Signature
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <PiSignatureBold
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={() => showNext()}
          className="rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default PersonalInfo;
