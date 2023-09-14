import { foreCastDaysItemMapped } from "../interfaces/types";
import { ForecastDay } from "./forecastDay";

export const ForecastDays = ({days}: {days: Array<foreCastDaysItemMapped>}) => {


  return (
    <div>
      {days.map((day, index) => (
        <ForecastDay key={index} day={day} />
      ))}
    </div>
  );
};
