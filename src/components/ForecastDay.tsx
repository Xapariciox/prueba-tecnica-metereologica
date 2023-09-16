import { useContext } from 'react'
import { foreCastDaysItemMapped } from '../interfaces/types'
import styles from '../styles/general.module.css'
import { ForecastContext } from '../context/ForecastContext'
import { CurrentDay } from './CurrentDay'
import { IconWeather } from './IconsWeather'

export const ForecastDay = ({ day }: { day: foreCastDaysItemMapped }) => {
    const { date, state, temperature, weather, precPosibility } = day
    const { currentTime } = useContext(ForecastContext)
    const dateSplit = date.split('-')
    return (
        <li className={styles.itemDayWeek}>
            <div className={styles.divCurrentDayHours}>
                <CurrentDay date={date} />
                <p className={styles.monthHours}>{dateSplit[2]}</p>
            </div>

            <div className={styles.divWeatherTempDays}>
                <IconWeather width={60} text={weather.text} />
                <div>
                    {' '}
                    <p className={styles.tempDays}>Min: {temperature.min}°</p>
                    <p className={styles.tempDays}>Max: {temperature.max}°</p>
                </div>
            </div>
            <div className={styles.divPosibilityPrecipitation}>
                {' '}
                <img
                    width={20}
                    src="../img/precipitacion-icon.png"
                    alt="precipitacion"
                />{' '}
                <p className={styles.precPosibilityDays}>{precPosibility}%</p>
            </div>
        </li>
    )
}
