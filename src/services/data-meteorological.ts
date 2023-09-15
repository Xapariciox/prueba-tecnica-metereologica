import {
    ForecastDays,
    HourlyForecastItem,
    foreCastDaysItem
} from '../interfaces/types'

const getApiDays = ({ place }: { place: string }) => {
    if (!place) {
        throw new Error('Place not entered')
    }
    return `https://forecast9.p.rapidapi.com/rapidapi/forecast/${place}/summary/`
}

const getApiHours = ({ place }: { place: string }) => {
    if (!place) {
        throw new Error('Place not entered')
    }
    return `https://forecast9.p.rapidapi.com/rapidapi/forecast/${place}/hourly/`
}

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e9d6cd58b2msh1bf8d07863d66b5p1aab63jsn72001fe5cfd1',
        'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
    }
}

export const getForecastDays: (place: string) => Promise<ForecastDays> = async (
    place: string
) => {
    try {
        const response = await fetch(getApiDays({ place }), options)
        const result = await response.json()
        console.log('se realizo llamada')
        return result
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const getForecastHours: (place: string) => Promise<any> = async (
    place: string
) => {
    try {
        const response = await fetch(getApiHours({ place }), options)
        const result = await response.json()
        console.log('se realizo llamada')

        return result
    } catch (error) {
        console.error(error)
        return Promise.reject(error)
    }
}
