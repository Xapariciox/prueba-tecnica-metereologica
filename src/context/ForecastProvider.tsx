import { useEffect, useState } from 'react'
import {
    getForecastDays,
    getForecastHours
} from '../services/data-meteorological'
import { ForecastContext } from './ForecastContext'
import {
    ForeCastHoursMappedItem,
    foreCastDaysItem,
    foreCastDaysItemMapped,
    foreCastHoursItem
} from '../interfaces/types'
import { mockMadridDays, mockMadridHours } from '../mocks/responseMadrid'
import { translateItems } from '../helpers/translateTextToSpanish'
import { getStorage, setStorage } from '../services/localstorage'
import { isNight } from '../helpers/isNight'
import { NUMBER_SEARCHES } from '../constants/localStorage'

export const ForecastProvider = ({ children }: { children: JSX.Element }) => {
    const [locationUser, setLocationUser] = useState('')
    const [forecastDays, setForecastDays] = useState<foreCastDaysItemMapped[]>(
        []
    )
    const [forecastHours, setForecastHours] = useState<
        ForeCastHoursMappedItem[]
    >([])
    const [currentTime, setCurrentTime] = useState('')
    const [trialFreeSearch, setTrialFreeSearch] = useState(
        getStorage(NUMBER_SEARCHES) || ''
    )
    const [shouldRunEffect, setShouldRunEffect] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)

    // Mock de la api para usar en local
    const forecastHoursData = mockMadridHours
    const forecastDaysData = mockMadridDays
    // Mock de la api para usar en local

    const getCurrentDate = () => {
        const fechaActual = new Date()

        const horaActual = fechaActual.toLocaleTimeString('es-ES', {
            timeZone: 'Europe/Madrid'
        })
        setCurrentTime(horaActual)
    }
    const viewTrialFreesearches = () => {
        const numberSearchesLocalStorage = getStorage(NUMBER_SEARCHES)
        if (!numberSearchesLocalStorage) {
            setStorage(NUMBER_SEARCHES, '1')
            setTrialFreeSearch('1')
        } else {
            if (numberSearchesLocalStorage === '5') {
                setTrialFreeSearch('5')
            } else {
                const searchesNumer = parseInt(numberSearchesLocalStorage) + 1
                const searchesString = searchesNumer.toString()
                setTrialFreeSearch(searchesString)
                setStorage(NUMBER_SEARCHES, searchesString)
            }
        }
    }
    useEffect(() => {
        if (shouldRunEffect) {
            getCurrentDate()
            viewTrialFreesearches()
        } else {
            setShouldRunEffect(true)
        }
    }, [locationUser])

    const initForecastDays = async () => {
        try {
            const forecastDaysData = await getForecastDays(locationUser)

            const forecastDaysMapped = forecastDaysData.forecast.map(
                (forecast: foreCastDaysItem) => ({
                    date: forecast.date,
                    temperature: {
                        min: forecast.minTemp,
                        max: forecast.maxTemp
                    },
                    weather: {
                        text: forecast.symbolPhrase,
                        icon: forecast.symbol
                    },
                    precPosibility: forecast.precipProb
                })
            )
            const next7Days = forecastDaysMapped.splice(0, 7)
            const dataTranslated = translateItems(next7Days)
            setStorage('LOCATION_USER', locationUser)
            setForecastDays(dataTranslated)
        } catch (error) {
            setIsLoading(false)
            console.error(
                'Ocurrió un error al obtener los datos de pronóstico:',
                error
            )
        }
    }

    const initForecastHours = async () => {
        try {
            const forecastHoursData = await getForecastHours(locationUser)

            const currentDate = new Date()
            const nowISO = currentDate.toISOString()

            const newDataMapped = forecastHoursData.forecast.map(
                (item: foreCastHoursItem) => ({
                    weather: {
                        text: item.symbolPhrase
                    },
                    temperature: {
                        avg: item.temperature
                    },
                    prec: {
                        sum: item.precipAccum,
                        probability: item.precipProb
                    },
                    wind: {
                        avg: item.windSpeed,
                        unit: 'km/h'
                    },
                    time: item.time,
                    pressure: item.pressure || 'N/A',
                    isNight: !!isNight(item.time)
                })
            )
            setIsLoading(false)
            setForecastHours(newDataMapped)
        } catch (error) {
            console.error(
                'Ocurrió un error al obtener los datos de pronóstico:',
                error
            )
        }
    }

    return (
        <ForecastContext.Provider
            value={{
                setLocationUser,
                forecastDays,
                locationUser,
                initForecastDays,
                initForecastHours,
                forecastHours,
                currentTime,
                trialFreeSearch,
                setIsLoading,
                isLoading,
                setIsDarkMode,
                isDarkMode
            }}
        >
            {children}
        </ForecastContext.Provider>
    )
}
