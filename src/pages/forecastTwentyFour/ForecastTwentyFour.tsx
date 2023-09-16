import { useContext } from 'react'
import { ForecastContext } from '../../context/ForecastContext'
import styles from '../../styles/general.module.css'
import { useForecast } from '../../hooks/useForecast'
import { ForeCastHours } from '../../components/ForeCastHours'

export const ForecastTwentyFour = () => {
    const { locationUser, forecastHours } = useContext(ForecastContext)
    const headerText = locationUser
        ? `El tiempo en ${locationUser}`
        : 'El tiempo en ...'
    const { handleLocationUser } = useForecast()

    return (
        <>
            <div className={styles.containerFullHours}>
                {forecastHours.length > 1 && (
                    <>
                        <h2 style={{ textAlign: 'center' }}>{headerText}</h2>
                        <p className={styles.leyendaHours}>
                            Pronostico de las proximas 24 horas
                        </p>
                        <p className={styles.leyendaHours}>
                            Ultima actualizacion : TODO
                        </p>
                        <ForeCastHours hours={forecastHours} />
                    </>
                )}
            </div>
        </>
    )
}
