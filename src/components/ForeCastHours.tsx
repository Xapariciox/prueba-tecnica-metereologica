import { ForeCastHoursMappedItem } from '../interfaces/types'
import styles from '../styles/general.module.css'
import { ForeCastHour } from './ForeCastHour'

export const ForeCastHours = ({
    hours
}: {
    hours: Array<ForeCastHoursMappedItem>
}) => {
    return (
        <div className={styles.containerDaysHours}>
            <ul className={styles.ulDaysHours}>
                {hours.map(hour => (
                    <ForeCastHour key={hour.time} hour={hour} />
                ))}
            </ul>
        </div>
    )
}
