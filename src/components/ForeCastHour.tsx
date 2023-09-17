import { ForeCastHoursMappedItem } from '../interfaces/types'
import styles from '../styles/general.module.css'
import moment from 'moment-timezone'
import { FaWind } from 'react-icons/fa'
import { IconWeather } from './IconsWeather'

export const ForeCastHour = ({ hour }: { hour: ForeCastHoursMappedItem }) => {
    const fechaHoraUTC = hour.time
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
            <li className={styles.itemdayHours}>
                <h3 style={{ color: '#fff' }}>{horaFormateada}</h3>
                <div className={styles.divTemperaturaHours}>
                    {' '}
                    <IconWeather
                        text={hour.weather.text}
                        isNight={hour.isNight}
                    />
                    <p className={styles.temperatureHours}>
                        {hour.temperature.avg !== null
                            ? `${hour.temperature.avg} °C`
                            : 'N/A'}
                    </p>
                </div>

                <div className={styles.divPrecipitationHours}>
                    <img
                        width={20}
                        src="../img/lluvia-precipitacion.png"
                        alt="precipitacion"
                    />
                    <p className={styles.numberPropForecast}>
                        {hour.prec.sum} mm
                    </p>
                </div>

                <div className={styles.divWindHours}>
                    <FaWind />
                    <p className={styles.numberPropForecast}>
                        {hour.wind.avg !== null
                            ? `${hour.wind.avg} ${hour.wind.unit}`
                            : 'N/A'}
                    </p>
                </div>

                <div className={styles.hoverDivHours}>
                    <div className={styles.divHpa}>
                        <img
                            width={20}
                            src="../img/hpa.png"
                            alt="precipitacion"
                        />
                        <p className={styles.numberPropForecast}>
                            {!hour.pressure ? `N/A` : hour.pressure} hPa
                        </p>
                    </div>

                    <div className={styles.divPosibilityPrecipitation}>
                        {' '}
                        <img
                            width={20}
                            src="../img/precipitacion-icon.png"
                            alt="precipitacion"
                        />{' '}
                        <p className={styles.numberPropForecast}>
                            {hour.prec.probability}%
                        </p>
                    </div>
                </div>
            </li>
        </>
    )
}
