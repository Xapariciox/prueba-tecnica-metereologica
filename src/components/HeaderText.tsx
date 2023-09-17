import { useContext, useEffect, useState } from 'react'
import { ForecastContext } from '../context/ForecastContext'
import styles from '../styles/general.module.css'
import { getStorage } from '../services/localstorage'

export const HeaderText = () => {
    const { locationUser, trialFreeSearch } = useContext(ForecastContext)

    return (
        <h2 className={styles.headerText} style={{ textAlign: 'center' }}>
            {/* {locationUser
                ? `El tiempo en ${locationUserTitle}`
                : 'El tiempo en ...'} */}
            {`El tiempo en ${locationUser.toLowerCase()}`}
        </h2>
    )
}
