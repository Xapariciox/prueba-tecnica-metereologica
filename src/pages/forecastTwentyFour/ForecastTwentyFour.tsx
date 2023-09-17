import { useContext, useEffect, useState } from 'react'
import { ForecastContext } from '../../context/ForecastContext'
import styles from '../../styles/general.module.css'
import { ForeCastHours } from '../../components/ForeCastHours'
import { HeaderText } from '../../components/HeaderText'
import { CloudSpinner } from '../../components/CloudSpinner'

export const ForecastTwentyFour = () => {
    const { locationUser, forecastHours, currentTime, isLoading } =
        useContext(ForecastContext)

    return (
        <>
            <div className={styles.containerFullHours}>
                {isLoading ? (
                    <CloudSpinner />
                ) : forecastHours.length > 1 ? (
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
                ) : (
                    <div
                        className={`${styles.divTitleWithoutData} ${styles.rebote}`}
                    >
                        <h2 style={{ textAlign: 'center' }}>
                            Busca una localidad para ver datos metereologicos de
                            las proximas 24 horas
                        </h2>
                    </div>
                )}
            </div>
        </>
    )
}
