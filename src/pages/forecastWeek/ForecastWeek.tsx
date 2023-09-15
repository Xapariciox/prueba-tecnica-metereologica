import { useContext } from 'react'
import { ForecastContext } from '../../context/ForecastContext'
import styles from '../../styles/general.module.css'
import { useForecast } from '../../hooks/useForecast'
import { ForecastDays } from '../../components/ForecastDays'

export const ForecastWeek = () => {
    const { locationUser, forecastDays } = useContext(ForecastContext)

    return (
        <>{forecastDays.length > 1 && <ForecastDays days={forecastDays} />}</>
    )
}
