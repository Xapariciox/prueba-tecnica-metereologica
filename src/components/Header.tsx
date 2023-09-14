import { Link } from 'wouter'
import styles from '../styles/general.module.css'

export const Header = () => {
  return (
    <header className={styles.headerLayaout}>
      <nav className={styles.navHeaderLayout}>
        <ul className={styles.listaNavHeader}>
          <li>
            <Link className={styles.linksNavHeader} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.linksNavHeader} to="/forecast-next-day">
              Pronostico proximas 24 horas
            </Link>
          </li>
          <li>
            <Link className={styles.linksNavHeader} to="/forecast-next-week">
              Pronostico proxima semana
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
