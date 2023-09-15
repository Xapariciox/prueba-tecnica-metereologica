import { foreCastDaysItemMapped } from '../interfaces/types'
import { ForecastDay } from './ForecastDay'
import styles from '../styles/general.module.css'
export const ForecastDays = ({
    days
}: {
    days: Array<foreCastDaysItemMapped>
}) => {
    return (
        <ul className={styles.containerDaysWeek}>
            {days.map((day, index) => (
                <ForecastDay key={index} day={day} />
            ))}
        </ul>
    )
}
