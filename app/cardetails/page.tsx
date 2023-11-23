import { CarProps } from "@/types";
import React from "react";
import Image from "next/image";
import { calculateCarRent, generateCarImageUrl } from "@/utils";

const page = ({ searchParams }: { searchParams: CarProps }) => {
  const carRent = calculateCarRent(searchParams.city_mpg, searchParams.year)
  return (
    <main className="relative py-16 flex justify-center items-center h-screen">
      <div className="grid grid-cols-7 gap-4 w-5/6 max-sm:flex max-sm:flex-col mt-20">
        <div className="col-span-4">
          <div className="relative w-full h-[480px] bg-gradient-to-t from-gray-300 to-white rounded-2xl">
            <Image
              src={generateCarImageUrl(searchParams)}
              alt="car model"
              fill
              priority
              className="object-contain p-12 mt-10 max-md:p-5"
            />
          </div>

          <div className="flex justify-center items-center gap-3 p-2">
            <div className="bg-gray-300 relative w-40 h-24 rounded-xl">
              <Image
                src={generateCarImageUrl(searchParams, "29")}
                alt="car model"
                fill
                priority
                className="object-contain mt-2"
              />
            </div>
            <div className="bg-gray-300 relative w-40 h-24 rounded-xl">
              <Image
                src={generateCarImageUrl(searchParams, "33")}
                alt="car model"
                fill
                priority
                className="object-contain "
              />
            </div>
            <div className="bg-gray-300 relative w-40 h-24 rounded-xl">
              <Image
                src={generateCarImageUrl(searchParams, "13")}
                alt="car model"
                fill
                priority
                className="object-contain mt-2"
              />
            </div>
          </div>
        </div>

        <div className="col-span-3 px-10 ">
          <div>
            <h1 className="text-4xl leading-snug font-bold capitalize">
              {searchParams.model}
            </h1>
            <h2 className="text-2xl leading-snug font-semibold capitalize">
              {searchParams.make}
            </h2>
          </div>

          <div>
            <button className="bg-black w-full text-white h-20 my-5 rounded-xl flex justify-center items-center">
              <p className="flex text-[32px] font-extrabold">
                <span className="font-bold mr-3">Rent Now :</span>
                <span className="self-start text-[14px] font-semibold mr-1">$</span>
                {carRent}
                <span className="self-end text-[14px] font-medium ml-1">/day</span>
              </p>
            </button>

          </div>

          <div className="p-5 flex flex-wrap gap-1 ">
          {/* border-solid border-2 border-slate-600 rounded-xl */}
            {Object.entries(searchParams).map(([key, value]) => (
              <div
                className="flex justify-between gap-5 w-full text-right"
                key={key}
              >
                <h4 className="text-grey capitalize">
                  {key.split("_").join(" ")}
                </h4>
                <p className="text-black-100 font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
