import { useEffect, useState } from 'react'
import {
  getForecastDays,
  getForecastHours
} from '../services/data-meteorological'
import { ForecastContext } from './ForecastContext'

export const ForecastProvider = ({ children }: {children: JSX.Element}) => {
  const [locationUser, setLocationUser] = useState('Madrid')

  const initForecast = () => {
    const forecastDays = getForecastDays(locationUser)
    const forecastHours = getForecastHours(locationUser)
  }

  useEffect(() => {
    initForecast()
  }, [locationUser])

  // const mappedForecastDay = forecastDays.map((forecast)=> {

  // })

  return (
    <ForecastContext.Provider
      value={{
        setLocationUser,
        // MappedForecastDay,
        locationUser
      }}
    >
      {children}
    </ForecastContext.Provider>
  )
}
