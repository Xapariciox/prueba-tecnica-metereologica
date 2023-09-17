import { useContext } from 'react'
import { ForecastContext } from '../../context/ForecastContext'
import styles from '../../styles/general.module.css'
import { useForecast } from '../../hooks/useForecast'
import { ForecastDays } from '../../components/ForecastDays'
import { HeaderText } from '../../components/HeaderText'
import { CloudSpinner } from '../../components/CloudSpinner'

export const ForecastWeek = () => {
    const { locationUser, forecastDays, currentTime, isLoading } =
        useContext(ForecastContext)

    return (
        <>
            <div className={styles.containerFullDays}>
                {isLoading ? (
                    <CloudSpinner />
                ) : forecastDays.length > 1 ? (
                    <>
                        <HeaderText />
                        <p className={styles.leyendaHours}>
                            Pronóstico Semanal
                        </p>
                        <p className={styles.leyendaHours}>
                            Última actualización: {currentTime}
                        </p>
                        <ForecastDays days={forecastDays} />
                    </>
                ) : (
                    <div
                        className={`${styles.divTitleWithoutData} ${styles.rebote}`}
                    >
                        <h2 style={{ textAlign: 'center' }}>
                            Busca una localidad para ver datos meteorológicos de
                            la semana
                        </h2>
                    </div>
                )}
            </div>
        </>
    )
}
