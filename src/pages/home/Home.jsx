import styles from '.././../styles/general.module.css'
import { Link } from 'wouter'

export const Home = () => {
    return (
        <>
            <ul className={styles.ulHome}>
                <Link className={styles.linkHome} to="/forecast-next-day">
                    <li className={styles.liHome}> Pronostico 24 horas</li>
                </Link>

                <Link className={styles.linkHome} to="/forecast-next-week">
                    <li className={styles.liHome}>Pronostico Semanal</li>
                </Link>

                {/* <li>
        <Link to="/forecast-next-day">24 horas</Link>
        </li> */}
            </ul>
        </>
    )
}
