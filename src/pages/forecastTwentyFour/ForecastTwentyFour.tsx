import { useContext } from 'react'
import { ForecastContext } from '../../context/ForecastContext'

export const ForecastTwentyFour = () => {
  const { locationUser } = useContext(ForecastContext)

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>El tiempo en {locationUser}</h2>

      <div></div>
    </>
  )
}
