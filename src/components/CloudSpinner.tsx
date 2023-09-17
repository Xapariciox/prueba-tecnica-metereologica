import { ScaleLoader } from 'react-spinners'
import styles from '../styles/general.module.css'
import { css } from '@emotion/react'
export const CloudSpinner = () => {
    return (
        <div className={styles.loading}>
            <ScaleLoader color="#04aeef"></ScaleLoader>
        </div>
    )
}
