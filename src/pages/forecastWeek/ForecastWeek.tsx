import { useContext } from "react"
import { ForecastContext } from "../../context/ForecastContext"
import { foreCastDaysItem } from "../../interfaces/types"
import { ForecastDays } from "../../components/ForecastDays"

export const ForecastWeek = () => {
  const {  forecastDays } = useContext(ForecastContext)

//   vendra del contexto
const daysMapped = forecastDays.forecast.items.map((forecast: foreCastDaysItem)=> (
    {
date: forecast.date,
state: forecast.weather.state,
temperature: {
    min: forecast.temperature.min,
    max: forecast.temperature.max
},
weather: {
    text: forecast.weather.text,
    icon: forecast.weather.icon
}

}
))
  return (
    <>
    <ForecastDays days={daysMapped} />
    </>
  )
}
