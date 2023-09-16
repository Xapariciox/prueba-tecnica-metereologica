import { HourlyForecastItem } from '../interfaces/types'
import styles from '../styles/general.module.css'
import moment from 'moment-timezone'

export const ForeCastHour = ({ hour }: { hour: HourlyForecastItem }) => {
    const fechaHoraUTC = hour.date

    const momentUTC = moment(fechaHoraUTC)

    const momentMadrid = momentUTC.tz('Europe/Madrid')

    const horaFormateada = momentMadrid.format('HH:mm')
    const objetoFechaHora = {
        año: momentMadrid.year(),
        mes: momentMadrid.month() + 1,
        día: momentMadrid.date(),
        hora: momentMadrid.hour(),
        minuto: momentMadrid.minute()
    }

    return (
        <>
            {/* <li className={styles.itemdayHours}>
                <p>Fecha y hora: {hour.date}</p>

                <p>Estado del clima: {hour.weather.text}</p>

                <p>Precipitación total: {hour.prec.sum} mm</p>
                <p>Probabilidad de precipitación: {hour.prec.probability}%</p>

                <p>
                    Temperatura promedio:{' '}
                    {hour.temperature.avg !== null
                        ? `${hour.temperature.avg} °C`
                        : 'N/A'}
                </p>
                <p>Presión atmosférica: {hour.pressure} hPa</p>

                <p>Nubes altas: {hour.clouds.high}%</p>

                <p>
                    Viento:{' '}
                    {hour.wind.avg !== null
                        ? `${hour.wind.avg} ${hour.wind.unit}`
                        : 'N/A'}
                </p>

                <p>Es de noche: {hour.isNight ? 'Sí' : 'No'}</p>
            </li> */}

            <li className={styles.itemdayHours}>
                <h3>{horaFormateada}</h3>
                <p>
                    {hour.temperature.avg !== null
                        ? `${hour.temperature.avg} °C`
                        : 'N/A'}
                </p>
                <p>{hour.prec.sum} mm</p>
                <p>
                    {hour.wind.avg !== null
                        ? `${hour.wind.avg} ${hour.wind.unit}`
                        : 'N/A'}
                </p>
            </li>
        </>
    )
}
