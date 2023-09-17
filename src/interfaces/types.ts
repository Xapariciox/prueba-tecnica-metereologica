export interface ForecastContextProps {
    setLocationUser: (location: string) => void
    locationUser: string
    forecastDays: Array<foreCastDaysItemMapped>
    forecastHours: Array<ForeCastHoursMappedItem>
    initForecastDays: () => void
    initForecastHours: () => void
    currentTime: string
    trialFreeSearch: string
    setIsLoading: (isLoading: boolean) => void
    isLoading: boolean
}
export interface foreCastDaysItem {
    date: string
    symbol: string
    symbolPhrase: string
    maxTemp: number
    minTemp: number
    maxFeelsLikeTemp: number
    minFeelsLikeTemp: number
    maxRelHumidity: number
    minRelHumidity: number
    maxDewPoint: number
    minDewPoint: number
    precipAccum: number
    snowAccum: number
    maxWindSpeed: number
    windDir: number
    maxWindGust: number
    precipProb: number
    cloudiness: number
    sunrise: string
    sunset: string
    sunriseEpoch: number
    sunsetEpoch: number
    moonrise: string
    moonset: string
    moonPhase: number
    uvIndex: number
    minVisibility: number
    pressure: number
    confidence: string
    solarRadiationSum: number
}

export interface foreCastHoursItem {
    time: string
    symbol: string
    symbolPhrase: string
    temperature: number
    feelsLikeTemp: number
    windSpeed: number
    windGust: number
    relHumidity: number
    dewPoint: number
    windDir: number
    windDirString: string
    precipProb: number
    precipAccum: number
    snowAccum: number
    cloudiness: number
    thunderProb: number
    uvIndex: number
    pressure: number
    visibility: number
    solarRadiation: number
    precipType: string
}
export interface foreCastDaysItemMapped {
    date: string
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

export interface ForecastDays {
    forecast: foreCastDaysItem[]
}
export interface ForecastHours {
    forecast: foreCastHoursItem[]
}

export interface ForeCastHoursMappedItem {
    weather: Weather
    temperature: Temperature
    prec: Prec
    wind: Wind
    time: string
    pressure: number | string
    isNight: boolean
}

export interface Prec {
    sum: number
    probability: number
}

export interface Temperature {
    avg: number
}

export interface Weather {
    text: string
}

export interface Wind {
    avg: number
    unit: string
}
