import styles from '../styles/general.module.css'

export const CurrentDay = ({ date }: { date: string }) => {
    const fechaString = date
    const fecha = new Date(fechaString)
    const diaDeLaSemana = fecha.getDay()
    const diasDeLaSemana = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado'
    ]

    const nombreDelDia = diasDeLaSemana[diaDeLaSemana]

    const diaActual = new Date().getDay()

    const esHoy = diaActual === diaDeLaSemana

    const contenido = esHoy ? (
        <p className={`${styles.isCurrentDay} ${styles.nameOfDay}`}>Hoy</p>
    ) : (
        <p className={styles.nameOfDay}>{nombreDelDia}</p>
    )

    return contenido
}
