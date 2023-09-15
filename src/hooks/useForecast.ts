import { useContext, SyntheticEvent, ChangeEvent } from 'react'
import { ForecastContext } from '../context/ForecastContext'
import { getStorage, setStorage } from '../services/localstorage'

export const useForecast = () => {
    const {
        locationUser,
        initForecastDays,
        initForecastHours,
        setLocationUser
    } = useContext(ForecastContext)

    const handleLocationUser = (event: ChangeEvent<HTMLInputElement>) => {
        const element = event.target

        setLocationUser(element.value)

        // setLocationUser()
    }

    const handleForecast = (event: SyntheticEvent) => {
        event.preventDefault()
        if (!locationUser) {
            return
        }
        const storedLocation = getStorage('location-user')
        if (!storedLocation || storedLocation !== locationUser) {
            setStorage('location-user', locationUser)
            initForecastDays()
            initForecastHours()
        }
    }
    const loadAllForecast = () => {}

    return {
        handleLocationUser,
        handleForecast
    }
}
