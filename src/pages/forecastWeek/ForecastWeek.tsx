import { useContext } from 'react'
import { ForecastContext } from '../../context/ForecastContext'
import styles from '../../styles/general.module.css'
import { useForecast } from '../../hooks/useForecast'
import { ForecastDays } from '../../components/ForecastDays'
import { HeaderText } from '../../components/HeaderText'

export const ForecastWeek = () => {
    const { locationUser, forecastDays, currentTime } =
        useContext(ForecastContext)

    return (
        <>
            <div className={styles.containerFullDays}>
                {forecastDays.length > 1 && (
                    <>
                        <HeaderText />
                        <p className={styles.leyendaHours}>
                            Pronostico Semanal
                        </p>
                        <p className={styles.leyendaHours}>
                            Ultima actualizacion: {currentTime}
                        </p>
                        <ForecastDays days={forecastDays} />
                    </>
                )}
            </div>
        </>
    )
}
