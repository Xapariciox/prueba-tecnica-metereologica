import { useContext, SyntheticEvent, ChangeEvent } from 'react'
import { ForecastContext } from '../context/ForecastContext'
import { getStorage, setStorage } from '../services/localstorage'
import Swal from 'sweetalert2'

export const useForecast = () => {
    const {
        locationUser,
        initForecastDays,
        initForecastHours,
        setLocationUser,
        forecastDays,
        trialFreeSearch
    } = useContext(ForecastContext)

    const handleLocationUser = (event: ChangeEvent<HTMLInputElement>) => {
        const element = event.target

        setLocationUser(element.value)

        // setLocationUser()
    }

    const handleForecast = (event: SyntheticEvent) => {
        event.preventDefault()
        if (!locationUser) {
            return
        }
        if (trialFreeSearch === '5') {
            Swal.fire({
                title: 'Oh vaya!',
                html: `
                <h5>parece que has agotado las 5 búsquedas gratuitas</h5>
                <p style="font-size: 16px; margin-bottom: 5px">Obtén acceso sin límites con la membresía premium</p>
                <a href="#">Membresia premium<a/>
              `,
                icon: 'error',
                confirmButtonText: 'Cool',
                customClass: {
                    popup: 'my-custom-popup-class'
                },
                showClass: {
                    popup: 'animated fadeIn slower'
                },
                hideClass: {
                    popup: 'animated fadeOut slower'
                }
            })

            return
        }
        const storedLocation = getStorage('location-user')

        if (
            !storedLocation ||
            storedLocation !== locationUser ||
            Object.keys(forecastDays).length < 1
        ) {
            setStorage('location-user', locationUser)
            initForecastDays()
            initForecastHours()
        }
    }

    return {
        handleLocationUser,
        handleForecast
    }
}
