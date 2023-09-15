import { useEffect, useState } from 'react'
import {
    getForecastDays,
    getForecastHours
} from '../services/data-meteorological'
import { ForecastContext } from './ForecastContext'
import { foreCastDaysItem } from '../interfaces/types'
import { mockMadridDays, mockMadridHours } from '../mocks/responseMadrid'
import { translateItems } from '../helpers/translateTextToSpanish'
import { getStorage, setStorage } from '../services/localstorage'

export const ForecastProvider = ({ children }: { children: JSX.Element }) => {
    const [locationUser, setLocationUser] = useState('')
    const [forecastDays, setForecastDays] = useState({})
    const [forecastHours, setForecastHours] = useState({})

    // Mock de la api para usar en local
    const forecastHoursData = mockMadridHours
    const forecastDaysData = mockMadridDays
    // Mock de la api para usar en local

    const initForecastDays = async () => {
        try {
            const forecastDaysData = await getForecastDays(locationUser)
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
                    }
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
            const forecastHoursData = await getForecastHours(locationUser)

            const currentDate = new Date()
            const nowISO = currentDate.toISOString()

            // forecastHoursData.then(resp => console.log(resp))
            let filteredData = forecastHoursData.forecast.items.filter(
                (item: any) => {
                    return (
                        new Date(item.date).getTime() >=
                        new Date(nowISO).getTime()
                    )
                }
            )

            const next24Hours = filteredData.slice(0, 24)

            setForecastHours(next24Hours)
        } catch (error) {
            console.error(
                'Ocurrió un error al obtener los datos de pronóstico:',
                error
            )
        }
    }

    // useEffect(() => {
    //     initForecastDays()
    //     initForecastHours()
    // }, [locationUser])

    useEffect(() => {
        // initForecast()
    }, [locationUser])

    return (
        <ForecastContext.Provider
            value={{
                setLocationUser,
                forecastDays,
                // forecastHoursMock,
                // daysMapped,
                locationUser,
                initForecastDays,
                initForecastHours,
                forecastHours
            }}
        >
            {children}
        </ForecastContext.Provider>
    )
}
