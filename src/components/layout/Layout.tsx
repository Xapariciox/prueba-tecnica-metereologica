import { ForecastContext } from '../../context/ForecastContext'
import { Header } from '../Header'
import { useContext } from 'react'
import styles from '../../styles/general.module.css'
import { useForecast } from '../../hooks/useForecast'

export const Layout = ({ children }: { children: JSX.Element }) => {
    const { isDarkMode } = useContext(ForecastContext)

    const headerClass = `${isDarkMode ? `${styles.darkMode} darkMode` : ''}`
    return (
        <>
            <Header></Header>
            <main className={headerClass}>{children}</main>
        </>
    )
}
