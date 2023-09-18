import { createContext } from 'react'
import {
    ForeCastHoursMappedItem,
    ForecastContextProps,
    foreCastDaysItemMapped
} from '../interfaces/types'

export const ForecastContext = createContext<ForecastContextProps>({
    setLocationUser: (location: string) => {},
    locationUser: '',
    forecastDays: [] as foreCastDaysItemMapped[],
    forecastHours: [] as ForeCastHoursMappedItem[],
    initForecastDays: () => {},
    initForecastHours: () => {},
    currentTime: '',
    trialFreeSearch: '',
    setIsLoading: () => {},
    isLoading: false,
    setIsDarkMode: (isDarkMode: boolean) => {},
    isDarkMode: false
})
