export interface ForecastContextProps {
    setLocationUser: (location: string) => void
    locationUser: string
    forecastDays: any
    forecastHours: any
    // daysMapped: Array<foreCastDaysItemMapped>
    // forecastHoursMock: any
    initForecastDays: () => void
    initForecastHours: () => void
    currentTime: string
}
export interface foreCastDaysItem {
    date: string
    dateWithTimezone: string
    freshSnow: number | null
    snowHeight: number | null
    weather: {
        state: number
        text: string
        icon: string
    }
    prec: {
        sum: number
        probability: number
        sumAsRain: number | null
        class: number
    }
    sunHours: number
    rainHours: number | null
    temperature: {
        min: number
        max: number
        avg: number | null
    }
    wind: {
        unit: string
        direction: string
        text: string
        avg: number | null
        min: number | null
        max: number | null
        significationWind: boolean
    }
    windchill: {
        min: number
        max: number
        avg: number | null
    }
    snowLine: {
        avg: number | null
        min: number | null
        max: number | null
        unit: string
    }
    astronomy: {
        dawn: string
        sunrise: string
        suntransit: string
        sunset: string
        dusk: string
        moonrise: string
        moontransit: string | null
        moonset: string | null
        moonphase: number
        moonzodiac: number
    }
}

export interface foreCastDaysItemMapped {
    date: string
    state: number
    temperature: {
        min: number
        max: number
    }
    weather: {
        text: string
        icon: string
    }
    precPosibility: number
}

export interface HourlyForecastItem {
    date: string
    period: number
    freshSnow: number | null
    weather: {
        state: number
        text: string
        icon: string
    }
    sunHours: number | null
    rainHours: number | null
    prec: {
        sum: number
        probability: number
        sumAsRain: number | null
        class: number
    }
    temperature: {
        avg: number | null
    }
    pressure: number
    relativeHumidity: number
    clouds: {
        high: number
        low: number
        middle: number
    }
    wind: {
        unit: string
        direction: string
        text: string
        avg: number | null
        min: number | null
        max: number | null
        gusts: {
            value: number | null
            text: string | null
        }
        significationWind: boolean
    }
    windchill: {
        avg: number | null
        min: number | null
        max: number | null
    }
    snowLine: {
        avg: number | null
        min: number | null
        max: number | null
        unit: string
    }
    isNight: boolean
}

export interface ForecastDays {
    location: {
        code: string
        name: string
        timezone: string
        coordinates: {
            latitude: number
            longitude: number
        }
    }
    forecast: {
        items: foreCastDaysItem[]
    }
}
