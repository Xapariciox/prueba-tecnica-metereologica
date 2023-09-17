import {
    ForecastDays,
    HourlyForecastItem,
    foreCastDaysItem
} from '../interfaces/types'

export const getLocationId = async (query: string) => {
    const url = `https://foreca-weather.p.rapidapi.com/location/search/${query}?lang=es`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':
                'e7fdeb2ce2mshaa5ead4a7995c12p1ced8fjsn5444f5bb2d24',
            'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
        }
    }

    try {
        const response = await fetch(url, options)
        const result = await response.json()
        const mappedResult = {
            location: result.locations[0].id,
            country: result.locations[0].country,
            name: result.locations[0].name
        }
        return mappedResult
    } catch (error) {
        console.error(error)
    }
}
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
        'X-RapidAPI-Key': 'e7fdeb2ce2mshaa5ead4a7995c12p1ced8fjsn5444f5bb2d24',
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

        return result
    } catch (error) {
        console.error(error)
        return Promise.reject(error)
    }
}
