import { useEffect, useState } from 'react'
import {
  getForecastDays,
  getForecastHours
} from '../services/data-meteorological'
import { ForecastContext } from './ForecastContext'
import { mockMadridDays, mockMadridHours } from '../mocks/responseMadrid'

export const ForecastProvider = ({ children }: {children: JSX.Element}) => {
  const [locationUser, setLocationUser] = useState('Madrid')

  const initForecast = () => {
    const forecastDays = getForecastDays(locationUser)
    const forecastHours = getForecastHours(locationUser)
  }
 const  forecastDays= mockMadridDays
 const forecastHours =  mockMadridHours

  useEffect(() => {
    
  }, [locationUser])

  // const mappedForecastDay = forecastDays.map((forecast)=> {

  // })

  return (
    <ForecastContext.Provider
      value={{
        setLocationUser,
        forecastDays,
        forecastHours,
        // MappedForecastDay,
        locationUser
      }}
    >
      {children}
    </ForecastContext.Provider>
  )
}
