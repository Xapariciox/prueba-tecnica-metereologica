import { HourlyForecastItem } from '../interfaces/types'
import styles from '../styles/general.module.css'
import { ForeCastHour } from './ForeCastHour'

export const ForeCastHours = ({
    hours
}: {
    hours: Array<HourlyForecastItem>
}) => {
    return (
        <div className={styles.containerDaysHours}>
            <ul className={styles.ulDaysHours}>
                {hours.map((hour, index) => (
                    <ForeCastHour key={hour.date} hour={hour} />
                ))}
            </ul>
        </div>
    )
}
