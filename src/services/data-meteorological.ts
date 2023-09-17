import { ForecastDays, ForecastHours } from '../interfaces/types'

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e7fdeb2ce2mshaa5ead4a7995c12p1ced8fjsn5444f5bb2d24',
        'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
    }
}

export const getLocationId = async (place: string) => {
    const url = `https://foreca-weather.p.rapidapi.com/location/search/${place}?lang=es`

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

        return false
    }
}

const getApiDays = async (place: string) => {
    if (!place) {
        throw new Error('Place not entered')
    }
    const locationId = await getLocationId(place)
    if (locationId) {
        return `https://foreca-weather.p.rapidapi.com/forecast/daily/${locationId.location}?alt=0&tempunit=C&windunit=MS&dataset=full`
    } else {
        throw new Error('Not Found Place')
    }
}

const getApiHours = async (place: string) => {
    if (!place) {
        throw new Error('Place not entered')
    }
    const locationId = await getLocationId(place)

    if (locationId) {
        return `https://foreca-weather.p.rapidapi.com/forecast/hourly/${locationId.location}?alt=0&tempunit=C&windunit=KMH&tz=Europe%2FLondon&dataset=full&history=0`
    } else {
        throw new Error('Not Found Place')
    }
}

export const getForecastDays: (place: string) => Promise<ForecastDays> = async (
    place: string
) => {
    const url = await getApiDays(place)
    if (url) {
        try {
            const response = await fetch(url, options)
            const result = await response.json()
            return result
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export const getForecastHours: (
    place: string
) => Promise<ForecastHours> = async (place: string) => {
    const url = await getApiHours(place)
    if (url) {
        try {
            const response = await fetch(url, options)
            const result = await response.json()

            return result
        } catch (error) {
            console.error(error)
            return Promise.reject(error)
        }
    }
}
