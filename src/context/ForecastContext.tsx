import { createContext } from 'react'
import { ForecastContextProps } from '../interfaces/types'

export const ForecastContext = createContext<ForecastContextProps>({
    setLocationUser: (location: string) => {},
    locationUser: '',
    forecastDays: [],
    forecastHours: [],
    initForecastDays: () => {},
    initForecastHours: () => {},
    currentTime: '',
    trialFreeSearch: ''
})
