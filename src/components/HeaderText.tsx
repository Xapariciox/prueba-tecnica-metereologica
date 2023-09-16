import { useContext } from 'react'
import { ForecastContext } from '../context/ForecastContext'

export const HeaderText = () => {
    const { locationUser } = useContext(ForecastContext)
    return (
        <h2 style={{ textAlign: 'center' }}>
            {locationUser ? `El tiempo en ${locationUser}` : 'El tiempo en ...'}
        </h2>
    )
}
