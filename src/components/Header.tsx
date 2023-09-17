import { Link } from 'wouter'
import styles from '../styles/general.module.css'
import { useForecast } from '../hooks/useForecast'
import { useContext } from 'react'
import { ForecastContext } from '../context/ForecastContext'
import { BsSearch } from 'react-icons/bs'

export const Header = () => {
    const { locationUser, forecastDays } = useContext(ForecastContext)

    const { handleLocationUser, handleForecast } = useForecast()

    return (
        <header className={styles.headerLayaout}>
            <form onSubmit={handleLocationUser} className={styles.divInput}>
                <input
                    className={styles.inputForecast}
                    type="text"
                    name="location"
                    placeholder="Ver tiempo en..."
                />
                <button type="submit" className={styles.buttonForecast}>
                    <BsSearch />
                </button>
            </form>
            <nav className={styles.navHeaderLayout}>
                <ul className={styles.listaNavHeader}>
                    {/* <li>
                        <Link className={styles.linksNavHeader} to="/">
                            Home
                        </Link>
                    </li> */}
                    <li className={styles.itemLiHeader}>
                        <Link
                            className={styles.linksNavHeader}
                            to="/forecast-next-day"
                        >
                            Pronostico proximas 24 horas
                        </Link>
                    </li>
                    <li className={styles.itemLiHeader}>
                        <Link
                            className={styles.linksNavHeader}
                            to="/forecast-next-week"
                        >
                            Pronostico proxima semana
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
