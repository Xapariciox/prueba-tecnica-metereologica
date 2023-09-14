import { useContext } from 'react'
import { ForecastContext } from '../../context/ForecastContext'
import { HourlyForecastItem } from '../../interfaces/types'

export const ForecastTwentyFour = () => {
  const { locationUser, forecastHours } = useContext(ForecastContext)

 // Obtener la hora actual
const now = new Date();

// Convertir la hora actual a formato ISO
const nowISO = now.toISOString();

  let filteredData = forecastHours.forecast.items.filter((item: HourlyForecastItem) => {
    return new Date(item.date).getTime() >= new Date(nowISO).getTime();
  });
 
  const next24Hours = filteredData.slice(0,24)
  next24Hours.forEach((element: HourlyForecastItem) => {
console.log(element)
  });
  
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>El tiempo en {locationUser}</h2>

      <div>

      </div>

    </>
  )
}
