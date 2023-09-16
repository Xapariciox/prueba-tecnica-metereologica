import { useEffect, useState } from 'react'
import {
    getForecastDays,
    getForecastHours
} from '../services/data-meteorological'
import { ForecastContext } from './ForecastContext'
import { HourlyForecastItem, foreCastDaysItem } from '../interfaces/types'
import { mockMadridDays, mockMadridHours } from '../mocks/responseMadrid'
import { translateItems } from '../helpers/translateTextToSpanish'
import { getStorage, setStorage } from '../services/localstorage'

export const ForecastProvider = ({ children }: { children: JSX.Element }) => {
    const [locationUser, setLocationUser] = useState('')
    const [forecastDays, setForecastDays] = useState({})
    const [forecastHours, setForecastHours] = useState({})
    const [currentTime, setCurrentTime] = useState('')
    const [trialFreeSearch, setTrialFreeSearch] = useState('')

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
        const numberSearchesLocalStorage = getStorage('numberSearches')
        if (!numberSearchesLocalStorage) {
            setStorage('numberSearches', '1')
            setTrialFreeSearch('1')
        } else {
            if (numberSearchesLocalStorage === '5') {
                setTrialFreeSearch('5')
            } else {
                const searchesNumer = parseInt(numberSearchesLocalStorage) + 1
                const searchesString = searchesNumer.toString()
                setStorage('numberSearches', searchesString)
            }
        }
    }
    useEffect(() => {
        getCurrentDate()
        viewTrialFreesearches()
    }, [forecastHours])

    const initForecastDays = async () => {
        try {
            // const forecastDaysData = await getForecastDays(locationUser)
            const forecastDaysMapped = forecastDaysData.forecast.items.map(
                (forecast: foreCastDaysItem) => ({
                    date: forecast.date,
                    state: forecast.weather.state,
                    temperature: {
                        min: forecast.temperature.min,
                        max: forecast.temperature.max
                    },
                    weather: {
                        text: forecast.weather.text,
                        icon: forecast.weather.icon
                    },
                    precPosibility: forecast.prec.probability
                })
            )
            const next7Days = forecastDaysMapped.splice(0, 7)
            const dataTranslated = translateItems(next7Days)

            setForecastDays(dataTranslated)
        } catch (error) {
            console.error(
                'Ocurrió un error al obtener los datos de pronóstico:',
                error
            )
        }
    }

    const initForecastHours = async () => {
        try {
            // const forecastHoursData = await getForecastHours(locationUser)

            const currentDate = new Date()
            const nowISO = currentDate.toISOString()

            // forecastHoursData.then(resp => console.log(resp))
            let filteredData = forecastHoursData.forecast.items.filter(
                (item: HourlyForecastItem) => {
                    return (
                        new Date(item.date).getTime() >=
                        new Date(nowISO).getTime()
                    )
                }
            )

            const next24Hours = filteredData.slice(0, 24)
            const datatranslated = translateItems(next24Hours)
            setForecastHours(datatranslated)
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
                trialFreeSearch
            }}
        >
            {children}
        </ForecastContext.Provider>
    )
}
