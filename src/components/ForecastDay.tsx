import { foreCastDaysItemMapped } from '../interfaces/types'
import styles from '../styles/general.module.css'

export const ForecastDay = ({ day }: { day: foreCastDaysItemMapped }) => {
    const { date, state, temperature, weather } = day

    return (
        <li className={styles.itemDayWeek}>
            <p>Fecha: {date}</p>
            <p>Estado del clima: {state}</p>
            <p>Temperatura mínima: {temperature.min}</p>
            <p>Temperatura máxima: {temperature.max}</p>
            <p>Clima: {weather.text}</p>
        </li>
    )
}
