import { useContext } from 'react'
import { ForecastContext } from '../../context/ForecastContext'
import styles from '../../styles/general.module.css'
import { useForecast } from '../../hooks/useForecast'

export const ForecastTwentyFour = () => {
    const { locationUser, forecastHours } = useContext(ForecastContext)
    // const headerText = locationUser
    //     ? `El tiempo en ${locationUser}`
    //     : 'El tiempo en ...'
    const { handleLocationUser } = useForecast()

    return (
        <>
            {/* <h2 style={{ textAlign: 'center' }}>{headerText}</h2> */}

            {forecastHours.length > 1 && console.log(forecastHours)}
        </>
    )
}
