import { CarProps } from "@/types";
import React from "react";
import {decodeURL, fetchCars, fetchSpecificCar} from '../../../utils'

interface CarDetailProps {
  params: {
    carID: string;
  }
}


async function carDetailsPage ({ params }: CarDetailProps) {
  const carDetails = decodeURL(params.carID);
  // manufacturer, year, model, limit, fuel
  const car = await fetchCars({
    manufacturer: carDetails.make, 
    year: Number(carDetails.year), 
    model: carDetails.model, 
    // drive: carDetails.drive, 
    fuel: carDetails.fuel, 
    // transmission: carDetails.transmission,
    limit: 5
  });
  console.log(car)
  return (
    <div>
      <h1>Car Details: </h1>
    </div>
  );
};

export default carDetailsPage;