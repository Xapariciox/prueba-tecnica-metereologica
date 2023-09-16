import { useContext, useEffect, useState } from 'react'
import { ForecastContext } from '../../context/ForecastContext'
import styles from '../../styles/general.module.css'
import { ForeCastHours } from '../../components/ForeCastHours'
import { HeaderText } from '../../components/HeaderText'

export const ForecastTwentyFour = () => {
    const { locationUser, forecastHours, currentTime } =
        useContext(ForecastContext)

    return (
        <>
            <div className={styles.containerFullHours}>
                {forecastHours.length > 1 && (
                    <>
                        <HeaderText />
                        <p className={styles.leyendaHours}>
                            Pronostico de las proximas 24 horas
                        </p>
                        <p className={styles.leyendaHours}>
                            Ultima actualizacion: {currentTime}
                        </p>
                        <ForeCastHours hours={forecastHours} />
                    </>
                )}
            </div>
        </>
    )
}
