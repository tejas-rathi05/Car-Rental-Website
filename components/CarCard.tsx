"use client";

import { CarProps } from "@/types";
import React from "react";
import { useState } from "react";
import { CustomButton } from ".";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const router = useRouter();
  const { city_mpg, year, make, model, transmission, drive, fuel_type } = car;

  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          fill
          priority
          className="object-contain"
          alt="Car Model"
        ></Image>
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg}</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <Link
            href={{
              pathname: "/cardetails",
              query: {
                city_mpg: car.city_mpg,
                class: car.class,
                combination_mpg: car.combination_mpg,
                cylinders: car.cylinders,
                displacement: car.displacement,
                drive: car.drive,
                fuel_type: car.fuel_type,
                highway_mpg: car.highway_mpg,
                make: car.make,
                model: car.model,
                transmission: car.transmission,
                year: car.year,
              },
            }}
            className="car-card__btn-container"
          >
            <CustomButton
              title="View More"
              containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
              textStyles="text-white text-[14px] leading-[17px] font-bold"
              rightIcon="/right-arrow.svg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
