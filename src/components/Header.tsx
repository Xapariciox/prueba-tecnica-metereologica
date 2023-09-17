import { Link } from 'wouter'
import styles from '../styles/general.module.css'
import { useForecast } from '../hooks/useForecast'
import { useContext } from 'react'
import { ForecastContext } from '../context/ForecastContext'
import { BsSearch } from 'react-icons/bs'
import { toast } from 'sonner'

export const Header = () => {
    const { locationUser, forecastDays } = useContext(ForecastContext)

    const { handleLocationUser, handleForecast } = useForecast()

    return (
        <header className={styles.headerLayaout}>
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
                            Pronostico 24 horas
                        </li>
                    </Link>
                    <Link
                        className={styles.linksNavHeader}
                        to="/forecast-next-week"
                    >
                        <li className={styles.itemLiHeader}>
                            Pronostico semana
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
                            <BsSearch />
                        </button>
                    </form>
                </ul>
            </nav>
        </header>
    )
}
