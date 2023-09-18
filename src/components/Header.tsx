import { Link } from 'wouter'
import styles from '../styles/general.module.css'
import { useForecast } from '../hooks/useForecast'
import { useContext } from 'react'
import { ForecastContext } from '../context/ForecastContext'
import { BsSearch } from 'react-icons/bs'
import { Switch } from './Switch'

export const Header = () => {
    const { locationUser, forecastDays, isDarkMode } =
        useContext(ForecastContext)

    const { handleLocationUser, handleForecast } = useForecast()
    const headerClass = `${styles.headerLayaout}  ${
        isDarkMode ? styles.darkMode : ''
    }`

    return (
        <header className={headerClass}>
            <nav className={styles.navHeaderLayout}>
                <ul className={styles.listaNavHeader}>
                    {/* <li>
                        <Link className={styles.linksNavHeader} to="/">
                            Home
                        </Link>
                    </li> */}
                    <Link
                        className={styles.linksNavHeader}
                        to="/forecast-next-day"
                    >
                        <li className={styles.itemLiHeader}>
                            Pronóstico 24 horas
                        </li>
                    </Link>
                    <Link
                        className={styles.linksNavHeader}
                        to="/forecast-next-week"
                    >
                        <li className={styles.itemLiHeader}>
                            Pronóstico semana
                        </li>
                    </Link>

                    <form
                        onSubmit={handleLocationUser}
                        className={styles.divInput}
                    >
                        <input
                            className={styles.inputForecast}
                            type="text"
                            name="location"
                            placeholder="Ver tiempo en..."
                        />
                        <button type="submit" className={styles.buttonForecast}>
                            {}
                            <BsSearch color={isDarkMode ? 'white' : ''} />
                        </button>
                    </form>
                    <Switch />
                </ul>
            </nav>
        </header>
    )
}
