import styles from '.././../styles/general.module.css'
import { Link } from 'wouter'

export const Home = () => {
  return (
    <>
      <ul className={styles.ulHome}>
        <li className={styles.liHome}>
          <Link className={styles.linkHome} to="/forecast-next-day">
            24 horas
          </Link>
        </li>
        <li className={styles.liHome}>
          <Link className={styles.linkHome} to="/forecast-next-week">
            Semana
          </Link>
        </li>
        {/* <li>
        <Link to="/forecast-next-day">24 horas</Link>
        </li> */}
      </ul>
    </>
  )
}
